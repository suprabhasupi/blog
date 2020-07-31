---
title: AWS AppSync integration with React Native(part-2)
slug: /2-aws-appsync-integration-with-react-native-part-2
date: 2018-09-15
desc: AppSync automatically updates the data in web and mobile apps in real time.
# Old URL
# Minute Read
cover:
  img: ../../../photos/2-aws-appsync-integration-with-react-native.png
banner: ../../banners/2-aws-appsync-integration-with-react-native.png
tags:
  - AWS
---

import LinkPost from '../../../src/components/linkPost'

<p><span class='first-letter'>I</span>n last blog Part 1, We have completed AppSync setup.
</p>

The next step is to link the data source that we have created to the app we are working on.

- Go to the <LinkPost href='https://console.aws.amazon.com/appsync/home' name='AWS AppSync console' />.
- Choose your API.
- At the bottom of the page, choose React Native, and then download the `AppSync.js` file.
- Place the AppSync.js file into your `./src` directory.
- Add the requisite libraries to your project

```sh
$ yarn add react-apollo graphql-tag aws-sdk aws-appsync aws-appsync-react
```

- Edit the `./android/app/src/main/AndroidManifest.xml` file. Add the following permission (in the same place as the other permissions)

```js
<uses-permission android:name=”android.permission.ACCESS_NETWORK_STATE” />
```

- Create the GraphQL documents. Create a new file ./src/graphql.js with the following contents. This block binds the GraphQL queries and mutations to function props on the React components.


```js
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

export const ListAllNotes = gql`query ListAllNotes {
    allNote {
        noteId, title
    }
}`;

export const GetNote = gql`query GetNote($noteId:ID!) {
    getNote(noteId:$noteId) {
        noteId, title, content
    }
}`;

export const SaveNote = gql`mutation SaveNote($noteId:ID!,$title:String!,$content:String!) {
    putNote(noteId:$noteId, title:$title, content:$content) {
        noteId, title, content
    }
}`;

export const DeleteNote = gql`mutation DeleteNote($noteId:ID!) {
    deleteNote(noteId:$noteId) {
        noteId
    }
}`;

export const operations = {
    ListAllNotes: graphql(ListAllNotes, {
        options: {
            fetchPolicy: 'network-only'
        },
        props: ({ data }) => {
            return {
                loading: data.loading,
                notes: data.allNote
            };
        }
    }),

     GetNote: graphql(GetNote, {
        options: props => {
            return {
                fetchPolicy: 'network-only',
                variables: { noteId: props.navigation.state.params.noteId }
            };
        },
        props: ({ data }) => {
            return {
                loading: data.loading,
                note: data.getNote
            }
        }
    }),

    DeleteNote: graphql(DeleteNote, {
        options: {
            refetchQueries: [ { query: ListAllNotes } ]
        },
        props: props => ({
            deleteNote: (note) => {
                return props.mutate({
                    variables: note,
                    optimisticResponse: {
                        deleteNote: { ...note, __typename: 'Note' }
                    }
                })
            }
        })
    }),

    SaveNote: graphql(SaveNote, {
        options: {
            refetchQueries: [ { query: ListAllNotes } ]
        },
        props: props => ({
            saveNote: (note) => {
                return props.mutate({
                    variables: note,
                    optimisticResponse: {
                        putNote: { ...note, __typename: 'Note' }
                    }
                })
            }
        })
    })
};
```

- Update App.js to instantiate the AppSync connection. Adjust the imports as follows:

```js
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/es/integration/react';
// import { persistor, store } from './src/redux/store';

import AWSAppSyncClient from 'aws-appsync';
import { Rehydrated } from 'aws-appsync-react';
import { ApolloProvider } from 'react-apollo';
import appsyncConfig from './src/config/AppSync';

const appsyncClient = new AWSAppSyncClient({
  url: appsyncConfig.graphqlEndpoint,
  region: appsyncConfig.region,
  auth: { type: appsyncConfig.authenticationType, apiKey: appsyncConfig.apiKey }
});
```

In above snippet, removing redux integration from `App.js` file. Here, we are using GraphQL, so we are no longer needed redux store. React Apollo allows to fetch data from GraphQL server.  Apollo Provider provides the React Apollo functionality to all the other components in the application without passing it explicitly.  Rehydrated in aws-appsync-react will wait until the application cache has been read and is ready to use in the app before rendering the app. By default, this just shows some loading text.

- Replace the return value from the App component with the following:

```js
return (
  <ApolloProvider client={appsyncClient}>
    <Rehydrated>
      <Navigator/>
    </Rehydrated>
  </ApolloProvider>
);
```

- Update the screens to remove Redux connectivity in ./src/screens/NoteListScreen.js and ./src/screens/NoteDetailsScreen.js  Comment out the Redux imports and replace them with AppSync imports (at the top of each file)  Comment out the mapStateToProps, mapDispatchToProps, and connect blocks (at the bottom of each file, marked by //BEGIN-REDUX and //END-REDUX).

```js
// BEGIN-REDUX
// import { connect } from 'react-redux';
// import actions from '../redux/actions';
// END-REDUX

// BEGIN APPSYNC
import { compose } from 'react-apollo';
import * as GraphQL from '../graphql';
// END APPSYNC
```

Here, I have commented connect and actions as we are no longer needed this. Importing Compose, which easily group all of the data requirements together. If we don’t use compose, then by default we receive a prop called mutate for mutation and receive data for query.

- Add the following code block to the bottom of the `./src/screens/NoteListScreen.js` file, just before the export default line

```js
const NoteListScreen = compose(
  GraphQL.operations.ListAllNotes,
  GraphQL.operations.DeleteNote
)(NoteList);

export default NoteDetailsScreen;
```

- Similarly, add the following code block to the bottom of the `./src/screens/NoteDetailsScreen.js` file
  
```js
const NoteDetailsScreen = compose(
  GraphQL.operations.GetNote,
  GraphQL.operations.SaveNote
)(NoteDetails);

export default NoteListScreen;
```

- Run the application. Use the app to add and delete some notes.
- In `..src/screens/NoteListScreen.js`, for deleting the notes we have to make some changes:

```js
onDeleteNote(item) {
  this.props.deleteNote(item);
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteNote: ({ noteId }) => dispatch(actions.notes.deleteNote({ noteId }))
  };
};
```

- Go to the <LinkPost href='https://console.aws.amazon.com/dynamodb/home' name='DynamoDB console' /> and check the table for your connection. You should see a representation of the current set of notes.

### Offline access:

We can move from online access to offline access by changing the fetchPolicy within the operations block of ./src/graphql.js from ‘network-only’ (which is to say – it always query the backend server) to one of the other possible options:

- <mark>‘cache-first’</mark> always returns data from the cache if the data is available. Data is fetched from the network only if a cached result isn’t available.
- <mark>‘cache-and-network’</mark> always queries the network for data, regardless of whether the full data is in your cache. It returns the cache if it’s available. This option is for returning data quickly, but keeping the cached data consistent with the server (note that it might result in some UI “flipping of data” issues).
- <mark>‘network-only’</mark> ignores the cache.
- <mark>‘cache-only’</mark> ignores the network.




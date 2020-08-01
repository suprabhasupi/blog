---
title: Redux
slug: /6-redux
date: 2019-02-08
desc: Redux is a predictable state container for JavaScript apps
# Old URL
# Minute Read
cover:
  img: ../../../photos/6-redux.jpg
banner: ../../banners/6-redux.png
tags:
  - React
---

import ImgPost from '../../../src/components/imgPost'
import LinkPost from '../../../src/components/linkPost'
import DataFlow from './1.gif'

<p><span class='first-letter'>R</span>edux is a predictable state container for JavaScript apps. Need to understand the basic three principle. Here, you don't need to use Babel or a module bundler to get started with Redux. (It integrates with reducer and action.)</p>

**When do you need to integrate redux with app🤔 :**

- You have reasonable amounts of data changing over time
- You need a single source of truth for state
- You find that keeping all the state in a top-level component is no longer sufficient

### Installation 🖥

```sh
$ npm install redux --save
```

There will be some more packages which you need to install for the React bindings and the developer tools.

```sh
$ npm install --save react-redux

$ npm install --save-dev redux-devtools
```

## Actions ⏣

<LinkPost href='https://redux.js.org/basics/actions' name='Actions' /> are payloads of information that send data from our application to our store. They are the only source of information for the store. You send them to the store using `store.dispatch()`

(It’s an object that tells the reducer how to change data. It has only one requirement, it must be have type: property)

```js
export const FETCH_PRODUCTS_LIST_SUCCESS = 'FETCH_PRODUCTS_LIST_SUCCESS';

export const fetchProductSuccess = products => ({
 type: FETCH_PRODUCTS_LIST_SUCCESS,
 payload: products
})
```

## Reducer ⏣

<LinkPost href='https://redux.js.org/basics/reducers' name='Reducer' /> specify how the application’s state changes in response to actions sent to the store. Remember that actions only describe what happened, but don’t describe how the application’s state changes.(It’s a function which returns some data.)

I will be importing `FETCH_PRODUCTS_LIST_SUCCESS` from actions.

```js
import {
 FETCH_PRODUCTS_LIST_SUCCESS
} from '../actions/productAction'

const initialState = {
  loading: false,
  isCartEmpty: true,
  products: []
}
```

You will be handling actions here:

```js
export default function productReducer (state = initialState, action) {
	switch(action.type) {
    case FETCH_PRODUCTS_LIST_SUCCESS:
      return {
         ...state,
         loading: false,
         isCartEmpty: true,
         products: productList
      }
    default:
      return state
  }
}
```

## Store ⏣

It holds reducer and state.
<ImgPost src={DataFlow} alt='Redux data flow' />



<blockquote>
  <p>Data flow:</p>

  Action => (reducer -> state )
</blockquote>

Check an example of data flow here:
`asdf => ‘split’ -> [‘a’, ’s’, ‘d’, ‘f’]`


Here, an online tool for redux function: <LinkPost href='https://stephengrider.github.io/JSPlaygrounds/' name='JSPlaygrounds' />

 

## State ⏣

When you need to update what a component shows, call ‘this.setState’ Only change state with ‘setState’, do not change ’this.state=123’ A plain JS object used to record and respond to user triggered events.


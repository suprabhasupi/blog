---
title: Redux
slug: /6-redux
date: 2019-02-08
desc: Build React Native apps over a single JavaScript codebase for Android and iOS
# Old URL
# Minute Read
cover:
  img: ../../../photos/6-redux.jpg
banner: ../../banners/6-redux.png
tags:
  - React
---

import LinkPost from '../../../src/components/linkPost'

Redux is a predictable state container for JavaScript apps. Need to understand the basic three principle. Here, we don’t need to use Babel or a module bundler to get started with Redux. (It integrates with reducer and action.)

When do we need to integrate redux with app:

- We have reasonable amounts of data changing over time
- We need a single source of truth for state
- We find that keeping all the state in a top-level component is no longer sufficient

### Installation

```sh
$ npm install redux --save
```

There will be some more packages which you need to install for the React bindings and the developer tools.

```sh
$ npm install --save react-redux

$ npm install --save-dev redux-devtools
```

## Actions

<LinkPost href='https://redux.js.org/basics/actions' name='Actions' /> are payloads of information that send data from our application to our store. They are the only source of information for the store. We send them to the store using `store.dispatch()`

(It’s an object that tells the reducer how to change data. It has only one requirement, it must be have type: property)

```js
export const FETCH_PRODUCTS_LIST_SUCCESS = 'FETCH_PRODUCTS_LIST_SUCCESS';

export const fetchProductSuccess = products => ({
 type: FETCH_PRODUCTS_LIST_SUCCESS,
 payload: products
})
```

## Reducer

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

We will be handling actions here:

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
<!-- 
## Store

It holds reducer and state.

Data flow:

Action => (reducer -> state )

Example:

asdf => ‘split’ -> [‘a’, ’s’, ‘d’, ‘f’]

There is an online tool for redux function:

https://stephengrider.github.io/JSPlaygrounds/

 

State:

When we need to update what a component shows, call ‘this.setState’ Only change state with ‘setState’, do not change ’this.state=123’ A plain JS object used to record and respond to user triggered events.
 -->

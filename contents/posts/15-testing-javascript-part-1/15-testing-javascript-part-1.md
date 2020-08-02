---
title: Testing Javascript (part-1)
slug: /15-testing-javascript-part-1
date: 2020-05-15
desc: Understand JEST setup, JestDOM, Coverage, watch mode, monkey patch
priority: 1
# Old URL
# Minute Read
cover:
  img: ../../../photos/15-testing-javascript-part-1.png
banner: ../../banners/15-testing-javascript-part-1.png
tags:
  - JS
  - React
---

import ImgPost from '../../../src/components/imgPost'
import LinkPost from '../../../src/components/linkPost'

<p><span class='first-letter'>T</span>his article is specially for beginners. I have covered testing JavaScript course in two parts:</p>

Below topics which will be covering in <LinkPost href='/15-testing-javascript-part-1' name='this part' />:

1. JEST Setup
2. Import/Modules
3. JestDOM
4. Handling Dynamic Imports
5. COVERAGE
6. Watch Mode
7. Monkey Patch

Below are the topics which I’m going to cover in the <LinkPost href='/16-testing-javascript-part-2' name='second part' />:

1. React Testing Library
2. Snapshot Testing
3. Integration Testing
4. Cypress

## JEST
Jest is a JavaScript test runner, i.e, a JavaScript library for creating, running, and structuring tests.

Test cases will be in this form:
- Arrange
- Act
- Assert

First create a container where you have to see the value, to render things(as DOM). Then, act accordingly and then check or validate.

### 1️⃣ JEST Setup 🖥

```sh
$ npm install --save-dev jest
```

<u>package.json</u>

```json
"scripts":{
	"test": "jest"
}
```

The test file extension can be in tests folder with extension names as: `name.js`, `name.jsx`, `name.test.js/jsx`, `name.spec.js/jsx`

### 2️⃣ Import / Modules ⏣

Now, when you import some components in test file, where import will throw an error because babel configuration should be set to trample everything except for imports.

<blockquote>
<b>Why should we not trample imports when we are using Webpack</b>❓ 🤔

Because webpack supports ES modules. And the reason that Webpack supports ES modules is so it can do tree shaking. 
Which enable to skip some import, will remove the dead code and our bundler will be smaller.
</blockquote>

To make import work in test file, you have to make few changes in `babelrc.js`. You have to change the modules in preset from false to commonjs, which will enable the import to work in test files.

<p><mark>NOTE</mark>: Make sure setting module preset to commonjs works only in test/local environment.</p>

`.babelrc` file only supports JSON, to make it JS supported you need to reset here:

<u>package.json</u>

```json
"babel": {
	"presets" : "./babelrc.js"
}
```

Now you can use `babelrc.js`, where you can write your JS as well.

### 3️⃣ JestDOM

By default, Jest loads JSDOM in environment. So, if you `console.log(window)`, it will return window object, all events which loads in window.

If the test project is in pure javascript, then you don’t actually need to access the window. By adding JSDOM, its pretty heavy memory wise.

To configure that, you need to make a small change here:

<u>package.json:</u>

```json
jest: {
  "testEnvironment": "jest-environment-jsdom" 
  // it will get downloaded when we install 
}
```

After adding the above line, if you c`onsole.log(window)` in JS file, then test will throw an error.

#### <mark>CSS Imports</mark>

Before installing CSS imports, The CSS also will get treated as JS module and will throw error while using class as `.color {}` in any component or page. As we know, Node can’t import CSS, it deals with JSON or JS. 😮

Creating a separate file for jest config in root:

<u>jest.config.js:</u>

```js
module.exports = {
  "modulesNameMapper": {
    '\\.css$': require.resolve('./styleMock') // this file will be empty 
  }
}
```

<u>styleMock.js:</u>

```js
module.exports = {}
```

By above snippet, CSS import issue will get resolved. 😎

But as you know, you are using CSS modules in React.(className = {styles.name})

As you have added the above file(`styleMock`) which is empty. When you console log in the test file `div.innerHTML`, then no class will be shown because you are passing empty style mock file.

So when component get called, and check styles file it will find empty object as `module.exports = {}`

You can fix it in very easy way by installing module name – `Identity object Proxy`.

```sh
$ npm install —save-dev identity-object-proxy
```

<u>jest.config.js:</u>

```js
module.exports = {
  "modulesNameMapper": {
		'\\module\\.css$' : 'identity-obj-proxy',
                '\\.css$': require.resolve('./styleMock') // this file will be empty 
  }
}
```

### 4️⃣ Handling Dynamic Imports

**When import error comes? How to convert dynamic import into the node equivalent? 🤔**

Install the plugin name `babel-plugin-dynamic-import-node`

```sh
$ npm install —save-dev babel-plugin-dynamic-import-node
```

<u>.babelrc.js:</u>

```js
plugins: [
	isTest? 'dynamic-import-node' : null
].filter(Boolean)
```

As null is not a plugin for babel, and it throw error. So, you will filter by boolean. Problem solved 😊

<blockquote>
<b>What about localStorage? How do we test that?</b>

As JSDOM, doesn't support localStorage will add the localStorage file to mock localStorage support.
</blockquote>

<u>localStorage.js:</u>

```js
if (!window.localStorage) {
  window.localStorage = {}
  Object.assign(window.localStorage, {
    removeItem: function removeItem(key) {
    delete this[key]
  }.bind(window.localStorage),
  setItem: function setItem(key, val) {
    this[key] = String(val)
  }.bind(window.localStorage),
  getItem: function getItem(key) {
    return this[key]
  }.bind(window.localStorage),
  })
}
```

<u>jest.config.js:</u>

```js
module.exports = {
  "modulesNameMapper": {
		'\\module\\.css$' : 'identity-obj-proxy',
    '\\.css$': require.resolve('./styleMock') // this file will be empty 
  },
	setupTestFrameworkScriptFile: require.resolve(‘./localStorage.js’)
}
```

Now you can use the localStorage 😎

### 5️⃣ Covergae 📊

The most useful part in JEST which I use frequently, is to check code coverage. Coverage is good to know what are the things has missed for testing.

<u>package.json:</u>

```json
"scripts": {
    "test": "jest --coverage"
}
```

Once you run this, it will generate a coverage report in coverage folder, inside Icov-report/index.html, that will open coverage file.

Now, If you want to see the coverage for only those files which is in src folder then we can do this:

<u>jest.config.js:</u>

```js
module.exports = {
  "modulesNameMapper": {
		'\\module\\.css$' : 'identity-obj-proxy',
    '\\.css$': require.resolve('./styleMock') // this file will be empty 
  },
	setupTestFrameworkcriptFile: require.resolve(‘./localstorage-filename’),	
	collectCoverageFrom : [
		'** /src/**/*.js'
	]
}
```

If you want to put some limit for test cases, let’s say 90%, then only we should able to push the changes into repository else it should throw error saying test has not passed threshold coverage. So, you can add coverage threshold.

<u>jest.config.js:</u>

```js
module.exports = {
  "modulesNameMapper": {
		'\\module\\.css$' : 'identity-obj-proxy',
    '\\.css$': require.resolve('./styleMock') // this file will be empty 
  },
	setupTestFrameworkcriptFile: require.resolve(‘./localstorage-filename’),	
	collectCoverageFrom : [
		'** /src/**/*.js'
	],
	coverageThreshold: {
		"./src/state/": {
	     "functions": 70
     }
	}
}
```

Threshold can also be added on statement, functions and branches.

In code coverage: those which are in red, don’t have test cases/coverage.

### 6️⃣ Watch Mode 🕶

Watch mode is also awesome feature of JEST, where you can run test on the basis of file name or on files which follow some pattern. Specially when you make some changes in file, then it will run only those files for watch mode.

<u>package.json:</u>

```json
"scripts": {
	"test:watch":  "jest —watch"
}
```

Following is an example for handleSubmit:

```js
handleSubmit = e => {
    e.preventDefault()
    const {title, content, tags} = e.target.elements
    const newPost = {
      title: title.value,
      content: content.value,
      tags: tags.value.split(',').map(t => t.trim()),
      date: new Date().toISOString(),
      authorId: this.props.user.id,
    }
    api.posts.create(newPost).then(() => {
      this.props.history.push('/')
    })
  }
```

<u>test.js:</u>

```js
import React from 'react';
import ReactDOM from 'react-dom'
import * as utilMock from '../../utils/api'
import EditorTodo from '../editor.todo'

// to fix the post of undefined, we need to mock the API
jest.mock("../../utils/api", () => {
  return {
    posts: {
      // .then , where we need to return a promise
      create: jest.fn(() => Promise.resolve())
    }
  }
})

const flushPromise = () => {
  return new Promise(resolve => {
    setTimeout(resolve, 0)
  })
}

test('calls onSubmit with the username and password when submitted', async () => {
  const conatiner = document.createElement("div");
  // authorId is expecting some user in test.
  const fakeUser = {id: 'bar'}
  // create react-router history mock
  const fakeHistory = {
    push: jest.fn()
  }
  ReactDOM.render(<EditorTodo user={fakeUser} history={fakeHistory} />, conatiner)

  const form = conatiner.querySelector('form');
  const {title, content, tags} = form.elements;
  title.value='Hello'
  content.value='Coming here!'
  tags.value="something,     which,   is  ,here"

  const submit = new window.Event('submit');
  form.dispatchEvent(submit)
  // assertion
  // it throw error because fakeHistory is aynchronous, so we need to wait unti its not resolved,
  // So, we will write function for resolve
  // And that's why I made the function async
  await flushPromise()

  expect(fakeHistory.push).toHaveBeenCalledTimes(1)
  // as we are redirecting to the homepage /
  expect(fakeHistory.push).toHaveBeenCalledWith('/')
  expect(utilMock.posts.create).toHaveBeenCalledTimes(1)
  expect(utilMock.posts.create).toHaveBeenCalledWith({
    authorId: fakeUser.id,
    title: title.value,
    content: content.value,
    tags: ['something', 'which', 'is', 'here'],
    date: expect.any(String)
  })
})
```

### 7️⃣ Monkey Patch 🐵

If you modify any functions in test file then we have to take care of the original function as well, as its also getting changed. We can use spyOn / Mock to create mock function, that will solve our problem.

If you change any function in test file, then it will change to main function as well. SO, If we change anything functions in test file then we have to take care of the main function as well, as its also getting changed. After completion of test, we should return the actual function.

This, will get solved by **spyOn / Mock.**

<mark>SPYON</mark>

Creates a mock function similar to jest.fn but also tracks calls to `object[methodName]`.

By default `jest.spyOn()` does not override the implementation (this is the opposite of jasmine.spyOn). If you don’t want it to call through, you have to mock the implementation, using mockImplementation

- `jest.mock`: Mock a module
- `jest.spyOn`: Spy or mock a function

But, instead of using `jest.spyOn`, mock is great. Because `jest.spyOn` is based on naming convention , which is not good. `jest.mock` does this automatically for all functions in a module. `jest.spyOn` does the same thing but allows restoring the original function.

<mark>JEST.MOCK</mark>

It mocks a module.

```js
Jest.mock(

	relativePathToModuleToMock, // what to we want to module to look like

	functionThatReturnObject // so this function will return what we want the module to look like

)
```

`Jest.mock(apiPath, function or export module part )`

In this section, we learnt how to setup JEST, understand concept of JSDOM, CSS module, Handling Dynamic Imports, we learn how useful Test Coverage is, and how can save a lot of time using Watch Mode.

<LinkPost href='/16-testing-javascript-part-2' name='Next section' /> we are going to discuss following topics: React Testing Library, Snapshot Testing, Integration Testing and Cypress

I hope you found this blog helpful, If you have any question please reach out to me on <LinkPost href='https://twitter.com/suprabhasupi' name='@suprabhasupi' /> 😋


## Reference 🧐
- <LinkPost href='https://frontendmasters.com/courses/testing-react/' name='Frontend Master Testing React' />




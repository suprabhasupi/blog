---
title: Testing Javascript (part-2)
slug: /16-testing-javascript-part-2
date: 2020-05-15
desc: next and go in Form don’t work (React Native and native-base)
# Old URL
# Minute Read
cover:
  img: ../../../photos/16-testing-javascript-part-2.png
banner: ../../banners/16-testing-javascript-part-2.png
tags:
  - JS
  - React
---

import ImgPost from '../../../src/components/imgPost'
import LinkPost from '../../../src/components/linkPost'
import TestingJS from './1.png'

<p><span class='first-letter'>W</span>e have a basic idea of JEST, which we covered in <LinkPost href='/15-testing-javascript-part-1' name='Part-1' />. If you have not covered the part 1, I would recommend to check it out first.</p>

Now we will continue the following topics:

1. React Testing Library
2. Snapshot Testing
3. Integration Testing
4. Cypress

### 1️⃣ React Testing Library

Its DOM testing library, nothing react specificially here.

Here is the <LinkPost href='https://github.com/testing-library/react-testing-library' name='URL' /> for React Testing Library

Below are few methods, which testing library provides:

1. <mark>Render</mark>

    `render` methods return a bunch of utilities. 

    ```js
    const {conatiner} = render (<ComponentName />)
    ```

2. <mark>Container</mark>

    When you create container

    ```js
    const container =  document.createElement("div");
    ```

    That is what here this `container` means.

    Here, if you need to render the first div elemnet from the component then simply you can get by: `container.first-child`

3. <mark>Unmount</mark>

    You can use unmount to avoid memory leak. After running Unmount, All the reference of component will be removed.

    ```jsx
    const {conatiner} = render (<ComponentName />)
    unmount()
    ```

4. <mark>getByLabelText</mark>

    This the best way to get form elements. 

    So, here you can look up the label and if the username exist, It can be trackable else it won’t be trackable.

5. <mark>getByTestId</mark>

    Its a shortcut for `container.querySelector('[data-testid="${yourId}"]')`.

    You should prefer using `test-id` instead of class or ID’s, as Classes and ID’s get changed overtime. Hence, its better to use test-id. By using test-id we can find the element in the DOM.

    If you want to remove the test-id from production(for reducing page size), then you can remove it via plugin in babel called <LinkPost href='https://www.npmjs.com/package/babel-plugin-react-remove-properties' name='babel-plugin-react-remove-properties' />.

    After installing the above babel plugin, you can remove the data-testid.

6. <mark>cleanup</mark>

    Cleanup methods removes everything that is inserted in React trees.

7. <mark>renderIntoDocument</mark>

    It is very small API on top of render and it append to the container to the document body

    So, if there will be any click button, then you can simply use `click` event for the same

    There are many more example which you can find out <LinkPost href='https://github.com/testing-library/react-testing-library' name='here' />.

8. <mark>mockClear</mark>
   You can clear the mock by: function or `api.mockClear()`

9. <mark>beforeEach/afterEach </mark>
    beforeEach/afterEach can handle asynchronous code.  
    It will run on each test cases before and after execution.

  *Example related to Form Components:*

<u>login.js</u>

```jsx
import React from 'react'
import {Input} from './inputs'
import Form from './form'

function Login({onSubmit}) {
  return (
    <div>
      <Form
        onSubmit={e => {
          e.preventDefault()
          const {username, password} = e.target.elements
          onSubmit({
            username: username.value,
            password: password.value,
          })
        }}
      >
        <label style={{justifySelf: 'right'}} htmlFor="username-input">
          Username
        </label>
        <Input
          id="username-input"
          placeholder="Username..."
          name="username"
          style={{flex: 1}}
        />
        <label style={{justifySelf: 'right'}} id="password-input">
          Password
        </label>
        <Input
          placeholder="Password..."
          type="password"
          name="password"
          aria-labelledby="password-input"
        />
      </Form>
    </div>
  )
}

export default Login
```

<u>login1-test.js</u>

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import Login from '../login'

// Basic unit test
test('calls onSubmit with the username and password when submitted', () => {
  
  // Arrange
  // create a fake object to hold the form field values (username and password)
  // create a jest.fn() for your submit handler
  // render the Login component to a div
  // TIP: const div = document.createElement('div')

  // get the field nodes
  // TIP: const inputs = div.querySelectorAll('input')
  // TIP: const form = div.querySelector('form')
  // fill in the field values
  const handleSubmit = jest.fn()
  const container = document.createElement("div")
  ReactDOM.render(<Login onSubmit={handleSubmit} />, container)
  const form = container.querySelector('form')
  const {username, password} = form.elements  
  username.value = 'suprabha'
  password.value = 'supi'

  // Act
  // submit the form:
  // TIP: formNode.dispatchEvent(new window.Event('submit'))
  form.dispatchEvent(new window.Event('submit'))

  //
  // Assert
  // ensure your submit handler was called properly
  expect(handleSubmit).toHaveBeenCalledTimes(1)
  expect(handleSubmit).toHaveBeenCalledWith({
    username: username.value,
    password: password.value
  })
})
```

<blockquote>
<b>How to undo an update of a snapshot? </b>

   `git reset` or `git checkout snapshot_file` 😉 
</blockquote>

### 3️⃣ Integration Testing

Its almost in one test file where you have all the cases

Here, you are writing test cases for more components together.

<u>app.register.js</u>

```jsx
import React from 'react'
import {Simulate} from 'react-dom/test-utils'
import axiosMock from 'axios'
import {renderWithRouter, generate} from 'til-client-test-utils'
import {init as initAPI} from '../utils/api'
import App from '../app'

beforeEach(() => {
  window.localStorage.removeItem('token')
  axiosMock.__mock.reset()
  initAPI()
})

test('register a new user', async () => {
  const {
    container,
    getByTestId,
    getByText,
    finishLoading,
    getByLabelText,
  } = renderWithRouter(<App />)

  // wait for the app to finish loading the mocked requests
  await finishLoading()

  // navigate to register
  const leftClick = {button: 0}
  Simulate.click(getByText('Register'), leftClick)
  expect(window.location.href).toContain('register')

  // fill out form
  const fakeUser = generate.loginForm()
  const usernameNode = getByLabelText('Username')
  const passwordNode = getByLabelText('Password')
  const formWrapper = container.querySelector('form')
  usernameNode.value = fakeUser.username
  passwordNode.value = fakeUser.password

  // submit form
  const {post} = axiosMock.__mock.instance
  const token = generate.token(fakeUser)
  post.mockImplementationOnce(() =>
    Promise.resolve({
      data: {user: {...fakeUser, token}},
    }),
  )
  Simulate.submit(formWrapper)

  // wait for the mocked requests to finish
  await finishLoading()

  // assert calls
  expect(axiosMock.__mock.instance.post).toHaveBeenCalledTimes(1)
  expect(axiosMock.__mock.instance.post).toHaveBeenCalledWith(
    '/auth/register',
    fakeUser,
  )

  // assert the state of the world
  expect(window.localStorage.getItem('token')).toBe(token)
  expect(window.location.href).not.toContain('register')
  expect(getByTestId('username-display').textContent).toEqual(fakeUser.username)
  expect(getByText('Logout')).toBeTruthy()
})
```

### 4️⃣ Cypress

Cypress is for end to end testing. It also a video capture feature, but that is on pricing.

**Setup: 🖥**

```sh
$ npm install --save-dev cypress
```

Cypress exposes a binary, using npx can run a binary that exists in node_modules

```sh
$ npx cypress open
```

Than it will verify that cypress can run.

So, under Cypress, there will be some files has been created:

1. cypress.json: this is for configuration
2. Fixture folder: There's a special way that we can reference these fixtures in our tests
3. Integration: This is where all tests exist
4. support: this for adding few commands  

<u>cypress.json</u>

```json
{
	"baseUrl": "http://localhost:8080", // where our app lives
	"integrationFolder": "cypress/e2e", // changing integration folder to cypress/e2e
}
```

You should delete the `integration folder` and add new folder names as `e2e` in `cypress folder`.

Now install, `$ npm install --save-dev cypress-testing-library`

You can configure now into support folder, Here we can setup some commands. And the cypress testing library has some custom commands.

<u>support/index.js:</u>

```js
import './commands'
import 'cypress-testing-library/add-commands'
```

When you click anything into DOM, that will shows in console that what has been clicked.

Also you can see the state of the DOM looked at that point, thats actual DOM.

Now going to add couple of scripts which we can automate the process of running it, so we don’t have to run the dev in one tab and then open the project cypress tab in another tab of our terminal. We are going to run all together.

For this, there is new dependency name `npm-run-all`


```sh
$ npm instal --save-dev npm-run-all
```

It allows us to run multiple scripts in parallel.

<u>package.json</u>

```json
"scripts" : {
	"test:e2e:dev" : "npm-run-all --parallel dev cy:open",
	"test:e2e" : "npm-run-all --parallel --race start cy:run", // to make it work in CI, in this case we need to shutdown if its done, so it doesnot hang on cy. 
	//We are going to start the server by 'start', it will run all the test then they will die and then it will kill the server
	"cy:run" : "cypress run",
	"cy:open" : "cypress open"
}
```

By runing the cypress: you have to open up development server and Cypress.

Cypress run on some time limit, so when test cases run beyond that time line, Cypress says Test fails.

*example: once you run e2e test,*
**Run:**

```sh
$ as-a E2E npm-run-all --parallel --race dev:core cy:open
```

it will popup everything. Started server, started Cypress. You can clock run all test to see what things look like. Here, it like browser firing all the request as part of our test.

Cypress run synchronously. Its like, run one by one commands. So, you can do this here:

<u>auth.login.js</u>

```jsx
describe('authentication', () => {
	let user
	beforeEach(() => {
		cy //cypress
			.logout()
			.createNewUser()
			.then(() => (user = u))
			.visitApp('/')
	})

	it('should allow existing user to login', () => {
		cy
			.getByText("Login")
			.click()
			.getByLabelText("UserName")
			.type(user.username)
			.getByLabelText("Password")
			.type(user.password)
			.getByText("Submit")
			.click()
			.assertRoute("/")
		
		cy
			.getByTestId("username-display")
			.should('contain', user.username)
	}
})
```

Congratulation if you have made it so far 😎

In this last section, we learnt React Testing Library for unit testing, Snapshot Testing used when we want to make sure our UI does not change unexpectedly, Integration Testing is for page level testing where you can write all the test cases and Cypress is for end to end testing.

<ImgPost src={TestingJS} alt='testing js' width={50} margin="2rem auto" />

I hope you found this blog helpful, If you have any question please reach out to me on <LinkPost href='https://twitter.com/suprabhasupi' name='@suprabhasupi' /> 😋

## Reference 🧐
- <LinkPost href='https://medium.com/@rickhanlonii/understanding-jest-mocks-f0046c68e53c' name='Understanding JEST mocks' />
---
title: Login via Firebase
slug: /28-login-via-firebase
date: 2020-06-27
desc: Firebase is a Google cloud service that provides backend services for mobile and web applications.
# Old URL
# Minute Read
cover:
  img: ../../../photos/28-login-via-firebase.png
banner: ../../banners/28-login-via-firebase.png
tags:
  - Other
---

import ImgPost from '../../../src/components/imgPost'
import LinkPost from '../../../src/components/linkPost'
import GoToConsole from './1.png'
import StartProject from './2.png'
import Analytics from './3.png'
import ConfigureAnalytics from './4.png'
import ProjectOverview from './5.png'
import AddFirebaseWebApp from './6.png'
import ProjectSettings from './7.png'
import EnableEmailPassword from './8.png'
import AddEmailPassword from './9.png'

<p><span class='first-letter'>F</span>irebase is a Google cloud service that provides backend services for mobile and web applications. It is a widely used option for developers for backend-as-a-service. It has a real-time database service so all the records are instantly updated whenever there are changes in the database.</p>

Since React.js is one of the fastest growing front-end JavaScript technologies supported by a large community, React developers need fast and reliable backend services to make the most out of it. 

Thus, **Firebase** is a good choice as it comes with the following advantages:

1. Multiple ways of authenticating with your application.
2. It provides the Login Persist where you’ll stay logged in even after refreshing or closing the browser window.
3. Third-party provider support e.g. Google, GitHub, Twitter.
4. It provides secure ways to authenticate.
5. Manages user session (users will remain logged in even when the browser or application restarts).

**There are 2 section which we needs to be focussed on:**

1. Firebase Setup (using Email and Password)
2. Firebase integration with React

## 1️⃣ Firebase Setup 🖥

So let us start by first creating an account on the Firebase website. You will see something like this:

Create a project in <LinkPost href='https://firebase.google.com/' name='firebase' /> with following steps:

1. Click on **Go To Console** and `Add Project` name and continue

    a.  Go To Console

    <ImgPost src={GoToConsole} alt='go to console' width={80} />

    b. Enter the required details of the project and click on Continue.

     <ImgPost src={StartProject} alt='start project' margin='1rem 0' />

2. If you want, enable the google analytics and continue

    <ImgPost src={Analytics} alt='analytics' margin='1rem 0' />

3. Accept all the terms and condition and click create project

    <ImgPost src={ConfigureAnalytics} alt='configure analytics' margin='1rem 0' />

4. After creating project, you will see the below image of your project dashboard.

    Click on `Add App` into `web`

    <ImgPost src={ProjectOverview} alt='Project overview' margin='1rem 0' />

5. After clicking on Next, You will get the script which you needs to add in the project.

    <ImgPost src={AddFirebaseWebApp} alt='add firebase to web app' margin='1rem 0' />

6. Once you click Next, you will get the script which need to get integrated in project. 
   
    a. Also once you are done with the above steps, you can find the script using following steps:

    b. Click on ⚙️icon in left side

        <ImgPost src={ProjectSettings} alt='project settings' margin='1rem 0' />

    c. Then click on Project settings

    d. Click `general` tab, you will find the script at bottom of the page
    React
7. In Left side, click on authentication And then click `sign-in` method tab
8. Enabled the Email/Password and click Save

    <ImgPost src={EnableEmailPassword} alt='enable email and password' margin='1rem 0' />

9.  You can create a user in Users tab under `authentication` section
10. Click `Add user` button and click `add user`

    <ImgPost src={AddEmailPassword} alt='add email and password' margin='1rem 0' />

You are done with creating your first app on Firebase.

<b>It is time to integrate it with React.js.</b>

## 2️⃣ Firebase integration with React ∫

```sh
$ npx create-react-app my-app
$ cd my-app
$ npm start
```

After hitting `npm start`, your React application will be up and running on `port 3000`.

Install firebase plugin into react:

```sh
$ npm init
$ npm install --save firebase
```

You need to add the below snippet to login the user.

You will import the Firebase module on the installed Firebase file.

<u>Firebase/index.js:</u>

```js
import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyDyFJYH9NJfDY7iDYG00rDXzVPUF5kRwlg",
    authDomain: "authentication-4ed8c.firebaseapp.com",
    databaseURL: "https://authentication-4ed8c.firebaseio.com",
    projectId: "authentication-4ed8c",
    storageBucket: "authentication-4ed8c.appspot.com",
    messagingSenderId: "237151723922",
    appId: "1:237151723922:web:bb16689209b4cde14d214b"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp
```

### To Login 😇

<u>Login.js:</u>

```jsx
import React, { useState, useEffect } from "react";
import firebaseApp from "../Firebase";
import Cookies from "universal-cookie";
import "./index.css";

const Login = ({ onLogin }) => {
  const [emailVal, setEmailVal] = useState("");
  const [passwordVal, setPasswordVal] = useState("");
  const [user, setUser] = useState("");

  const handleEmailChange = (e) => {
    setEmailVal(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPasswordVal(e.target.value);
  };

 **** const handleLogin = (e) => {
    e.preventDefault();
    firebaseApp
      .auth()
      .signInWithEmailAndPassword(emailVal, passwordVal)
      .then((res) => {
        onLogin();
      })
      .catch((e) => {
        alert(e.message);
      });
  };**

  useEffect(() => {
    authListener();
  }, []);

  const authListener = () => {
    const cookies = new Cookies();
    firebaseApp.auth().onAuthStateChanged(function (user) {
      if (user) {
        cookies.set("user", true);
        setUser({ user });
      } else {
        cookies.set("user", false);
        setUser({ user: null });
      }
    });
  };

  return (
    <form className="login-form">
      <div className="login-field">
        <label>Username</label>
        <input
          type="email"
          placeholder="Enter Email"
          value={emailVal}
          onChange={handleEmailChange}
        />
      </div>

      <div className="login-field">
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter Password"
          value={passwordVal}
          onChange={handlePasswordChange}
        />
      </div>

      <button onClick={handleLogin}>Login</button>
    </form>
  );
};

export default Login;
```

<u>In app.js:</u>

```jsx
import React, { useState, useEffect } from 'react';
import Login from './components/Login'
import Homepage from './components/Homepage'
import Cookies from 'universal-cookie';
import './App.css';

function App() {
  const [user, setUser] = useState(false)
  const cookies = new Cookies();
  const getUser = cookies.get('user') === 'true'
  
  useEffect(() => {
    setUser(getUser)
  }, [getUser] )
  return (
    <div className="App">
      {user === true ? <Homepage onLogout={() => setUser(false)}/> : **<Login onLogin={() => setUser(true)} />**}
    </div>
  );
}

export default App;
```

### To Logout the User 

```js
const handleLogout = () => {
    const cookies = new Cookies();
    firebaseApp.auth().signOut();
    onLogout();
    cookies.set("user", false);
  };

return (
	<span onClick={handleLogout}>Logout</span>
)
```

To check the profile details, you can follow this <LinkPost href='https://firebase.google.com/docs/auth/web/start' name='link' /> 

## Reference 🧐

<p><LinkPost href='https://firebase.google.com/docs/auth/web/start' name='Firebase Google start' /></p>

We learned how to use Firebase for login and authentication in our application. Firebase provides a number of methods for doing the authentication task in a very easier manner. So, to perform a login or authentication task, you need to use those methods only. We saw how we can use email and password to login into an application. Other ways of login and authentication include a phone number, facebook, google, github, twitter, etc.

Thanks for reading this article ❤️

I hope you love the article. If you have any question, please feel free to ping me on <LinkPost href='https://twitter.com/suprabhasupi' name='@suprabhasupi' /> 😋
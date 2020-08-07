---
title: Oauth2 using Auth0
slug: /35-oauth2-using-auth0
date: 2020-07-21
desc: Using existing login information from a social network provider like Facebook, or Google, the user can sign into a third party website instead of creating a new account specifically for that website.
# Old URL
# Minute Read
cover:
  img: ../../../photos/35-oauth2-using-auth0.png
banner: ../../banners/35-oauth2-using-auth0.png
tags:
  - Other
---

import ImgPost from '../../../src/components/imgPost'
import LinkPost from '../../../src/components/linkPost'
import EnterDomain from './1.png'
import CreateApplication from './2.png'
import ApplicationUri from './3.png'
import EnableSocial from './4.png'

<p><span class='first-letter'>S</span>ocial Login is single sign-on for end users. Using existing login information from a social network provider like Facebook, or Google, the user can sign into a third party website instead of creating a new account specifically for that website.</p>

We will be integrating Auth0 with our Vue application which will be covering in to two section:

1. Setup Auth0
2. Integrating Auth0 into Vue application

Auth0 supports 30+ social providers: Facebook, Twitter, Google, Yahoo, Windows Live, LinkedIn, GitHub, PayPal, Amazon, vKontakte, Yandex, 37signals, Box, Salesforce, Salesforce (sandbox), Salesforce Community, Fitbit, Baidu, RenRen, Weibo, AOL, Shopify, WordPress, Dwolla, miiCard, Yammer, SoundCloud, Instagram, The City, The City (sandbox), Planning Center, Evernote, Evernote (sandbox), and Exact. Additionally, you can add any OAuth2 Authorization Server you need.

## 1️⃣ Setup Auth0 🖥

In order to get started with the setup of the <mark>Auth0 + Vue.js</mark> Authentication service, we will need our Auth0 account to be ready for us to use.

1. Click on `Go to console` <LinkPost href='https://manage.auth0.com/' name='here' />
2. Create your new Account

    <ImgPost src={EnterDomain} alt='enter domain in oauth0' width={60} margin="2rem 0" />

3. Create application, in right side click on application nav 
4. Click on Create application Button
5. Give name and select Single page web applications, then click create 

    <ImgPost src={CreateApplication} alt='enter domain in oauth0' width={60} margin="2rem 0" />

6. Preparing the Callback URL in the Client Settings
   - Goto applications
   - Click on the project(login-project)
   - Click settings tab
   - Under Allowed Callback URLs allow your path

        <blockquote>
        http://localhost:8080/callback,
        http://localhost:8080/
        </blockquote>

        <ImgPost src={ApplicationUri} alt='application uri in oauth0' margin="2rem 0" />

    - Then save, (Else you will get callback mismatch error)

Once you run the server, `localhost:8080`

And after clicking login, Bydefault It will show Google Login and username password authentication.

To add Facebook auth also, follow below steps:

1. Goto [Dashboard](https://manage.auth0.com/dashboard)
2. Click on Connections in left side
3. Click social tab
4. Toggle the facebook 

    <ImgPost src={EnableSocial} alt='enable social login in oauth0' margin="3rem 0" />

5.  After clicking Facebook, Go to Applications tab
6. Toggle which project you want the facebook auth
7. Then save

## 2️⃣ Integrating Auth0 into Vue application ∮

You need to setup vue into the system by following steps:

1. Install VUE-CLI

    ```sh
    $ yarn global add @vue/cli
    ```

2. Create the application using the Vue CLI. 

    ```sh
    $ vue create my-app
    ```

3. Move into the project directory

    ```sh
    $ cd my-app
    ```

4. Add the router, as we will be using it later and Select 'yes' when asked if you want to use history mode

    ```sh
    $ vue add router
    ```

Install the SDK

```sh
$ npm install @auth0/auth0-spa-js
```

Start the server :

```sh
$ npm run serve
```

### Create an authentication wrapper

<u>src/auth/index.js:</u>

```jsx
import Vue from "vue";
import createAuth0Client from "@auth0/auth0-spa-js";

/** Define a default action to perform after authentication */
const DEFAULT_REDIRECT_CALLBACK = () =>
  window.history.replaceState({}, document.title, window.location.pathname);

let instance;

/** Returns the current instance of the SDK */
export const getInstance = () => instance;

/** Creates an instance of the Auth0 SDK. If one has already been created, it returns that instance */
export const useAuth0 = ({
  onRedirectCallback = DEFAULT_REDIRECT_CALLBACK,
  redirectUri = window.location.origin,
  ...options
}) => {
    if (instance) return instance;

    // The 'instance' is simply a Vue object
    instance = new Vue({
        data() {
            return {
                loading: true,
                isAuthenticated: false,
                user: {},
                auth0Client: null,
                popupOpen: false,
                error: null
            };
        },
        methods: {
            /** Authenticates the user using a popup window */
            async loginWithPopup(o) {
                this.popupOpen = true;
                try {
                    await this.auth0Client.loginWithPopup(o);
                } catch (e) {
                // eslint-disable-next-line
                    console.error(e);
                } finally {
                    this.popupOpen = false;
                }
                this.user = await this.auth0Client.getUser();
                this.isAuthenticated = true;
            },
            /** Handles the callback when logging in using a redirect */
            async handleRedirectCallback() {
                this.loading = true;
                try {
                   await this.auth0Client.handleRedirectCallback();
                   this.user = await this.auth0Client.getUser();
                   this.isAuthenticated = true;
                } catch (e) {
                    this.error = e;
                } finally {
                    this.loading = false;
                }
            },
            /** Authenticates the user using the redirect method */
            loginWithRedirect(o) {
                return this.auth0Client.loginWithRedirect(o);
            },
            /** Returns all the claims present in the ID token */
            getIdTokenClaims(o) {
                return this.auth0Client.getIdTokenClaims(o);
            },
            /** Returns the access token. If the token is invalid or missing, a new one is retrieved */
            getTokenSilently(o) {
                return this.auth0Client.getTokenSilently(o);
            },
            /** Gets the access token using a popup window */

            getTokenWithPopup(o) {
                return this.auth0Client.getTokenWithPopup(o);
            },
            /** Logs the user out and removes their session on the authorization server */
            logout(o) {
                return this.auth0Client.logout(o);
            }
        },
        /** Use this lifecycle method to instantiate the SDK client */
        async created() {
        // Create a new instance of the SDK client using members of the given options object
        this.auth0Client = await createAuth0Client({
            domain: options.domain,
            client_id: options.clientId,
            audience: options.audience,
            redirect_uri: redirectUri
        });

        try {
            // If the user is returning to the app after authentication..
            if (
                window.location.search.includes("code=") &&
                window.location.search.includes("state=")
            ) {
                // handle the redirect and retrieve tokens
                const { appState } = await this.auth0Client.handleRedirectCallback();

                // Notify subscribers that the redirect callback has happened, passing the appState
                // (useful for retrieving any pre-authentication state)
                onRedirectCallback(appState);
            }
        } catch (e) {
            this.error = e;
        } finally {
            // Initialize our internal authentication state
            this.isAuthenticated = await this.auth0Client.isAuthenticated();
            this.user = await this.auth0Client.getUser();
            this.loading = false;
        }
    }
});
return instance;
};

// Create a simple Vue plugin to expose the wrapper object throughout the application
export const Auth0Plugin = {
  install(Vue, options) {
    Vue.prototype.$auth = useAuth0(options);
  }
};
```

**Create a new file `auth_config.json` in the root directory**

<u>auth_config.json:</u>

```json
{
  "domain": "YOUR_DOMAIN",
  "clientId": "YOUR_CLIENT_ID"
}
```

<u>src/main.js:</u>

```js
import Vue from "vue";
import App from "./App.vue";
import router from './router'

// Import the Auth0 configuration
import { domain, clientId } from "../auth_config.json";

// Import the plugin here
import { Auth0Plugin } from "./auth";

// Install the authentication plugin here
Vue.use(Auth0Plugin, {
  domain,
  clientId,
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
```

<u>src/views/Home.vue:</u>

```vue
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />

    <!-- Check that the SDK client is not currently loading before accessing is methods -->
    <div v-if="!$auth.loading">
      <!-- show login when not authenticated -->
      <button v-if="!$auth.isAuthenticated" @click="login">Log in</button>
      <!-- show logout when authenticated -->
      <button v-if="$auth.isAuthenticated" @click="logout">Log out</button>
    </div>
  </div>
</template>

export default {
  name: "home",
  components: {
    HelloWorld
  },
  methods: {
    // Log the user in
    login() {
      this.$auth.loginWithRedirect();
    },
    // Log the user out
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin
      });
    }
  }
};
```

This is it. Once you restart the server, and click on login you will see popup for social login.

**Few issues which I get while working:**

1. These dependencies were not found: * `core-js/modules/es.array.includes`

Install these dependencies:

```json
"dependencies": {
    "@babel/core": "^7.4.5",
    "core-js": "^2.6.5",
},
```

## Reference 🧐

- <LinkPost href='https://auth0.com/docs/quickstart/spa/vuejs?download=true#create-an-authentication-wrapper' name='Auth0 Docs using VueJs' />


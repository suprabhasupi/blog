---
title: React Environment Variables
slug: /72-react-environment-variable
date: 2021-08-19
desc: Customize env variables and use env variables in HTML
cover:
  img: ../../../photos/72-react-environment-variable.png
banner: ../../banners/72-react-environment-variable.png
tags:
  - React
---

import LinkPost from '../../../src/components/linkPost'

### <span class='first-letter'>W</span>hat is ENV 🤔

**env** file to store your sensitive credentials like API keys.
Environment variables can also help you to store your API link in one location so that you don't have to change the link in each file manually.

### Do you have to install any plugin to use ENV file 🙄

No, A React frontend connected to a Node backend is a rock-solid combination for any application you want to build. So you can create and use `.env` file without installing any plugins.

Usually, you create one `.env` file which triggers for local, integration and production.

### What if you want to create different Keys for integration and production

If you have to use different keys for integration and production, in that case you have to customise your environment.

Now, let's see what are we going to cover in this article:

**1️⃣ Customise Environment Variable for build environment**

**2️⃣ Use Environment variable in HTML**

### 1️⃣ Customise Environment Variable for build environment 

There are already few environment which React supports like `.env.development`, `.env.test`, `.env.production` etc.

**`.env` files can be used:**

- `.env`: Default
- `.env.local`: Local overrides. This file is loaded for all environments except test
- `.env.development`, `.env.test`, `.env.production`: Environment-specific settings

You can create your own `env` file which is not added in react. You need to install one package called `env-cmd` for setup the custom environment.

- Create a file called `.env.integration` where `.env` exists
- Set the environment variable which you wanted for integration in `.env.integration`

  ```js
  REACT_APP_NAME=XXXX
  ```

- Install `env-cmd`

    ```js
    $ yarn add env-cmd
    ```

- Add a new script to your `package.json`, building with your new environment:

    ```js
    {
      "scripts": {
        "build:integration": "env-cmd -f .env.integration yarn run build"
      }
    }
    ```

- Now you can run the integration command `yarn run build:integration` to build with the integration environment config.

> 📝 Variables in `.env.production` will be used as fallback because `NODE_ENV` will always be set to production for a build.

### What if you want to install devDependencies when NODE_ENV=production 🤔

As you know if `NODE_ENV=production`, then devDependencies packages will not get installed. 

However, You can install the devDependencies in `NODE_ENV=production` with setting  `yarn install --production=false` in `package.json` .

Checkout this <LinkPost href="https://classic.yarnpkg.com/en/docs/cli/install#toc-yarn-install-production-true-false" name="Link" /> for more information.

### 2️⃣ Use ENV variables in HTML

You only use environment variable in JavaScript files. But what when you need to use environment variable in HTML, It can be Google Map keys or any secret keys of script. 

You can access the environment variables in the index.html, just to remember that the env variable should be prefix with `REACT_APP_`.

```html
<title>%REACT_APP_NAME%</title>
```

Define permanent environment variables in `.env` file in root of the project.

**.env:**

```js
REACT_APP_NAME=ProjectName
```

📝 Remember to restart the server when you make any changes in `.env` file.

### Reference 🧐

- <LinkPost href="https://create-react-app.dev/docs/adding-custom-environment-variables/" name="CRA adding custom environment variables" />
- <LinkPost href="https://create-react-app.dev/docs/deployment/#customizing-environment-variables-for-arbitrary-build-environments" name="CRA deployment docs" />
- <LinkPost href="https://create-react-app.dev/docs/deployment/#customizing-environment-variables-for-arbitrary-build-environments" name="CRA env variables for build env" />

### Summary ⅀

If you want to add any other env which is not mentioned in react app, you have to setup `env-cmd` and can use it. Also, you can use `.env` varibales in HTML file using `REACT_APP_`

I hope you love the article. If you have any question, feel free to ping me on <LinkPost href='https://twitter.com/suprabhasupi' name='Twitter' /> | <LinkPost href='http://instagram.com/suprabhasupi' name='Instagram' /> 😋
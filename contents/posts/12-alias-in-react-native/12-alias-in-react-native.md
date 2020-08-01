---
title: Alias in React Native
slug: /12-alias-in-react-native
date: 2019-03-18
desc: Alias in react or react native
# Old URL
# Minute Read
cover:
  img: ../../../photos/12-alias-in-react-native.png
banner: ../../banners/12-alias-in-react-native.png
tags:
  - React
---

import LinkPost from '../../../src/components/linkPost'

Is there anything more frustrating to find this path “../../../../../components/location” in Javascript? 🤔

What if we can use “/components/location” from any where in the code base? 😎

## Enter the Alias 

So we are writing alias in `.babelrc` and we use a babel plugin to get aliasing set up, since we can’t use webpack in react native.

Initially, we want to install `babel-plugin-module-resolver` using yarn or npm.

```sh
$ npm install babel-plugin-module-resolver
```

Once we’ve installed, open up the project’s and find `.babelrc` file, If there is no `.babelrc` file then create the file `.babelrc` in root. Under the plugins key, add the below snippet:-

```js
{
  "presets": ["react-native"],
  "plugins": [
    [
      "module-resolver",
      {
        "root": [
          "./src"
        ],
      "alias": {
         "src": "./src",
         "assets": "./src/assets"
       }
      } 
    ] 
  ]
}
```

Now we can use `"src/pages/homepage"` instead of using complex relative paths like `'../../../src/pages/homepage'`

Now, clear the cache and restart the node server by following steps:

```sh
$ npm start --reset-cache

$ npm run ios
```

Now, you can see the alias changes. 👍🏻
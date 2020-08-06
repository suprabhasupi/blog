---
title: Webpack (part-2)
slug: /10-webpack-part-2
date: 2019-03-16
desc: Cache Busting and plugins, Splitting dev and production in Webpack Part-2
# Old URL
# Minute Read
cover:
  img: ../../../photos/10-webpack-part-2.png
banner: ../../banners/10-webpack-part-2.png
tags:
  - Webpack
---

import LinkPost from '../../../src/components/linkPost'

<p><span class='first-letter'>I</span>n <LinkPost href='9-webpack-part-1' name='previous blog ⎗'/>, we have discussed the concepts of webpack setup and loaders.</p>

Now We will be discussing on below topics:

1. Cache Busting and plugins
2. Splitting dev and production

## 1. Cache Busting and Plugins

<p><LinkPost href='https://webpack.js.org/guides/caching/' name='Cache busting' /> is how can you prevent certain assets like main bundle js or css bundle, once you create separate CSS bundle.</p>

Whenever you do some changes in code then it should generate the new hash or else the hash should be same every time even while refreshing the page. So, it means the URL gets cached if there will be no changes in code.

<u>webpack.config.js:</u>

```js
const path = require("path");

module.exports = 
  { 
    entry: "./src/index.js",
    output: { 
      // the first thing we can configure is file name
      filename: "vendor.[contentHash].js",
      // contentHash Will generate hash
      // where to do , where to actually split the code 
      // Import path from module which comes with node called path 
      // path.resolve(__dirname,..) : It mainly resolve absolute path to the New_folder_name   directory. Wherever the current directory is. e.x. in my lappy: /Users/Projects/ Work/webpack-work // "dist" name of the folder where we want to code be going path: path.resolve(__dirname, "New_folder_name") } }
    }
  }
```

In <LinkPost href='9-webpack-part-1' name='webpack (part 1)' />, you were kept dist/main.js into index.html file.

But when you generate the file through hash, then we no need to include script into index.html. That can doable by using plugins.

### Plugins

<p><LinkPost href='https://webpack.js.org/plugins/' name='Plugins' /> used to customize the webpack build process in variety of ways.</p>

### <mark>HTMLWebpackPlugin</mark>

The <LinkPost href='https://github.com/jantimon/html-webpack-plugin' name='HtmlWebpackPlugin' /> simplifies creation of HTML files to serve your webpack bundles. This is especially useful for webpack bundles that include a hash in the filename which changes every compilation. You can either let the plugin generate an HTML file for you, supply your own template using lodash templates, or use your own loader.

Add `HTMLWebpackPlugin` to project:

```sh
$ npm install --save-dev html-webpack-plugin
```

<u>webpack.config.js:</u>

```js
const HtmlWebpackPlugin = require('html-webpack-plugin');

// then we can add plugins in module: 
plugins: [new HtmlWebpackPlugin()],
```

Now, while running `npm start`, which will create `index.html` inside `dist` folder where the script will be included automatically.

But there will be no content on the page. Previously, we were taking another `index.html` and now its taking `dist/index.html` file where only script has been added not the HTML content.

Create new html file inside src folder as `main.html`. Copy the code of previous `index.html` file into `main.html`. Remove script tag which was taken from webpack previously.

Removing the script from html:

```html
<script src="/dist/main.js" ></script>
```

Now you need to tell plugin to use the template which you have created called `main.html`

<u>webpack.config.js:</u>

```js
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = 
  { 
    mode : "development"
    entry: "./src/index.js",
    output: { 
      filename: "hello.js", 
      path.resolve(__dirname, "New_folder_name") } }
    },
    plugins: [
      new HtmlWebpackPlugin({ 
        template: "./src/main.html"
      })
    ],
    module: { 
      rules: [{ 
        // files which ends with .css use the below loader 
        test: /\.scss$/,
        use: [
          "style-loader", // 3rd. style loader inject styles into DOM
          "css-loader", // 2nd. CSS loader turns css into common JS
          "sass-loader" //1st. SASS loader which turns sass into CSS
        ]
      }]
     }
  }
```

Now when you do `$ npm start`, you can see `dist/index.html` where the template will be there from `main.html`.

## 2. Splitting DEV and Production:

You can create two file in root as: `webpack.dev.js` and `webpack.prod.js`, and copy the code of `webpack.config.js` into both files.

Now, you will be making one common config file for webpack called `webpack.config.js`. Later, you need to merge the `webpack.dev.js` with `webpack.config.js` and `webpack.prod.js` with `webpack.config.js`.

To merge the file install plugin called `webpack-merge`.

```sh
$ npm install --save-dev webpack-merge
```

<u>webpack.dev.js:</u>

```js
const path = require("path");
const common = require('./webpack-config');
const merge = require('webpack-merge');

module.exports = 
  merge(common ,{ 
    mode : "development"
    output: { 
      filename: "hello.js", 
      path.resolve(__dirname, "New_folder_name") } }
    }
  })
```

<u>webpack.prod.js:</u>

```js
const path = require("path");
const common = require('./webpack-config');
const merge = require('webpack-merge');

module.exports = 
  merge(common, { 
    mode : "production"
    output: { 
      filename: "hello.[contentHash].js", 
      path.resolve(__dirname, "New_folder_name") } }
    }
})
```

<u>webpack.config.js:</u>

```js
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = 
  { 
    entry: "./src/index.js",
    plugins: [
      new HtmlWebpackPlugin({ 
        template: "./src/main.html"
      })
    ],
    module: { 
      rules: [{ 
        // files which ends with .css use the below loader 
        test: /\.scss$/,
        use: [
          "style-loader", // 3rd. style loader inject styles into DOM
          "css-loader", // 2nd. CSS loader turns css into common JS
          "sass-loader" //1st. SASS loader which turns sass into CSS
        ]
      }]
    }
  }
  ```

<u>package.json:</u>

```json
"scripts": {
  "start" : "webpack --config webpack.dev.js",
  "prod" : "webpack --config webpack.prod.js"
}
```

Check the command by running `npm start` for *dev* and `npm run prod` for *production*.

Currently, whenever you are making changes every time you have to run `npm start` to build the dev. You can fix this by setup installing webpack-dev-server.

```sh
$ npm install —save-dev webpack-dev-server
```

<u>package.json:</u>

```json
"scripts": {
  "start" : "webpack-dev-server --config webpack.dev.js",
  "prod" : "webpack --config webpack.prod.js"
}
```

`--open` will open the browser in window for us. It works as live server. You can change the code and webpack server will automatically rebuild and refresh the browser for us.
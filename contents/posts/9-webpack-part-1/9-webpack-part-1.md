---
title: Webpack (part-1)
slug: /9-webpack-part-1
date: 2019-03-14
desc: Basics of Webpack Part-1
# Old URL
# Minute Read
cover:
  img: ../../../photos/9-webpack-part-1.png
banner: ../../banners/9-webpack-part-1.png
tags:
  - Webpack
---

import LinkPost from '../../../src/components/linkPost'

<p><span class='first-letter'>W</span>ebpack is a module bundler. <LinkPost href='https://webpack.js.org/' name='Webpack '/> can take care of bundling alongside a separate task runner. However, the line between bundler and task runner has become blurred thanks to community developed webpack plugins. Sometimes these plugins are used to perform tasks that are usually done outside of webpack, such as cleaning the build directory or deploying the build.</p>

Webpack supports ES2015, CommonJS, and AMD module formats out of the box. The loader mechanism works for CSS as well, with @import and url() support through css-loader.

**Follow the below steps to initialize webpack into project 🧐:**

1. Run the below command into terminal to create `package.json`

```sh
$ npm init -y
// it will create package.json into project root
```

2. Install Webpack

```sh
$ npm install --save webpack
```

3. Add below scripts tag in `package.json`

```json
"scripts": { "start" : "webpack" }
```
Once you run `npm start` into terminal. It will search for config first, If there is no config in project then it will search for `index.js` in src. If there will be no `index.js` as well, then it throw error saying as:

<p class='error'>ERROR in entry module not found: Error: can’t resolve ‘./src’ in folder path</p>

To resolve the <span class='error'>error</span>, create `index.js` in root.

<u>index.js:</u>

```js
alert("hello webpack");
```

Run `$ npm start`, it will execute the code and generate `dist` folder automatically. Inside `dist` folder there will be `main.js` file which includes the code(webpack and index.js).

But the code will not be executed until we don’t import dist folder in index.html.

<u>index.html:</u>

```html
<script src="/dist/main.js" ></script>
```

<p><mark>NOTE</mark>: To have loader or any plugin we need to have config file.</p>

4. Create `webpack.config.js` in root project:

<u>webpack.config.js:</u>

```js
// path comes from node itself
const path = require("path")

module.exports = 
  { 
    entry: "./src/index.js",
    output: 
      { 
         // the first thing we can configure is file name
         filename: "hello.js", 
         // where to do , where to actually split the code 
         // Import path from module which comes with node called path 
         // path.resolve(__dirname,..) : It mainly resolve absolute path to the New_folder_name   directory. Wherever the current directory is. e.x. in my lappy: /Users/Projects/ Work/webpack-work // "dist" name of the folder where we want to code be going path: path.resolve(__dirname, "New_folder_name") } }
      }
}
```

Now, In `package.json` include config to start script:

<u>package.json:</u>

```json
"scripts": { "start" : "webpack - - config webpack.config.js" }
```

Once you run `npm start`, It will generate New_folder_name folder inside there will have file called hello.js(as given in the webpack config)

By default, It's in production mode, you can set the mode as development mode by:

```js
module.exports = { mode : "development" }
```

The code which will regenerate through webpack, that is not readable. You can make it readable by using devtool:

```js
module.exports = { mode : "development", devtool: "none" }
```

Then run `npm start`, and you will see all your code compiled. There will be not eval statement now.

<u>webpack.config.js:</u>

```js
module.exports = 
  { 
    mode : "development",
    entry: "./src/index.js",
    output: 
      { 
         // the first thing we can configure is file name
         filename: "hello.js", 
         // where to do , where to actually split the code 
         // Import path from module which comes with node called path 
         // path.resolve(__dirname,..) : It mainly resolve absolute path to the New_folder_name   directory. Wherever the current directory is. e.x. in my lappy: /Users/Projects/ Work/webpack-work // "dist" name of the folder where we want to code be going path: path.resolve(__dirname, "New_folder_name") } }
      }
}
```

## Loaders 

<LinkPost href='https://webpack.js.org/loaders/' name='Loaders' /> are the magical part here for loading different types of file besides JS. There are different packages you install and they dictate how certain file should be preprocessed. Here you can handle CSS file one way, you can handle SVG file another way installing style loader and CSS loader.

```sh
$ npm install —save-dev style-loader css-loader
```

<u>webpack.config.js:</u>

```js
module.exports = 
  { 
    mode : "development",
    entry: "./src/index.js",
    output: 
      { 
         filename: "hello.js" ,
         path.resolve(__dirname, "New_folder_name") } }
      },
    module: 
    { 
         rules: [{ 
            // files which ends with .css use the below loader 
            test: /\.css$/, use: ["css-loader"] 
        }]
    }
}
```

Run `npm start`, you can see it’s there in `hello.js` file which has been created through webpack inside `dist` folder. But the style has not been applied into DOM, even though the code is included. That’s where style loader comes.

<mark>CSS loader</mark> takes your css and turns into JS

<mark>Style loader</mark> takes your Javascript which is actually css and inject into the DOM.

While placing the both loader into config, you need to understand which will come first. As CSS loader will compile the CSS into JS using CSS loader and injecting into DOM using style loader.

<mark>Note</mark>: It actually load in reverse order so, need to put style loader in starting and then CSS loader.

```js
use: ["style-loader", "css-loader"]
```

## SASS
Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.

In config, you will use sass-loader, which compiles the code into css. Then you take css and turns it into JS and then take JS and keep it into DOM.

Here, you need SASS loader and node SASS.

```sh
$ npm install —save-dev sass-loader node-sass
```

<u>webpack.config.js:</u>

```js
module.exports = 
{ 
    mode : "development"
    entry: "./src/index.js",
    output: { 
        filename: "hello.js", 
        path.resolve(__dirname, "New_folder_name") } }
    },
    module: { 
        rules: [{ 
            // files which ends with .css use the below loader 
            test: /\.scss$/,
            use: [
                "style-loader", // 3rd. style loader inject styles into DOM
                "css-loader",  // 2nd. CSS loader turns css into common JS
                "sass-loader" //1st. SASS loader which turns sass into CSS
            ]
        }]
     }
}
```

Thanks for reading this article. ♥️

In this section we learnt how to setup webpack and loaders.

<p><LinkPost href='/10-webpack-part-2' name='Next article' />, will be going to discuss following topics: <b>Cache Busting and plugins</b> , <b>Splitting dev and production</b>.</p>

<!-- I hope you found this blog helpful, If you have any question please reach out to me on @suprabhasupi 😋 -->


---
title: Webpack (part-3)
slug: /11-webpack-part-3
date: 2019-03-17
desc: html-loader, file-loader, clean-webpack in webpack part-3
# Old URL
# Minute Read
cover:
  img: ../../../photos/11-webpack-part-3.png
banner: ../../banners/11-webpack-part-3.png
tags:
  - Webpack
---

import ImgPost from '../../../src/components/imgPost'
import LinkPost from '../../../src/components/linkPost'
import WebpackSummary from './1.svg'

<p><span class='first-letter'>I</span>n <LinkPost href='10-webpack-part-2' name='previous blog ⎗'/>, we have discussed on Cache Busting and plugins, Splitting dev and production. </p>

Now we will start learning interesting part of webpack which is:

1. Html-loader
2. File-loader
3. Clean-webpack
4. Multiple Entrypoints & Vendor.js
5. Extract CSS & Minify HTML/CSS/JS

## 1. Html-loader

For images, when you use same img file structure for dev and prod. You will get issue as the images are not loading in prod well. To fix that install `html-loader`.

```sh
$ npm install —save-dev html-loader
```

<u>webpack.config.js:</u>

```js
// include in module rules
{
  test: /\.html$/,
  use: ["html-loader"] 
}
```

When you run `npm run prod`, you get error as:

<p class='error'>unexpected token, you may need an appropriate loader to handle this file type.</p>

To fixed the error, need `file-loader`.

## 1. File-loader

To Install File loader:

```sh
$ npm install --save-dev file-loader
```

<u>webpack.config.js:</u>

```js
const path = require("path")
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
        }],
        {
            test: /\.html$/,
            use: ["html-loader"] 
        },	
        {
            test: /\.(svg|png|jpg|gif)$/,
            use: { 
                loader: "file-loader",
                options: { 
                    name: "[name].[hash].[ext]",
                    outputPath: "images" 
                }
            }
        }
    }}
 ```

Now run `npm run prod`, it will create images as folder inside dist and all jpg/png/svg files will be copied there.

## 3. Clean-webpack

Whenever you do some changes in file, it will create new hash file. You will install `clean-webpack` plugin which will delete `dist` directory everytime you build.

```sh
$ npm install --save-dev clean-webpack-plugin
```

Use it in production file, for dev its not needed.

<u>webpack.prod.js:</u>

```js
const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack-config');
const merge = require('webpack-merge');
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = 
  merge(common, { 
    mode : "production",
    output: 
      { 
         filename: "hello.[contentHash].js", 
         path.resolve(__dirname, "New_folder_name") } }
      },
    plugins: [ new CleanWebpackPlugin() ]
})
```

## 4. Multiple Entrypoints & Vendor.js

If you want to have multiple entry point then we can do it with below following steps:

Create a file in src folder.

Example: vendor.js

Change Output section in both dev and prod.js:

<u>webpack.dev.js:</u>

```js
output: {
	filename: "[name].bundle.js"
}
```
<u>webpack.prod.js:</u>

```js
output: {
	filename: "[name].[constentHash].bundle.js"
}
```
<u>webpack.config.js:</u>

```js
module.exports = {
  entry: {
     main: "./src/index.js",
     vendor: "./src/vendor.js"
  }
}
```

Now by running `npm start` and `npm run prod`, it will create two file name as `main.bundle.js` and `vendor.bundle.js`.

## Extract CSS & Minify HTML/CSS/JS

<mark>Extract CSS:</mark>
It will be great you can have separate js file and css file in production. Currently everything is happening in one js file only. In production, you need CSS to load first. As JS may take some second to load. It can be doable using plugin called `mini-css-extract-plugin`.

```sh
$ npm install —save-dev mini-css-extract-plugin
```

<u>webpack.prod.js:</u>

```js
// Add into the plugins:
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
plugins: [ 
    new MiniCssExtractPlugin({
        filename: "[name].[chunkHash].css"
    })
    new CleanWebpackPlugin()
]
```

You have to make sure, that you are using above snippet instead of style loader in `webpack.config.js`

<u>webpack.dev.js:</u>

```js
const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack-config');
const merge = require('webpack-merge');

module.exports = 
    merge(common ,{ 
       mode : "development",
       output: { 
           filename: "[name].bundle.js",
           path.resolve(__dirname, "New_folder_name") } }
       },
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
    })
```

<u>webpack.prod.js:</u>

```js
const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack-config');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = 
  merge(common, { 
    mode : "production",
    output: { 
        filename: "[name].[constentHash].bundle.js",
        path.resolve(__dirname, "New_folder_name") } }
    },
    plugins: [ 
        new MiniCssExtractPlugin({
            filename: "[name].[chunkHash].css"
       })
       new CleanWebpackPlugin() 
    ],
    module: { 
        rules: [{ 
            // files which ends with .css use the below loader 
            test: /\.scss$/,
            use: [
               "MiniCssExtractPlugin.loader", // 3rd. Move CSS into files
               "css-loader", // 2nd. CSS loader turns css into common JS
               "sass-loader" //1st. SASS loader which turns sass into CSS
            ]
        }]
     }
})
```

<u>webpack.config.js:</u>

```js
const path = require("path")
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
            test: /\.html$/,
            use: ["html-loader"] 
        },	
        {
	        test: /\.(svg|png|jpg|gif)$/,
 	        use: { 
                loader: "file-loader",
                options: { 
                    name: "[name].[hash].[ext]",
                    outputPath: "images"
                }
            }
        }
    }
  }
```
Now, by running `npm run prod`, you will get css file as well in dist folder.

### Minify CSS:

To minify the css you used the plugin called `optimize-css-assets-webpack-plugin`

```sh
$ npm install —save-dev optimize-css-assets-webpack-plugin
```

<p><b>NOTE:</b> You just need to minify the CSS in production</p>

<u>webpack.prod.js:</u>

```js
// (To compile CSS)
const OptimizeCssAssestsPlugin = require('optimize-css-assets-webpack-plugin');
// we add new property here called optimization
optimization: {
    minimizer: new OptimizeCssAssestsPlugin()
}
```

By default the JS will be optimized, but when you run `npm run prod` here the CSS will get optimised and JS will not be optimised longer. It’s because you are overwriting the optiomization above.

To fix that you have to add optimization for JS as well.

### Minify JS:

For JS minifier you will be using TerserPlugin, which has installed by default.

<u>webpack.prod.js:</u>

```js
const TerserPlugin = require('terser-webpack-plugin');
optimization: {
    minimizer: [new OptimizeCssAssestsPlugin(), newTerserPlugin()]
}
```

### Minify HTML:

You are not going to use any new plugin for HTML minifiation.

<u>webpack.config.js:</u>

Remove HTMLWebpackPlugin from plugins.

<u>webpack.dev.js:</u>

```js
const HtmlWebpackPlugin = require('html-webpack-plugin');
// add plugins here as:

plugins: [
    new HtmlWebpackPlugin ({template: "./src/template.html"})
]
```

<u>webpack.prod.js:</u>

```js
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack-config');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require('terser-webpack-plugin');

module.exports = 
  merge(common, { 
    mode : "production",
    output: { 
        filename: "[name].[constentHash].bundle.js",
        path.resolve(__dirname, "New_folder_name") } }
    },
    optimization: {
        minimizer: [new OptimizeCssAssestsPlugin(), newTerserPlugin(),
        new HtmlWebpackPlugin ({
           template: "./src/template.html",
           minify: {
             removeAtrributeQuotes: true,
             collapseWhiteSpace: true,
             removeComments: true
           }
        })
       ]
     },
      plugins: [ 
       new MiniCssExtractPlugin({
        filename: "[name].[chunkHash].css"
       }),
       new CleanWebpackPlugin() 
     ],
     module: { 
        rules: [{ 
           // files which ends with .css use the below loader 
           test: /\.scss$/,
           use: [
             "MiniCssExtractPlugin.loader", // 3rd. Move CSS into files
             "css-loader", // 2nd. CSS loader turns css into common JS
             "sass-loader" //1st. SASS loader which turns sass into CSS
           ]
        ]}
     }
})
```

Now, run `npm run prod` and you can see in `dist/index.html`, you don’t have any comments and white spaces. The code will get minified.

Check out the summary via below diagram 🥳
<ImgPost src={WebpackSummary} alt='Webpack summary tag' width='60' margin='3rem auto' />

I hope you found this blog helpful ♥️, If you have any question please reach out to me on @suprabhasupi 😋












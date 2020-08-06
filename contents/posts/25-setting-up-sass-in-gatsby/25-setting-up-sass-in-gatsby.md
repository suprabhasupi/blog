---
title: Setting Up SASS in Gatsby
slug: /25-setting-up-sass-in-gatsby
date: 2020-06-06
desc: The CSS box-shadow property can be used to give block elements a drop shadow or an inner shadow.
# Old URL
# Minute Read
cover:
  img: ../../../photos/25-setting-up-sass-in-gatsby.png
banner: ../../banners/25-setting-up-sass-in-gatsby.png
tags:
  - Gatsby
---

import LinkPost from '../../../src/components/linkPost'

Started working on Gatsby, and using SASS for styling the layout.

You can do the **SASS setup** in few steps:

1. Install Plugins & Packages

   ```sh
   $ npm install --save node-sass gatsby-plugin-sass
   ```

2. Create gatsby configuration file in root path

   <u>gatsby-config.js:</u>

   ```js
   module.exports = {
       plugins: ['gatsby-plugin-sass']
   }
   ```

    After adding above file with snippet, Gatsby knows how to use SASS.

3. Create SASS file as `filename.scss`
4. Import it into the JS file

<br></br>

That's it. Work is done, now you can write css in sass.I hope you love the article. If you have any question, please feel free to ping me on <LinkPost href='https://twitter.com/suprabhasupi' name='@suprabhasupi' /> 😋

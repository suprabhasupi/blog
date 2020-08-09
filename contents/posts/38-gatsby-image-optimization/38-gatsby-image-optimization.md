---
title: Gatsby - Image Optimization 🌃
slug: /38-gatsby-image-optimization
date: 2020-08-09
desc: Image Optmization can be done with installing couple gatsby plugins.
priority: 1
# Old URL
# Minute Read
cover:
  img: ../../../photos/38-gatsby-image-optimization.png
banner: ../../banners/38-gatsby-image-optimization.png
tags:
  - Gatsby
---

import ImgPost from '../../../src/components/imgPost'
import LinkPost from '../../../src/components/linkPost'

<p><span class='first-letter'>I</span>n Gatsby, image optimization can be done with installing couple gatsby plugins. 😎</p>

```sh
$ npm i gatsby-transformer-sharp gatsby-plugin-sharp gatsby-background-image
```

<p><mark>sharp</mark> is third party library that does image transformation.</p>

The difference between **plugin** and **transformer**, the `plugin` is going to install Sharp and make Sharp available to do various things. The `Transformer` looks for nodes that are images and will apply image transformation to them.

<u>gatsby-config.js:</u>

```js
plugins: 
  ['gatsby-transformer-sharp',
	  'gatsby-plugin-sharp',
		{
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: 'images'
      }
    }
  ]
```

After adding above configs, Gatsby will understand that images need to be optimised which is in images folder and can be transformed by using above plugins. 

When you query below snippet:

```js
query {
  allFile(filter:{sourceInstanceName: {eq: "images"}}){
    nodes{
      relativePath
      childImageSharp {
        original{
          width
          height
          src
        }
      }
    }
  }
}
```

In above query, you will filter `sourceInstanceName` from allFile which is equal to "images"

Then, will get the list of images in the path.

<u>Output:</u>

```js
{
  "data": {
    "allFile": {
      "nodes": [
        {
          "relativePath": "banner.jpg",
          "childImageSharp": {
            "original": {
              "width": 3727,
              "height": 2383,
              "src": "/static/banner-82e4fc0a6d4d32e6aa80db5e026cc3e3.jpg"
            }
          }
        }
      ]
    }
  }
}
```

The above snippet will show the original file size or path, but you need to optimise the image. To do that you need to use fluid image under `childImageSharp`

```js
query {
  allFile(filter:{sourceInstanceName: {eq: "images"}}){
    nodes{
      relativePath
      childImageSharp {
        fluid{
          src
          srcSet
        }
      }
    }
  }
}
```

After above query, you will get `list of optimised images`:

```query
{
  "data": {
    "allFile": {
      "nodes": [
        {
          "relativePath": "banner.jpg",
          "childImageSharp": {
            "fluid": {
              "src": "/static/82e4fc0a6d4d32e6aa80db5e026cc3e3/14b42/banner.jpg",
              "srcSet": "/static/82e4fc0a6d4d32e6aa80db5e026cc3e3/f836f/banner.jpg 200w,
                        \\n/static/82e4fc0a6d4d32e6aa80db5e026cc3e3/2244e/banner.jpg 400w,
                        \\n/static/82e4fc0a6d4d32e6aa80db5e026cc3e3/14b42/banner.jpg 800w,
                        \\n/static/82e4fc0a6d4d32e6aa80db5e026cc3e3/47498/banner.jpg 1200w,
                        \\n/static/82e4fc0a6d4d32e6aa80db5e026cc3e3/0e329/banner.jpg 1600w,
                        \\n/static/82e4fc0a6d4d32e6aa80db5e026cc3e3/91e14/banner.jpg 3727w"
            }
          }
        }
      ]
    }
  }
}
```

<p><mark>Gatsby</mark> taken all images and its created a while array of different size for different viewports and different resolutions.</p>

**How you create alias in graphql❓🤔**

```js
image: childImageSharp {}


// output
"image": {}
```

## <LinkPost href='https://www.gatsbyjs.org/docs/using-graphql-fragments/' name='GraphQl Fragment' />

Its almost same as Javascript spread operator. 😯

**How to use it in component 🤔**

```jsx
import React from 'react'
import './hero.scss'
import {Link, graphql, useStaticQuery} from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

const Hero = () => {
  const {image} = useStaticQuery(graphql`
    query {
      image: file(relativePath: {eq: "banner.jpg"}){
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <BackgroundImage className="hero-bg" fluid={image.sharp.fluid} fadeIn="soft">
      <div className='text-box'>
        <h1>Learning Gatsby</h1>
        <p>Hello, <Link to='/about/'>Learn about me &rarr;</Link></p>
      </div>
      </BackgroundImage>
  )
}

export default Hero
```

In helpers, Gatsby provides a few helpers `GatsbyImageSharpFluid_withWebp` which will take care of all resolution and if `webp` doesn't work on browser then it will take care of what image need to shown at the place.

<p><mark>fadeIn</mark> is going to cause really nice blur in image. Once you reload, it will first show blur image and then original image shown.</p>

I have added the image optimisation code <LinkPost href='https://github.com/suprabhasupi/gatsby-intro/commit/4e50fc5efa4c6244e6bc4798295c21607cda02bd' name='here' /> ☺️










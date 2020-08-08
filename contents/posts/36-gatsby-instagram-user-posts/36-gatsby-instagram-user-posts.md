---
title: Gatsby - Instagram User Posts
slug: /36-gatsby-instagram-user-posts
date: 2020-08-08
desc: Integrate Instagram plugin into Gatbsy and list down the user posts.
# Old URL
# Minute Read
cover:
  img: ../../../photos/36-gatsby-instagram-user-posts.png
banner: ../../banners/36-gatsby-instagram-user-posts.png
tags:
  - Gatsby
---

import ImgPost from '../../../src/components/imgPost'
import LinkPost from '../../../src/components/linkPost'
import UserPost from './1.png'

We will see how can we integrate Instagram plugin into Gatbsy and list down the user posts.

We are going to display the data of Instagram user. To do that install `gatsby-source-instagram`

```sh
$ npm i gatsby-source-instagram
```

Add into plugin section in gatasby config:

<u>gatsby-config.js:</u>

```js
{
	resolve: 'gatsby-source-instagram',
	options: {
		username: 'suprabhasupi'
	}
}
```

**Create the component for Instagram posts:**

<u>components/instagram.js:</u>

```js
import React from 'react'
import Image from 'gatsby-image'
import './instagram.scss'

const Instagram = () => {
    return (
       <>
        <h3> Instagram Post from @suprabhasupi</h3>
        <a href='https://www.instagram.com/suprabhasupi/'>See more on Instagram &rarr;</a>
       </>
    )
}

export default Instagram
```

<u>hooks/use-instagram.js:</u>

```js
import {graphql, useStaticQuery} from 'gatsby'

const useInstagram = () => {
    const data = useStaticQuery(graphql`
    query {
        allInstaNode(limit:10) {
         nodes {
           id
           username
           caption
           localFile {
             childImageSharp{
               fluid(maxWidth: 120 maxHeight: 120) {
                 ...GatsbyImageSharpFluid_withWebp
               }
             }
           }
         }
       }
       }
    `)
    
    return data.allInstaNode.nodes.map(node => ({
        ...node.localFile.childImageSharp,
        id: node.id,
        caption: node.caption,
        username: node.username
    }))
}

export default useInstagram
```

In above query, I am limiting the post till 10. Also, setting width and height for post should be 120px. Inside fluid, I am query GatsbyImageSharpFluid_withWebp, where I will get all the images and data.

The graphql fragments, there is a limititaion in the playground and in other graphQL, where we can not inject a graphql into it, which means that you can't use them when you are writing these types of queries in the playground.

<u>Example:</u>

```js
fluid { ...GatsbyImageSharpFluid_withWebp
}
// it will throw an erroras unknown fragment
```

<u>instagram.js:</u>

```js
import React from 'react'
import Image from 'gatsby-image'
import useInstagram from '../../hooks/use-instagram'
import './instagram.scss'

const Instagram = () => {
    const instaPics = useInstagram();
    const {username} = instaPics[0];
    return (
       <>
        <h3> Instagram Post from @{username}</h3>
        <div className='insta-wrapper'>
            {/* we have done spread in useInstagram hook, so fluid is on top */}
            {instaPics.map(pic => (
                 <a href={`https://www.instagram.com/p/${pic.id}/`} className='instagram_pic' target='_blank'>
                    <Image className='instag-img' fluid={pic.fluid} alt={pic.caption} />
                 </a>
            ))}
        </div>
        <a href={`https://www.instagram.com/${username}`}>See more on Instagram &rarr;</a>
       </>
    )
}

export default Instagram
```

<u>Output:</u>

<ImgPost src={UserPost} alt='instagram user posts gatsby' width={60} />

Checkout the Code here <LinkPost href='https://github.com/suprabhasupi/gatsby-intro/commit/de4c17a1a8ae22e3eed111d82cf8069d1d5775d1' name='@github' />





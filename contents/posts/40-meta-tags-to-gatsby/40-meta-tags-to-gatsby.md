---
title: Adding Meta Tags to Gastby
slug: /40-meta-tags-to-gatsby
date: 2020-08-13
desc: Add meta tags to gatsby page for SEO friendly
# Old URL
# Minute Read
cover:
    img: ../../../photos/40-meta-tags-to-gatsby.png
banner: ../../banners/40-meta-tags-to-gatsby.png
tags:
    - Gatsby
---

import LinkPost from '../../../src/components/linkPost'

<p><span class='first-letter'>I</span>ts really good idea to add meta tags like title, description to page for SEO friendly. To do that, you need to make changes in `gatsby-config.js`.</p>

<u>gatsby-config.js:</u>

```js
module.exports = {
    siteMetadata: {
        title: 'Gaatsby Workshop',
        description: 'Learn Gatsby From scratch'
    },
    plugins: ['gatsby-plugin-sass']
}
```

Once you add the above snippet, restart the gatsby server 💻

After running the server, you won't able to see the meta tags in browser. So, to do that you will use graphql. 

Enter <LinkPost href='http://localhost:8000/___graphql' name='http://localhost:8000/___graphql' /> to browser, you can see the `site` in docs of graphql.

Query the below command you will get the meta tags 🔖:

```js
query {
  site{
    siteMetadata {
      title
      description
    }
  }
}

// output:
{
  "data": {
    "site": {
      "siteMetadata": {
        "title": "Gaatsby Workshop",
        "description": "Learn Gatsby From scratch"
      }
    }
  }
}
```

To use this into the page, need to install two plugins `gatsby-plugin-react-helmet`, `react-helmet`.

<p><mark>react-helmet</mark> is a library for modifying the head of an HTML document in React. It allows to set title, meta tags, Open graph description or twitter cards, you would set those in here.(all the feature that make SEO friendly website)</p>

Once you install the plugin, add it into the `gatsby-config.js`, So you can do server side rendering with Helmet ⛑

<u>gatsby-config.js:</u>

```js
plugins: ['gatsby-plugin-sass', 'gatsby-plugin-react-helmet']
```

**Add Helmet to layout page with dummy content:**

```js
import {Helmet} from 'react-helmet'
<Helmet>
        <html lang='en' />
        <title>Hello Suprabha!</title>
        <meta name='description' content='Suprabha Blog!' />
</Helmet>
```

That's it. Check out in Browser, it should work. 💪🏼

Now, we will use config data to represent in meta tags.

<u>use-sitemMetadata.js:</u>

```js
import {graphql, useStaticQuery} from 'gatsby';
const useSiteMetadata = () => {
    const data = useStaticQuery(graphql`
        query {
          site{
              siteMetadata {
              title
              description
              }
          }
        }
    `);
    return data.site.siteMetadata;
}

export default useSiteMetadata;
```

**To use into layout file 📂**

<u>layout.js:</u>

```js
import {Helmet} from 'react-helmet'
import useSiteMetadata from '../hooks/use-siteMetadata'

const {title, description} = useSiteMetadata();
<Helmet>
      <html lang='en' />
      <title>{title}</title>
      <meta name='description' content={description} />
</Helmet>
```

Restart the gatsby serve. (As whenever you add/change graphql query, each time you have to restart the server.) 

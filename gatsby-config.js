module.exports = {
  siteMetadata: {
    title: `Suprabha`,
    description: `A UI/UX Developer and Gamer who belives in writing simple stupid straight forward code and loves gaming 😋`,
    author: `@suprabhasupi`,
    'twitter:card': 'summary',
    'twitter:creator': '@suprabhasupi',
    'twitter:image': './src/images/logo1.png',
    'twitter:title': 'Suprabha Blog',
    'twitter:description': 'Weekly sharing new JS, HTML, CSS articles 🔥',
    'og:title': 'Suprabha Blog',
    'og:description': 'Weekly sharing new JS, HTML, CSS articles 🔥',
    'og:image': 'https://www.suprabha.me/static/img/suprabha-logo.83b48cf.png'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        plugins: [`gatsby-remark-images`],
        extensions: [`.mdx`, `.md`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `photos`,
        path: `./photos`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `banners`,
        path: `./contents/banners`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `./contents/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./contents`
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Suprabha Blog`,
        short_name: `Suprabha`,
        start_url: `/`,
        background_color: `#314d92`,
        theme_color: `#314d92`,
        display: `minimal-ui`,
        icon: `src/images/logo1.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
  pathPrefix: "/"
}

module.exports = {
  siteMetadata: {
    title: `Suprabha`,
    description: `Weekly sharing new JS, HTML, CSS articles and focus on journey of frontend engineer 🔥`,
    author: `@suprabhasupi`,
    'twitter:card': 'summary_large_image',
    'twitter:creator': '@suprabhasupi',
    'twitter:image': 'https://suprabha-images.s3.ap-south-1.amazonaws.com/twitter-card.png',
    'twitter:title': 'Suprabha',
    'twitter:description': 'Weekly sharing new JS, HTML, CSS articles and focus on journey of frontend engineer 🔥',
    'og:title': 'Suprabha',
    'og:description': 'Weekly sharing new JS, HTML, CSS articles and focus on journey of frontend engineer 🔥',
    'og:image': 'https://suprabha-images.s3.ap-south-1.amazonaws.com/twitter-card.png'
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
        icon: `https://suprabha-images.s3.ap-south-1.amazonaws.com/logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
  pathPrefix: "/blog"
}

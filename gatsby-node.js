/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)
// const fs = require(`fs`).promises

const postTemplate = path.resolve(`./src/templates/page/index.js`)

const query = `
  {
    posts: allMdx(
      filter: { fileAbsolutePath: { regex: "/posts/" } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          slug
        }
      }
    }
  }
`

exports.createPages = async ({ graphql, actions }) => {
  const response = await graphql(query)
  if (response.errors) throw new Error(response.errors)
  const { posts } = response.data

  posts.nodes.forEach(post => {
    const { slug } = post.frontmatter
    if (slug) {
      actions.createPage({
        path: slug,
        component: postTemplate,
        context: { slug },
      })
    }
  })
}

exports.onCreateNode = async ({ node }) => {
  if (
    node.internal.type === `Mdx` &&
    node.fileAbsolutePath.includes(`contents/posts`)
  ) {
    node.frontmatter.slug = node.frontmatter.slug
    // node.frontmatter.slug = `/blog` + node.frontmatter.slug
  }
}

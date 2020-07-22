/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
// const fs = require(`fs`).promises

const postTemplate = path.resolve(`./src/pages/index.js`)
const query = `
  {
    pages: allMdx(
      filter: { fileAbsolutePath: { regex: "/pages/" } }
    ) {
      nodes {
        frontmatter {
          slug
        }
      }
    }

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
  const { pages, posts } = response.data

  posts.nodes.forEach(page => {
    const { slug } = page.frontmatter
    if (slug) {
      actions.createPage({
        path: slug,
        component: postTemplate,
        context: { slug },
      })
    }
  })

  // posts.nodes.forEach((post, index, arr) => {
  // //   const nextSlug = arr[index - 1]?.frontmatter.slug || ``
  // //   const prevSlug = arr[index + 1]?.frontmatter.slug || ``
  //   const { slug } = post.frontmatter
  //   actions.createPage({
  //     path: slug,
  //     component: postTemplate,
  //     // context: { slug, nextSlug, prevSlug },
  //   })
  // })
}

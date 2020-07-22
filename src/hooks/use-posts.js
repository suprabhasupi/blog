import { graphql, useStaticQuery } from "gatsby"
const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            title
            slug
          }
        }
      }
    }
  `)
//   const data = useStaticQuery(graphql`
//     query {
//       allMdx {
//         nodes {
//           frontmatter {
//             title
//             slug
//           }
//           excerpt
//         }
//       }
//     }
//   `)
  return data.allMdx.nodes.map(post => {
    return {
      title: post.frontmatter.title,
      slug: post.frontmatter.slug,
      excerpt: post.excerpt,
    }
  })
}

export default usePosts

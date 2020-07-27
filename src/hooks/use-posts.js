import { graphql, useStaticQuery } from "gatsby"
const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            title
            slug
            tags
            cover {
              img {
                sharp: childImageSharp {
                  fluid(
                      maxWidth: 200
                      maxHeight: 200
                      duotone: {shadow: "#663399", highlight: "#ddbbff"}
                  ) {
                      ...GatsbyImageSharpFluid_withWebp
                  }
              }
              }
            }
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
      img: post.frontmatter.cover.img,
      tags: post.frontmatter.tags,
      excerpt: post.excerpt,
    }
  })
}

export default usePosts

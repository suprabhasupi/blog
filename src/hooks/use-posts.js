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
            date(formatString: "MMM D, YYYY")
            cover {
              img {
                sharp: childImageSharp {
                  fluid(
                      maxWidth: 200
                      maxHeight: 200
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
  // duotone: {shadow: "#663399", highlight: "#ddbbff"}

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
      date: post.frontmatter.date,
      excerpt: post.excerpt,
    }
  })
}

export default usePosts

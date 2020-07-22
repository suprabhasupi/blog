import React from "react"
import { Link } from "gatsby"

// export const query = graphql`
//     query($slug: String!) {
//         mdx(frontmatter: {slug: {eq: $slug}}) {
//             frontmatter {
//                 title
//             }
//             body
//         }
//     }
// `

const PostTemplate = ({ post }) => {
  // console.log("PostTemplate -> post", post)
  return (
    <>
      <div>
        <Link to={post.slug}> {post.title}</Link>
      </div>
    </>
  )
}

export default PostTemplate

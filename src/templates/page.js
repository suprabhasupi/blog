import React from "react"
// import { Link } from "gatsby"

export const query = graphql`
    query($slug: String!) {
        mdx(frontmatter: {slug: {eq: $slug}}) {
            frontmatter {
                title
            }
            body
        }
    }
`

const PageTemplate = ({ data }) => {
  console.log("PostTemplate -> dataaaaa", data)
  return (
    <>
      <div>
        {/* <Link to={post.slug}> {post.title}</Link> */}
  <p>Page Page Page %%%%%%%%%%%%%% {data.mdx?.frontmatter?.title}</p>
      </div>
    </>
  )
}

export default PageTemplate

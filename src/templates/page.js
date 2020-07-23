import React from "react"
import {MDXRenderer} from 'gatsby-plugin-mdx'

// import { Link } from "gatsby"

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      body
    }
  }
`

const PageTemplate = ({ data }) => {
  console.log("PostTemplate -> dataaaaa", data.mdx.body)
  return (
    <>
      <div>
        {/* <Link to={post.slug}> {post.title}</Link> */}
        <p>Page Page Page %%%%%%%%%%%%%% {data.mdx?.frontmatter?.title}</p>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </div>
    </>
  )
}

export default PageTemplate

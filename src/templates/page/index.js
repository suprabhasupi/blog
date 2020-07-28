import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../../components/layout"
import "./style.scss"
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
  return (
    <Layout>
      <div className="page-wrapper">
        {/* <Link to={post.slug}> {post.title}</Link> */}
        <h1>{data.mdx?.frontmatter?.title}</h1>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </div>
    </Layout>
  )
}

export default PageTemplate

import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../../components/layout"
import "./style.scss"
import Image from "gatsby-image"
// import { Link } from "gatsby"

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
          banner {
            sharp: childImageSharp {
              fluid(
                  maxWidth: 450
                  
              ) {
                  ...GatsbyImageSharpFluid_withWebp
              }
          }
        }
      }
      body
    }
  }
`

const PageTemplate = ({ data }) => {
  // console.log("PageTemplate -> data", data)
  return (
    <Layout>
      <div className="page-wrapper">
      <h1>{data.mdx?.frontmatter?.title}</h1>
      <div className='banner'>
      <Image className="new-post-cover" fluid={data.mdx.frontmatter.banner.sharp.fluid} />
      </div>
        {/* <Link to={post.slug}> {post.title}</Link> */}
        
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </div>
    </Layout>
  )
}

export default PageTemplate

import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import "./style.scss"
import Image from "gatsby-image"
// import { Link } from "gatsby"

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        desc
        banner {
          sharp: childImageSharp {
            fluid(maxWidth: 450) {
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
  const { mdx } = data
  const { frontmatter } = mdx
  let imgURLForMeta
  try {
    imgURLForMeta = frontmatter.banner.sharp.fluid.srcSet
      .split(",")
      .slice(-2, -1)[0]
      .split(" ")[0]
      .trim()
  } catch (err) {
    imgURLForMeta = ""
  }
  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        description={frontmatter.desc}
        cardImg={imgURLForMeta}
      />
      <div className="page-wrapper">
        <h1>{frontmatter.title}</h1>
        <div className="banner">
          <Image
            className="new-post-cover"
            fluid={frontmatter.banner.sharp.fluid}
          />
        </div>
        {/* <Link to={post.slug}> {post.title}</Link> */}

        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </div>
    </Layout>
  )
}

export default PageTemplate

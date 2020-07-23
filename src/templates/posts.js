import React from "react"
import { Link } from "gatsby"
import Image from 'gatsby-image'
import './post.scss'

const PostTemplate = ({post}) => {
  // console.log("PostTemplate -----> post", post)
  return (
    <>
      <div>
        <Link to={post.slug}> {post.title}</Link>
        <Image className='post-cover' fluid={post.img.sharp.fluid} />
      </div>
    </>
  )
}

export default PostTemplate

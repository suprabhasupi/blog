import React from "react"
import { Link } from "gatsby"
import Image from 'gatsby-image'
import './post.scss'

const PostTemplate = ({post}) => {
  return (
    <>
    {post.map(post => (
        <div className='post-wrapper'>
        <Link to={post.slug}>
          <Image className='post-cover' fluid={post.img.sharp.fluid} />
          </Link>
          <Link to={post.slug}> {post.title}</Link>
        </div>
      ))}
    </>
  )
}

export default PostTemplate

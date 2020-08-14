import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import { Calendar } from "styled-icons/boxicons-regular"
import "./style.scss"

const PostTemplate = ({ post }) => {
  return (
    <>
      {post.map((post, i) => (
        <div className="post-wrapper" key={i}>
          <Link to={post.slug}>
            <Image className="post-cover" fluid={post.img.sharp.fluid} />
          </Link>
          <div className="post-info">
            <h4>
              <Link to={post.slug}> {post.title}</Link>
            </h4>
            <Calendar size="1em" />
            <span>{post.date}</span>
          </div>
        </div>
      ))}
    </>
  )
}

export default PostTemplate

import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import { Calendar } from "styled-icons/boxicons-regular"
// import { Tags } from "styled-icons/fa-solid"
import "./post.scss"

// const RedZap = styled(BookReader)`
//   color: red;
// `
const PostTemplate = ({ post }) => {
  console.log("PostTemplate -> post", post)
  return (
    <>
      {post.map(post => (
        <div className="post-wrapper">
          <Link to={post.slug}>
            <Image className="post-cover" fluid={post.img.sharp.fluid} />
          </Link>
          <div className="post-info">
            <h4>
              <Link to={post.slug}> {post.title}</Link>
            </h4>
            <Calendar size="1em" />
            <span>{post.date}</span>
            {/* <p><Tags size="1em" /> */}

            {/* </p> */}
          </div>
        </div>
      ))}
    </>
  )
}

export default PostTemplate

import React from "react"
import { Link } from "gatsby"

const PostTemplate = ({post}) => {
  return (
    <>
      <div>
        <Link to={post.slug}> {post.title}</Link>
      </div>
    </>
  )
}

export default PostTemplate

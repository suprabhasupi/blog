import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "./index.scss"
import PostTemplate from "../templates/posts.js"
import usePosts from "../hooks/use-posts"

const IndexPage = () => {
  const posts = usePosts()
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <div className='post-list'>
      {posts.map(post => {
        //    return <pre>{JSON.stringify(post, null, 2)}</pre>
        return <PostTemplate key={post.slug} post={post} />
      })}
      
      </div>
    </Layout>
  )
}

export default IndexPage

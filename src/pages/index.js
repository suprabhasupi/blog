import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
// import Image from "../components/image"
import Image from "gatsby-image"

import SEO from "../components/seo"
import "./index.scss"
import PostTemplate from "../templates/post"
import usePosts from "../hooks/use-posts"
import TagList from "../components/tagList"
import { Calendar } from "styled-icons/boxicons-regular"
import { Twitter, Instagram } from 'styled-icons/boxicons-logos'

import { useQueryParam } from "../hooks/useQueryParam.js"

const insertAllTag = (tags, count) =>
  !tags.map(tag => tag.title).includes(`All`) &&
  tags.unshift({ title: `All`, count })

const filterPostsByTag = (tag, posts) =>
  // If !tag, tag is null which stands for all posts.
  posts.filter(post => !tag || post.tags.includes(tag))

const IndexPage = ({ data }) => {
  const { allMdx } = data
  const { tags } = allMdx
  const [activeTag, setActiveTag] = useQueryParam(`tag`)
  const posts = usePosts()

  insertAllTag(tags, posts.length)
  const filteredPosts = filterPostsByTag(activeTag, posts)
  return (
    <Layout>
      <SEO title="Suprabha" description="Weekly sharing new JS, HTML, CSS articles and focus on journey of frontend engineer 🔥" />

      <div className="blog-pg">
        <div>
          <h1>Suprabha Blog</h1>
          <p>Weekly sharing new <mark>JS, HTML, CSS</mark> articles! 🔥</p>
          <b>Follow @suprabhasupi for new ideas every day 😍 </b>
          <div className='follow'>
            <a href='https://twitter.com/suprabhasupi'><Twitter size='3em' /></a>
            <a href='https://instagram.com/suprabhasupi'><Instagram size='3em' /></a>
          </div>
        </div>
        <div className="new-post">
          {posts.map((post, i) => (post.priority ? <Link to={post.slug} key={i}>
            <div className='new-post-wrap'>
            <Image className="new-post-cover" fluid={post.img.sharp.fluid} />
            <div className="new-post-info">
              <h3>{post.title}</h3>
              <p className='date'>
              <Calendar size="1em" /><span> {post.date}</span>
              </p>
              <p className='desc'>{post.desc}</p>
            </div>
          </div>
          </Link> : null))}
        </div>
      </div>
      <div className="blog-info">
        <TagList {...{ tags, activeTag, setActiveTag }} />
        <div className="post-list">
          <PostTemplate post={filteredPosts} />
        </div>
      </div>
      {/* return <pre>{JSON.stringify(post, null, 2)}</pre> */}
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/posts/" } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      tags: group(field: frontmatter___tags) {
        title: fieldValue
        count: totalCount
      }
    }
  }
`

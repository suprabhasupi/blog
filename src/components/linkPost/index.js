import React from "react"

const LinkPost = ({ href, name }) => {

  const AnchorTag = () => {
    if (href.includes("suprabha")) {
      return <a href={href} target='_blank'> {name} </a>
    } else  if (href.includes("blog.suprabha.me")) {
        return <a href={href}> {name} </a>
    } else {
        return <a href={href} target='_blank' rel="noopener noreferrer"> {name} </a>
    }
  }

  return (
    <AnchorTag className="anchor-tag" />
  )
}

export default LinkPost

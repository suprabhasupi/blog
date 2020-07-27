import PropTypes from "prop-types"
import React, { useState } from "react"
// import styled from 'styled-components'
import { JsSquare, Html5, ReactLogo, Vuejs } from "styled-icons/fa-brands"
import { Css3, BookReader, Globe } from "styled-icons/boxicons-logos"
import { Cpu } from 'styled-icons/feather'
import { Gatsby } from "styled-icons/remix-line"
import "./style.scss"
// import { Tag, TagGrid, tagIcons, TagsIcon, Toggle } from './styles'

export default function TagList({ tags, activeTag = `All`, setActiveTag }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="tag-list">
      {/* <div>Tags </div> */}
      {tags.map(({ title, count }) => {
        const TagIcon = tagIcons[title]
        return (
          <button
            className={
              activeTag === title || (title === `All` && !activeTag)
                ? "active"
                : ""
            }
            open={open}
            key={title}
            onClick={() => setActiveTag(title === `All` ? null : title)}
          >
            {TagIcon && <TagIcon size="1em" />}
            &nbsp; {title} ({count})
          </button>
        )
      })}
    </div>
  )
}

export const tagIcons = {
  All: Cpu,
  JS: JsSquare,
  HTML: Html5,
  CSS: Css3,
  React: ReactLogo,
  Vue: Vuejs,
  Gatsby: Gatsby,
  Other: BookReader
}

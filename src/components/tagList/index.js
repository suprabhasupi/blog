import React, { useState } from "react"
import { JsSquare, Html5, ReactLogo, Vuejs, Aws } from "styled-icons/fa-brands"
import { Css3 } from "styled-icons/boxicons-logos"
import { BookHeart } from "styled-icons/boxicons-solid"
import {
  ToggleOff,
  ToggleOn,
  Tags
} from 'styled-icons/fa-solid'
import { Cpu } from 'styled-icons/feather'
import { Webpack, Go } from 'styled-icons/simple-icons'
import { Gatsby } from "styled-icons/remix-line"
import "./style.scss"

export default function TagList({ tags, activeTag = `All`, setActiveTag }) {
  const [toggleOpen, setToggleOpen] = useState("false");

  return (
    <div className="tag-list">
      <div className="toggle">
        <h3><Tags size="1em" /> Tags</h3>
      {toggleOpen === 'true' ? <ToggleOff size='2em' onClick={() => setToggleOpen("false")}/> : <ToggleOn size='2em' onClick={() => setToggleOpen("true")}/>}
      </div>
      
      {toggleOpen !== 'true' ? tags.map(({ title, count }) => {
        const TagIcon = tagIcons[title]
        return (
          <button
            className={
              activeTag === title || (title === `All` && !activeTag)
                ? "active"
                : null
            }
            key={title}
            onClick={() => setActiveTag(title === `All` ? '' : title)}
          >
            {TagIcon && <TagIcon size="1em" />}
            &nbsp; {title} ({count})
          </button>
        )
      }) : null}
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
  AWS: Aws,
  GO: Go,
  Webpack: Webpack,
  Other: BookHeart
}

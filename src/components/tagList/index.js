import PropTypes from "prop-types"
import React, { useState } from "react"
// import styled from 'styled-components'
import { JsSquare, Python } from 'styled-icons/fa-brands'

import { Cpu } from 'styled-icons/feather'
export { Tags as TagsIcon } from 'styled-icons/fa-solid'

// import { Tag, TagGrid, tagIcons, TagsIcon, Toggle } from './styles'

export default function TagList({ tags, activeTag = `All`, setActiveTag }) {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <div>TagList Component </div>
      {tags.map(({ title, count }) => {
        const TagIcon = tagIcons[title]
        return (
          <div
            open={open}
            key={title}
            active={activeTag === title || (title === `All` && !activeTag)}
            onClick={() => setActiveTag(title === `All` ? null : title)}
          >
            {TagIcon && <TagIcon size="1em" />} 
            &nbsp; {title} ({count})
          </div>
        )
      })}
    </div>
  )
}

export const tagIcons = {
  All: Cpu,
  "Web Dev": Cpu,
  "JS": JsSquare,
  Tutorial: Cpu,
  "Machine Learning": JsSquare,
}
// export const tagIcons = {
//   All: Grid,
//   'Web Dev': Web,
//   Tutorial: ChalkboardTeacher,
//   'Machine Learning': Brain,
//   'Data Science': Database,
//   Sustainability: WeatherSunny,
//   Science: Lab,
//   Physics: Atom,
//   Design: ColorLens,
//   Technology: Cpu,
//   Future: Robot,
//   JS: JsSquare,
//   Python,
//   Statistics: Sigma,
// }

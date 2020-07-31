import React from "react"
import "./style.scss"

const ImgPost = ({ src, alt, width, margin }) => (
  <div
    className="img-post-wrapper"
    style={{ width: `${width}%`, margin: `${margin}` }}
  >
    <img src={src} alt={alt} />
  </div>
)

export default ImgPost

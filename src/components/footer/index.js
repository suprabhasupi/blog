import { Link } from "gatsby"
import React from "react"
import "./style.scss"

const Footer = () => (
  <footer>
    <div>
      <Link to="/"> H </Link>
      <Link to="/"> H </Link>
      <Link to="/"> H </Link>
      <p>
        © Copyright {new Date().getFullYear()},
        <a href="https://www.suprabha.me/"> Suprabha</a>
      </p>
    </div>
    <ul>
      <li>
        <Link to="/"> Home </Link>
      </li>
      <li>
        <Link to="/contact-us"> Contact Us </Link>
      </li>
    </ul>
  </footer>
)

export default Footer

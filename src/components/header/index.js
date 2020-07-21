import { Link } from "gatsby"
import React from "react"
import "./style.scss"

const Header = () => (
  <nav>
    <ul>
      <li>
        <Link to="/"> Home </Link>
      </li>
      <li>
        <Link to="/contact-us"> Contact Us </Link>
      </li>
    </ul>

    <div>
      <input type="search" placeholder="Search" />
    </div>
  </nav>
)

export default Header

import { Link } from "gatsby"
import React from "react"
import "./style.scss"
// import Logo from '../../images/logo.png'
import Logo from '../../images/logo1.png'

const Header = () => (
  <nav>
    <ul>
      <li>
        <a href='https://www.suprabha.me/' target='_blank'>
          <img src={Logo} alt="suprabha's logo" className='logo'/>
        </a>
      </li>
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

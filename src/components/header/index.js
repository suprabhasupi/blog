import { Link } from "gatsby"
import React from "react"
import "./style.scss"
// import Logo from '../../images/logo.png'
import Logo from '../../images/logo1.png'

const Header = () => (
  <nav>
    <ul>
      <li>
        <a href='/'>
          <img src={Logo} alt="suprabha logo" className='logo'/>
        </a>
      </li>
      <li>
        <Link to="https://suprabha.me/"> Portfolio </Link>
      </li>

      <li>
        <Link to="https://www.buymeacoffee.com/suprabhasupi"> Support Me </Link>
      </li>
      {/* <li>
        <Link to="/contact-us"> Contact Us </Link>
      </li> */}
    </ul>

    {/* <div>
      <input type="search" placeholder="Search" />
    </div> */}
  </nav>
)

export default Header

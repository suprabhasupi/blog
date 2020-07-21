import { Link } from "gatsby"
import React from "react"
import "./style.scss"
import Github from '../../images/icons/github.svg'
import Blog from '../../icons/images/blog.svg'
import Devto from '../../images/icons/devto.svg'
import Instagram from '../../images/icons/instagram.svg'
import Linkedin from '../../images/icons/linkedin.svg'
import StackOverflow from '../../images/icons/stack-overflow.svg'
import Twitter from '../../images/icons/twitter.svg'
import Medium from '../../images/icons/medium.svg'

const Footer = () => (
  <footer>
    <div className='social-icons-copyright'>
      <div className='social-icons'>
      <Link to="/"> <img src={Github} /> </Link>
      <Link to="/"> <img src={Blog} /> </Link>
      <Link to="/"> <img src={Devto} /> </Link>
      <Link to="/"> <img src={Instagram} /> </Link>
      <Link to="/"> <img src={Linkedin} /> </Link>
      <Link to="/"> <img src={StackOverflow} /> </Link>
      <Link to="/"> <img src={Twitter} /> </Link>
      <Link to="/"> <img src={Medium} /> </Link>
      </div>
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

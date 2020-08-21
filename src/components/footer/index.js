import { Link } from "gatsby"
import React from "react"
import "./style.scss"
import FooterCurve from '../../images/footer-curve.svg'
import TreeBottom from '../../images/tree_bottom.svg'
import { Twitter, Github, DevTo, Instagram, Linkedin, StackOverflow, Medium, Codepen } from 'styled-icons/boxicons-logos'

const Footer = () => (
  <footer>
    <img src={FooterCurve} className='footer-curve' alt='footer curve design' />
    <div className='footer-info'>
    <div className='social-icons-copyright'>
      <div className='social-icons'>
      <a href="https://github.com/suprabhasupi"> <Github size="2em" /> </a>
      <a href="https://codepen.io/suprabhasupi"> <Codepen size="2em" /> </a>
      <a href="https://dev.to/suprabhasupi"> <DevTo size="2em" /> </a>
      <a href="https://www.instagram.com/suprabhasupi"> <Instagram size="2em" /> </a>
      <a href="https://www.linkedin.com/in/suprabha-s"> <Linkedin size="2em" /> </a>
      <a href="https://stackoverflow.com/users/8284147/suprabha"> <StackOverflow size="2em" /> </a>
      <a href="https://twitter.com/suprabhasupi"> <Twitter size="2em" /> </a>
      <a href="https://medium.com/@suprabhasupi"> <Medium size="2em" /> </a>
      </div>
    </div>

    <ul>
      <li>
        <Link to="https://suprabha.me/"> Portfolio </Link>
      </li>
      <li>
        <Link to="/contact-us"> Contact Us </Link>
      </li>
    </ul>
      </div>  
      <img src={TreeBottom} className='tree-bottom' alt='tree bottom design' />
      <p className='copyright'>
        © Copyright {new Date().getFullYear()},
        <a href="https://suprabha.me/"> Suprabha</a>
      </p>  
  </footer>
)

export default Footer

import { Link } from "gatsby"
import React from "react"
import "./style.scss"
import FooterCurve from '../../images/footer-curve.svg'
import { Blogger, Twitter, Github, DevTo, Instagram, Linkedin, StackOverflow, Medium } from 'styled-icons/boxicons-logos'

const Footer = () => (
  <footer>
    <img src={FooterCurve} className='footer-curve' />
    <div className='footer-info'>
    <div className='social-icons-copyright'>
      <div className='social-icons'>
      <Link to="/"> <Github size="2em" /> </Link>
      <Link to="/"> <Blogger size="2em" /> </Link>
      <Link to="/"> <DevTo size="2em" /> </Link>
      <Link to="/"> <Instagram size="2em" /> </Link>
      <Link to="/"> <Linkedin size="2em" /> </Link>
      <Link to="/"> <StackOverflow size="2em" /></Link>
      <Link to="/"> <Twitter size="2em" /> </Link>
      <Link to="/"> <Medium size="2em" /> </Link>
      </div>
      <p className='copyright'>
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
      </div>    
  </footer>
)

export default Footer

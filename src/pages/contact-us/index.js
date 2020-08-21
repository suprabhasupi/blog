import React from "react"
// import { Link } from "gatsby"

import Layout from "../../components/layout"
// import SEO from "../components/seo"
import { Twitter, Github, DevTo, Instagram, Linkedin, StackOverflow, Medium, Codepen } from 'styled-icons/boxicons-logos'
import './style.scss'


const SecondPage = () => (
  <Layout>
    {/* <SEO title="Page two" /> */}
    <div className="conatact-us">
    <h1>Contact</h1>
    <p>Say hello to me on social media 👋</p>
    <div className='social-icons'>
      <a href="https://github.com/suprabhasupi"> <Github size="3em" /> </a>
      <a href="https://codepen.io/suprabhasupi"> <Codepen size="3em" /> </a>
      <a href="https://dev.to/suprabhasupi"> <DevTo size="3em" /> </a>
      <a href="https://www.instagram.com/suprabhasupi"> <Instagram size="3em" /> </a>
      <a href="https://www.linkedin.com/in/suprabha-s"> <Linkedin size="3em" /> </a>
      <a href="https://stackoverflow.com/users/8284147/suprabha"> <StackOverflow size="3em" /> </a>
      <a href="https://twitter.com/suprabhasupi"> <Twitter size="3em" /> </a>
      <a href="https://medium.com/@suprabhasupi"> <Medium size="3em" /> </a>
    </div>
    </div>
    {/* <Link to="/">Go back to the homepage</Link> */}
  </Layout>
)

export default SecondPage

import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ErrorPage from '../images/404.svg'
import './style.scss'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className='error-wrapper'>
    <div className='error-page'>
      <img src={ErrorPage} alt="error page" />
    </div>
    <h1>Sorry, page not found</h1>
    <Link to='/'>Back To Home</Link>
    </div>
  </Layout>
)

export default NotFoundPage

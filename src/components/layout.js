import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import 'font-awesome/css/font-awesome.css'
import './all.sass'
import '../assets/scss/core.scss'
import Header from './header'
import Footer from './footer'
import Preloader from './preloader'
import Navbar from './navbar'
import Sidebar from './sidebar'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
          bodyAttributes={{ class: 'has-navbar-fixed-top' }}
        >
          <html lang="en" />
        </Helmet>

        <Preloader />
        <Navbar />
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
        <div className="site-content">{children}</div>
        <Sidebar />
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import './index.css'
import Link from 'gatsby-link'

const Layout = ({ children, data }) => {
  const siteTitle = data.allWordpressPage.edges[0].node.title;

  console.log('data', data)

  return (
    <div>
      <Helmet
        title={siteTitle}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <Header siteTitle={siteTitle} />

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/solutions">Solutions</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '0px 1.0875rem 1.45rem',
          paddingTop: 0,
        }}
      >
        {children()}
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {

    allWordpressPage(filter: {
      slug: {eq: "botxo"},
    }
    ){
      totalCount
      edges {
        node {
          title
        }
      }
    }

  }
`

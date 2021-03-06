import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Parallax, ParallaxLayer } from 'react-spring';

import Header from '../components/Header'
import './index.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />

    <Header siteTitle={data.site.siteMetadata.title} />

    <Parallax pages={2} style={styles.parallax}>
      <div
        style={{
          margin: '0 auto',
          overflow: 'hidden',
          zIndex: 1,
          width: '100vw',
        }}
      >
        {children()}
      </div>
    </Parallax>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

const styles = {
  parallax: {
    height: '100vh',
    backgroundColor: 'black',
    width: '100vw',
    overflowY: 'scroll',
    position: 'fixed',
    top: 0, left: 0,
    zIndex: 1,
  },
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

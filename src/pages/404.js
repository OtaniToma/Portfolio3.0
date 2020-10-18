import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default ({ location }) => (
  <Layout>
    <SEO
      pagetitle="404 Page Not Found"
      pagedesc="404 Page not found"
      pagepath={location.pathname}
    />
    <h1>404 Page Not Found</h1>
  </Layout>
)
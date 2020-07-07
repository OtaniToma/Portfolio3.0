import React from 'react'
import Layout from '../../components/layout'
import SEO from '../../components/seo'

export default ({ location }) => (
  <Layout>
    <SEO
      pagetitle="Portfolio"
      pagedesc="Description of Portfolio"
      pagepath={location.pathname}
    />
    <h1>Portfolio</h1>
  </Layout>
)
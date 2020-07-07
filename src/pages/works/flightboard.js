import React from 'react'
import Layout from '../../components/layout'
import SEO from '../../components/seo'

export default ({ location }) => (
  <Layout>
    <SEO
      pagetitle="Flight Board"
      pagedesc="Description of Flight Board"
      pagepath={location.pathname}
    />
    <h1>Flight Board</h1>
  </Layout>
)
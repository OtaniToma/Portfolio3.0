import React from 'react'
import Layout from '../../components/layout'
import SEO from '../../components/seo'

export default ({ location }) => (
  <Layout>
    <SEO
      pagetitle="KUMONOS"
      pagedesc="Description of KUMONOS"
      pagepath={location.pathname}
    />
    <h1>KUMONOS</h1>
  </Layout>
)
import React from 'react'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Hero from '../../components/hero'

export default ({ location }) => (
  <Layout>
    <SEO
      pagetitle="KUMONOS"
      pagedesc="Description of KUMONOS"
      pagepath={location.pathname}
    />
    <Hero
      title="KUMONOS"
      bgimg="/images/hero/kumonos.jpg"
    />
  </Layout>
)
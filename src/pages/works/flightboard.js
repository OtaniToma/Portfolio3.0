import React from 'react'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Hero from '../../components/hero'

export default ({ location }) => (
  <Layout>
    <SEO
      pagetitle="Flight Board"
      pagedesc="Description of Flight Board"
      pagepath={location.pathname}
    />
    <Hero
      title="Flight Board"
      bgimg="/images/hero/flightboard.jpg"
    />
  </Layout>
)
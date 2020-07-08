import React from 'react'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Hero from '../../components/hero'

export default ({ location }) => (
  <Layout>
    <SEO
      pagetitle="Portfolio"
      pagedesc="Description of Portfolio"
      pagepath={location.pathname}
    />
    <Hero
      title="Portfolio"
      bgimg="/images/hero/portfolio.jpg"
    />
  </Layout>
)
import React from 'react'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Hero from '../../components/hero'
import TextBlock from '../../components/textblock'
import Button from '../../components/button'

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
import React from 'react'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Hero from '../../components/hero'

export default ({ location }) => (
  <Layout>
    <SEO
      pagetitle="BudgeTicket"
      pagedesc="Description of BudgeTicket"
      pagepath={location.pathname}
    />
    <Hero
      title="BudgeTicket"
      bgimg="/images/hero/budgeticket.jpg"
    />
  </Layout>
)
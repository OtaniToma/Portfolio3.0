import React from 'react'
import Layout from '../../components/layout'
import SEO from '../../components/seo'

export default ({ location }) => (
  <Layout>
    <SEO
      pagetitle="BudgeTicket"
      pagedesc="Description of BudgeTicket"
      pagepath={location.pathname}
    />
    <h1>BudgeTicket</h1>
  </Layout>
)
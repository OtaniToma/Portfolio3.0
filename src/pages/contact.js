import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import TextBlock from '../components/textblock'

export default ({ location }) => (
  <Layout>
  <SEO
    pagetitle="Contact"
    pagedesc="Test for Netlify Forms"
    pagepath={location.pathname}
  />
    <TextBlock heading={"Contact"} pagetop={true}>
      <p>
        test
      </p>
    </TextBlock>

  </Layout>
)
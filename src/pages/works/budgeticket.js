import React from 'react'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Hero from '../../components/hero'
import TextBlock from '../../components/textblock'
import Skills from '../../components/skills'
import Button from '../../components/button'

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
    
    <TextBlock heading={'Overview'} pagetop={false}>
      <img src="/images/works/budgeticket.png" className="screenshot" alt="screenshot" />
      <p>
        This app can find cheap flights with destination information.
        The purpose of creating this app is to understand the basics of JavaScript, handling API request, and React.js app development.
      </p>
      <Button value={'Live'} type={'solid'} link={'https://budgeticket.firebaseapp.com/'} external={true} />
    </TextBlock>
    
    <TextBlock heading={'Skills'} pagetop={false}>
      <Skills
        heading={''}
        icons={['javascript', 'react', 'redux', 'firebase', 'materialui']}
        description={[]}
      />
    </TextBlock>

  </Layout>
)
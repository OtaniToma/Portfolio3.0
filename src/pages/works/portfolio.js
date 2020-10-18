import React from 'react'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Hero from '../../components/hero'
import TextBlock from '../../components/textblock'
import Skills from '../../components/skills'
import Button from '../../components/button'
import Pagination from '../../components/pagination'

export default ({ location }) => (
  <Layout>
    <SEO
      pagetitle="Portfolio"
      pagedesc="This is the detailed information of my potfolio website."
      pagepath={location.pathname}
    />
    <Hero
      title="Portfolio"
      bgimg="/images/hero/portfolio.jpg"
    />
    
    <TextBlock heading={'Overview'} pagetop={false}>
      <img src="/images/works/portfolio.png" className="screenshot" alt="screenshot" />
      <p>
        I built this portfolio website from scratch to understand Gatsby.js.<br />
      </p>
      <Button value={'Github'} type={'outline'} link={'https://github.com/OtaniToma/portfolio'} external={true} />
    </TextBlock>

    <TextBlock heading={'Features'} pagetop={false}>
      <img src="/images/works/portfolio-lighthouse.jpg" className="screenshot" alt="screenshot" />
      <p>
        This website achieves 100 point at performance on Google's Lighthouse Report.
      </p>
    </TextBlock>
    
    <TextBlock heading={'Technologies'} pagetop={false}>
      <Skills
        icons={['javascript', 'react', 'gatsby', 'graphql']}
      />
      <Skills
        heading={'Light and Fast Static Website'}
        description={[
          'Utilize Gatsby.js',
          'Show WebP images by GraphQL',
          'Available for PWA',
          'Automatically deploy to Netlify'
        ]}
      />
      <Skills
        heading={'Plugins'}
        description={[
          'gatsby-image',
          'gatsby-plugin-sass',
          'gatsby-plugin-prefetch-google-fonts',
          'gatsby-plugin-react-helmet',
          'gatsby-plugin-smoothscroll',
          'gatsby-source-filesystem'
        ]}
      />
    </TextBlock>

    <Pagination
      prev={'budgeticket'}
      next={'kumonos'}
    />

  </Layout>
)
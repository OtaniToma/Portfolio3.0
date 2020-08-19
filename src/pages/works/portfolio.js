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
        I built this portfolio website from scratch to understand SPA (Single Page Application) with React.js. Also, I added CSS and JavaScript animation to demonstrate my skills.
      </p>
      <Button value={'Github'} type={'outline'} link={'https://github.com/OtaniToma/portfolio'} external={true} />
    </TextBlock>
    
    <TextBlock heading={'Skills'} pagetop={false}>
      <Skills
        icons={['javascript', 'react', 'gatsby', 'graphql']}
      />
      <Skills
        heading={'Static Site Generator: Gatsby.js'}
        icons={[]}
        description={[
          'Utilize Gatsby.js to build light and fast website',
          'Show images by GraphQL',
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
      prev={'flightboard'}
      next={'kumonos'}
    />

  </Layout>
)
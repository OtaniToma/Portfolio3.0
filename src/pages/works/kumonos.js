import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Hero from '../../components/hero'
import TextBlock from '../../components/textblock'
import Skills from '../../components/skills'
import Button from '../../components/button'
import Pagination from '../../components/pagination'

export const query = graphql`
  query {
    home: file(relativePath: {eq: "works/kumonos-home.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    about: file(relativePath: {eq: "works/kumonos-about.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default ({ location, data }) => (
  <Layout>
    <SEO
      pagetitle="KUMONOS"
      pagedesc="KUMONOS is an original WordPress theme developed from scratch."
      pagepath={location.pathname}
    />
    <Hero
      title="KUMONOS"
      bgimg="/images/hero/kumonos.jpg"
    />
    
    <TextBlock heading={'Overview'} pagetop={false}>
      <img src="/images/works/kumonos.png" className="screenshot" alt="screenshot" />
      <p>
        KUMONOS Corporation is a construction consultancy company based in Japan. With the recent expansion of their business into worldwide, they considered to renewing the website. I worked for the company as a freelance web designer and developer remotely.
      </p>
      <Button value={'Visit Website'} type={'solid'} link={'http://kumonos.info/'} external={true} />
    </TextBlock>
    
    <TextBlock heading={'Skills'} pagetop={false}>
      <Skills
        icons={['html', 'css', 'javascript', 'sass', 'wordpress', 'gsap', 'scrollmagic', 'photoshop', 'illustrator']}
      />
      <Skills
        heading={'Setting Up Local Development Environment'}
        icons={[]}
        description={[
          'Register virtual host URL (http://test.dev) with VirtualHostX',
          'Create database file with phpMyAdmin',
          'Start server with MAMP'
        ]}
      />
      <Skills
        heading={'Development'}
        description={[
          'CSS: BEM Methodology and SCSS',
          'Recet CSS: Normalize.css',
          'JavaScript: Break into multiple modules and export to single bundle.js',
          'Task runner: Gulp.js',
        ]}
      />
      <Skills
        heading={'Animations'}
        description={[
          'Animation with JavaScript libraries (GSAP and ScrollMagic)',
          'CSS animation',
          'Control SVG elements by CSS animation'
        ]}
      />
      <Skills
        heading={'Plugins'}
        description={[
          'Advanced Custom Field',
          'Contact Form 7',
          'Yoast SEO',
          'UpdraftPlus'
        ]}
      />
    </TextBlock>

    <TextBlock heading={'Homepage'} pagetop={false}>
      <Img fluid={data.home.childImageSharp.fluid} alt="screenshot" />
    </TextBlock>

    <TextBlock heading={'About Us page'} pagetop={false}>
      <Img fluid={data.about.childImageSharp.fluid} alt="screenshot" />
    </TextBlock>

    <Pagination
      prev={'flightboard'}
      next={'portfolio'}
    />

  </Layout>
)
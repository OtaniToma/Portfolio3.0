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
      pagetitle="Markdown Editor"
      pagedesc="This is the detailed information of my potfolio website."
      pagepath={location.pathname}
    />
    <Hero
      title="Markdown Editor"
      bgimg="/images/hero/markdown.jpg"
    />
    
    <TextBlock heading={'Overview'} pagetop={false}>
      <img src="/images/works/markdown.png" className="screenshot" alt="screenshot" />
      <p>
        Markdown Editor is an application of text-to-html conversion. Draft data can be stored on the browser with IndexedDB.
      </p>
      <p>
        *The app is based on the tutorial on <a href="https://www.techpit.jp/courses/111" target="_blank" rel="noreferrer">techpit.jp</a>.
      </p>
      <Button value={'Visit Website'} type={'solid'} link={'https://otanitoma.github.io/markdown-editor/'} external={true} />
      <Button value={'Github'} type={'outline'} link={'https://github.com/OtaniToma/markdown-editor'} external={true} />
    </TextBlock>
    
    <TextBlock heading={'Technologies'} pagetop={false}>
      <Skills
        icons={['typescript', 'react', 'pwa']}
      />
    </TextBlock>

    <TextBlock heading={'Features'} pagetop={false}>
      <img src="/images/works/markdown-1.gif" className="" alt="screenshot" />
      <p>
        When user typed words in markdown format, it is automatically converted to HTML and show on the right side panel.
      </p>
      <img src="/images/works/markdown-2.gif" className="" alt="screenshot" />
      <p>
        The data can be saved to the browser and retrieve the previous data.
      </p>
      <img src="/images/works/markdown-pwa.jpg" className="" alt="screenshot" />
      <p>
        The app is also built as PWA (Progressive Web Apps). 
      </p>
    </TextBlock>


    <Pagination
      prev={'portfolio'}
      next={'kumonos'}
    />

  </Layout>
)
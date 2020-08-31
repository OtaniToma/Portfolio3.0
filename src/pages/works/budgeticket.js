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
      pagetitle="BudgeTicket"
      pagedesc="BudgeTicket is a web application to find cheap flights."
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
      <Button value={'Visit Website'} type={'solid'} link={'https://budgeticket.firebaseapp.com/'} external={true} />
      <Button value={'Github'} type={'outline'} link={'https://github.com/OtaniToma/budgeticket'} external={true} />
    </TextBlock>
    
    <TextBlock heading={'Features'} pagetop={false}>
      <img src="/images/works/budgeticket-1.gif" className="" alt="screenshot" />
      <p>
        Text forms have autocomplete function to input accurate airport name. Also, datepicker components have the validation to check the departure date is before the return date.
      </p>
      <img src="/images/works/budgeticket-2.gif" className="" alt="screenshot" />
      <p>
        The data from Skyscanner API is stored in Redux store. Users can filter or sort results by departure date, price, and airlines.
      </p>
    </TextBlock>
    
    <TextBlock heading={'Skills'} pagetop={false}>
      <Skills
        heading={''}
        icons={['javascript', 'react', 'redux', 'firebase', 'materialui']}
        description={[]}
      />
      <Skills
        heading={'JavaScript & React.js'}
        icons={[]}
        description={[
          'Utilize React Hooks',
          'Understand Re-ducks design pattern',
          'Style with UI Framework (Material-UI)'
        ]}
      />
      <Skills
        heading={'APIs'}
        icons={[]}
        description={[
          'Skyscanner Flight Search',
          'Google Maps JavaScript',
          'Unsplash Image'
        ]}
      />
    </TextBlock>

    <Pagination
      prev={'home'}
      next={'portfolio'}
    />

  </Layout>
)
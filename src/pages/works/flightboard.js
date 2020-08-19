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
      pagetitle="Flight Board"
      pagedesc="Flight Board is a web application to share aviation photography."
      pagepath={location.pathname}
    />
    <Hero
      title="Flight Board"
      bgimg="/images/hero/flightboard.jpg"
    />
    
    <TextBlock heading={'Overview'} pagetop={false}>
      <img src="/images/works/flightboard.png" className="screenshot" alt="screenshot" />
      <p>
        This app is to share airplane photography for aviation geeks like me. User can post photos with aircraft information and see the location of the airport on the map.
      </p>
      <p>
        The purpose is to understand developing basic web app, relationships between front-end and backend, and MVC architecture.
      </p>
      <p>
        The original app is based on the online course on Udemy (The Web Developer Bootcamp by Colt Steel). After completed the tutorial, I tried to add more features (login, search by airport, and showing map) with other references.
      </p>
      <p>
      <strong>Trial Account</strong>
        <ul>
          <li>ID: speedbird</li>
          <li>Password: speedbird</li>
        </ul>
      <Button value={'Visit Website'} type={'solid'} link={'https://flight-board.herokuapp.com/airplanes'} external={true} />
      <Button value={'Github'} type={'outline'} link={'https://github.com/OtaniToma/flightboard'} external={true} />
      </p>
    </TextBlock>
    
    <TextBlock heading={'Skills'} pagetop={false}>
      <Skills
        icons={['javascript', 'node', 'express', 'ejs', 'mongodb', 'bootstrap']}
        description={[]}
      />
      <Skills
        heading={'Features'}
        description={[
          'Post aviation photo with information (Registration number, airline, aircraft type, etc...)',
          "Search posted photos by IATA airport code (e.g. 'YVR')",
          'Show airport location with Google Maps API',
          'Administrator authorization (Edit & delete all posts)'
        ]}
      />
      <video src="/videos/flightboard.mp4" autoPlay="autoplay" controls="controls" loop="loop" playsInline>
        <track src="#" kind="captions" srclang="en" label="English" />
      </video>
    </TextBlock>

    <TextBlock heading={'Specification'} pagetop={false}>
      <Skills
        heading={'Database'}
        icons={[]}
        description={[
          'MongoDB'
        ]}
      />
      <Skills
        heading={'UI Framework'}
        icons={[]}
        description={[
          'Bootstrap 4'
        ]}
      />
      <Skills
        heading={'Libraries'}
        icons={[]}
        description={[
          'body-parser',
          'connect-flash',
          'Dotenv',
          'EJS',
          'Express',
          'Moment.js',
          'Mongoose',
          'Passport.js'
        ]}
      />

    </TextBlock>

    <Pagination
      prev={'budgeticket'}
      next={'portfolio'}
    />

  </Layout>
)
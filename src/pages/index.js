import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import TextBlock from '../components/textblock'
import WorksItem from '../components/WorksItem'
import Button from '../components/button'
import TransformPerspective from '../components/transformPerspective'

export default () => (
  <Layout>
    
    <section className="home">
      <div className="home__container">
        <div className="home__name">
          <div className="home__name__wrapper">
            <h1 className="home__name__fullname">Toma Otani</h1><br />
              <span className="home__name__sub">
                Front-end Developer<br />
                Based in Vancouver, Canada
              </span>
          </div>
        </div>
      </div>
      <div className="home__arrow">
        <Link to='#about'>
          <svg width="100%" height="100%" viewBox="0 0 92 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M45.5285 49.4125L41.6449 45.5288L0 3.88372L3.88369 3.4865e-05L45.5287 41.645L87.1736 0L91.0573 3.88369L49.4123 45.5287L45.5285 49.4125ZM45.5285 74.7062L41.6449 70.8225L0 29.1775L3.88369 25.2939L45.5286 66.9388L87.1736 25.2937L91.0573 29.1774L49.4123 70.8225L45.5285 74.7062ZM41.645 96.1162L0 54.4712L3.88369 50.5875L45.5287 92.2325L87.1736 50.5876L91.0573 54.4713L45.5288 100L41.645 96.1162Z"></path>
          </svg>
        </Link>
      </div>
    </section>
    
    <TextBlock heading={'About Me'} pagetop={true} sectionid={'about'}>
      <TransformPerspective path={'../images/about/avatar.jpg'}/>
      <p>Hi! I am Toma Otani, a front-end web developer in Vancouver, Canada.</p>
      <p>I moved to Vancouver on 2018. After graduating from British Columbia Institute of Technology (BCIT), I started to work as a junior web developer at Signals Design Group, a design agency in Vancouver.</p>
      <Button value={'About Me'} type={'solid'} link={'/about'} />
    </TextBlock>

    <WorksItem
      heading={'Fight Board'}
      image={'/images/works/flightboard.png'}
      skills={['JavaScript', 'Node.js', 'Express.js', 'EJS', 'mongoDB', 'Heroku', 'Bootstrap']}
      link={'/works/flightboard'}
      github={''}
      description={'This app is to share airplane photography for aviation geeks like me. User can post photos with aircraft information and see the location of the airport on the map.'}
    />

    <WorksItem
      heading={'Portfolio'}
      image={'/images/works/portfolio.png'}
      skills={['React.js', 'Gatsby.js', 'GraphQL', 'CSS']}
      link={'/works/flightboard'}
      github={'https://github.com/OtaniToma/Portfolio3.0'}
      description={'I built this portfolio website from scratch to understand SPA (Single Page Application) with React.js. Also, I added some animation with CSS and JavaScript library to demonstrate my skills.'}
    />

  </Layout>
)
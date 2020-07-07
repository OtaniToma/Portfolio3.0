import React from 'react'
import Layout from '../components/layout'

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
        <svg width="100%" height="100%" viewBox="0 0 92 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M45.5285 49.4125L41.6449 45.5288L0 3.88372L3.88369 3.4865e-05L45.5287 41.645L87.1736 0L91.0573 3.88369L49.4123 45.5287L45.5285 49.4125ZM45.5285 74.7062L41.6449 70.8225L0 29.1775L3.88369 25.2939L45.5286 66.9388L87.1736 25.2937L91.0573 29.1774L49.4123 70.8225L45.5285 74.7062ZM41.645 96.1162L0 54.4712L3.88369 50.5875L45.5287 92.2325L87.1736 50.5876L91.0573 54.4713L45.5288 100L41.645 96.1162Z"></path>
        </svg>
      </div>
    </section>
  </Layout>
)
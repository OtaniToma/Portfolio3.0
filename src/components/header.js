import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub
} from '@fortawesome/free-brands-svg-icons'
import Hamburger from './hamburger'

export default () => (
  <>
    <header className="header-desktop">
      <Hamburger type={'desktop'} />
      <div className="header-desktop__container">
        <div className="header-desktop__title">
          <Link to={`/`}>Toma Otani</Link>
        </div>
        <div className="header-desktop__icon">
          <Link to={`https://www.linkedin.com/in/otani-toma/`} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></Link>
          <Link to={`https://github.com/OtaniToma/`} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></Link>
        </div>
      </div>
    </header>

    <header className="header-mobile">
      <Hamburger type={'mobile'} />
    </header>
  </>
)
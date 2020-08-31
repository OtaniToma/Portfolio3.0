import React, {　useState　} from 'react'
import { Link } from 'gatsby'
import Nav from './nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub
} from '@fortawesome/free-brands-svg-icons'

const Header = () => {

  const [navOpen, toggleNavOpen] = useState(false);

  return (
    <>
      <header className="header-desktop">
        <div
          className="header-desktop__hamburger"
          onClick={() => toggleNavOpen(prevState => !prevState)}
          onKeyDown={() => toggleNavOpen(prevState => !prevState)}
          role="button"
          tabIndex="0"
        >
          <div className={navOpen ? "hamburger__trigger is-active" : "hamburger__trigger"}>
            <div className="hamburger__wrap">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div className="header-desktop__container">
          <div className="header-desktop__title">
            <Link to={`/`}>Otani Toma</Link>
          </div>
          <div className="header-desktop__icon">
            <a href="https://www.linkedin.com/in/otani-toma/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="https://github.com/OtaniToma/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
          </div>
        </div>
      </header>

      { navOpen && <Nav />}

      <header className="header-mobile">
        <div className="header-mobile__hamburger"
          onClick={() => toggleNavOpen(prevState => !prevState)}
          onKeyDown={() => toggleNavOpen(prevState => !prevState)}
          role="button"
          tabIndex="0"
        >
          <div className={navOpen ? "hamburger__trigger is-active" : "hamburger__trigger"}>
            <div className="hamburger__wrap">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
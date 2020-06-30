import React from 'react'
import { Link } from 'gatsby'

export default () => (
  <header className="header">
    <div className="container">
      <div className="site">
        <Link to={`/`}>
          Gatsby.js Boilerplate
        </Link>
      </div>
      <nav className="nav">
        <ul>
          <li><Link to={`/`}>TOP</Link></li>
          <li><Link to={`/about/`}>ABOUT</Link></li>
        </ul>
      </nav>
    </div>
  </header>
)
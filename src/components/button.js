import React from 'react'
import { Link } from 'gatsby'

export default ({ value, type, link, external }) => (
  <>
    { external ? 
      <a href={link} target="_blank">
        <button class={"btn " + "btn--" + type}>
          {value}
        </button>
      </a> :
      <Link to={link}>
        <button class={"btn " + "btn--" + type}>
          {value}
        </button>
      </Link>
    }
  </>
)
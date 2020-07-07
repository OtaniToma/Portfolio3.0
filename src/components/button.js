import React from 'react'
import { Link } from 'gatsby'

export default ({ value, type, link }) => (
  <>
    <Link to={link}>
      <button class={"btn " + "btn--" + type}>
        {value}
      </button>
    </Link>
  </>
)
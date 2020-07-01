import React from 'react'

export default (props) => (
  <div className={"header-" + (props.type) + "__hamburger"}>
    <div className="hamburger__trigger">
      <div className="hamburger__wrap">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
)
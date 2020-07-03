import React from 'react'

const TextBlock = (props) => {
  
  return (
    <>
      <div className="textblock">
        <div className="textblock__container inner-wrap">
          <div className="textblock__header">
            <div className="textblock__header__line"></div>
            <h2>{props.heading}</h2>
          </div>
          <div className="textblock__body">
            <div className="textblock__body__line"></div>
            {props.children}
          </div>
        </div>
      </div>
    </>
  )
}

export default TextBlock
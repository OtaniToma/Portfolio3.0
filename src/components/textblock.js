import React from 'react'

const TextBlock = ({ heading, children, pagetop, sectionid }) => {
  
  return (
    <>
      <section className="textblock" id={sectionid}>
        <div className={
          pagetop ? "textblock__container inner-wrap page-top" : "textblock__container inner-wrap"
        }>
          <div className="textblock__header">
            <div className="textblock__header__line"></div>
            <h2>{heading}</h2>
          </div>
          <div className="textblock__body">
            <div className="textblock__body__line"></div>
            {children}
          </div>
        </div>
      </section>
    </>
  )
}

export default TextBlock
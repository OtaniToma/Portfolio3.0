import React from 'react'
import Button from '../components/button'

const WorksItem = ({ heading, subtitle, image, skills, link, github, description }) => {
  
  return (
    <>
      <section className="works-item">
        <div className="works-item__container inner-wrap">
          <div className="works-item__main-img">
            <div className="works-item__main-img__line"></div>
            <img src={image} alt="" />
          </div>
          <div className="works-item__body">
            <div className="works-item__body__line"></div>
            <h2>{heading}</h2>
            <div className="works-item__body__subtitle">{subtitle}</div>
            <ul className="skills">
              { skills.map(skill => {
                return <li key={skill}>{skill}</li>
              }) }
            </ul>
            <p>{description}</p>
            <div className="button-group">
              <Button value={'Read More'} type={'solid'} link={link} />
              { github && <Button value={'Github'} type={'outline'} link={github} external={true} /> }
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default WorksItem
import React from 'react'
import Button from '../components/button'
import { Link } from 'gatsby'

const WorksItem = ({ heading, subtitle, image, skills, link, description }) => {
  
  return (
    <>
      <section className="works-item">
        <div className="works-item__container inner-wrap">
          <div className="works-item__main-img">
            <div className="works-item__main-img__line"></div>
            <Link to={link}>
              <img src={image} alt="" />
            </Link>
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
            <Button value={'Read More'} type={'solid'} link={link} />
          </div>
        </div>
      </section>
    </>
  )
}

export default WorksItem
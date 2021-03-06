import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBuilding,
  faCalendar,
  faMapMarkerAlt,
  faClock
} from '@fortawesome/free-solid-svg-icons'

const CompanyInfo = ({ jobtitle, company, url, location, period, time, description }) => {
  
  return (
    <>
      <div className="company-info">
        <dt>{jobtitle}</dt>
        <dd>
          <ul className="company-info__basic-info">
            <li>
              <FontAwesomeIcon icon={faBuilding} /> <a href={url} target="_blank" rel="noreferrer">{company}</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> {location}
            </li>
            <li>
              <FontAwesomeIcon icon={faCalendar} /> {period}
            </li>
            { time && 
              <li>
                <FontAwesomeIcon icon={faClock} /> {time}
              </li>
            }
          </ul>
          { description && 
            <ul className="company-info__job-description">
              {description.map((item, index) => {
                return <li key={index}>{item}</li>
              })}
            </ul>
          }
        </dd>
      </div>
    </>
  )
}

export default CompanyInfo
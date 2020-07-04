import React, { useEffect } from 'react'

const Skills = ({ heading, description, icons }) => {

  const allIcons = [
    { id: 'html', path: '/images/icon/html.svg' },
    { id: 'css', path: '/images/icon/css.svg' },
    { id: 'js', path: '/images/icon/js.svg' },
    { id: 'react', path: '/images/icon/react.svg' },
    { id: 'wordpress', path: '/images/icon/wordpress.svg' },
    { id: 'git', path: '/images/icon/git.svg' },
    { id: 'github', path: '/images/icon/github.svg' },
    { id: 'material-ui', path: '/images/icon/material-ui.svg' },
    { id: 'bootstrap', path: '/images/icon/bootstrap.svg' },
    { id: 'illustrator', path: '/images/icon/ai.svg' },
    { id: 'photoshop', path: '/images/icon/ps.svg' },
    { id: 'figma', path: '/images/icon/figma.svg' },
  ]


    const iconsToShow = icons;
    const iconsToShowArray = [];

    const checkIcons = (iconsToShow) => {
      iconsToShow.forEach((iconToShow, index) => {
        allIcons.forEach((icon) => {
          if (iconToShow === icon.id) {
            iconsToShowArray[index] = icon.path;
          }
        })
      })
    }
    checkIcons(iconsToShow);

  return (
    <>
      <dl className="skills">
        <dt>{heading}</dt>
        <dd>
          <ul className="icon-list">
            { iconsToShowArray.map((icon, index) => {
              return <li key={index}><img src={icon} /></li>
            }) }
          </ul>
          { description && 
            <ul className="desc-list">
              {description.map((item, index) => {
                return <li key={index}>{item}</li>
              })}
            </ul>
          }
        </dd>
      </dl>
    </>
  )
}

export default Skills
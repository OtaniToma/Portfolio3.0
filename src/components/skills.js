import React from 'react'

const Skills = ({ heading, description, icons }) => {

  const allIcons = [
    { id: 'html', path: '/images/icon/html.svg' },
    { id: 'css', path: '/images/icon/css.svg' },
    { id: 'javascript', path: '/images/icon/js.svg' },
    { id: 'react', path: '/images/icon/react.svg' },
    { id: 'wordpress', path: '/images/icon/wordpress.svg' },
    { id: 'git', path: '/images/icon/git.svg' },
    { id: 'github', path: '/images/icon/github.svg' },
    { id: 'material-ui', path: '/images/icon/material-ui.svg' },
    { id: 'bootstrap', path: '/images/icon/bootstrap.svg' },
    { id: 'illustrator', path: '/images/icon/ai.svg' },
    { id: 'photoshop', path: '/images/icon/ps.svg' },
    { id: 'figma', path: '/images/icon/figma.svg' },
    { id: 'firebase', path: '/images/icon/firebase.svg' },
    { id: 'redux', path: '/images/icon/redux.svg' },
    { id: 'gatsby', path: '/images/icon/gatsby.svg' },
    { id: 'graphql', path: '/images/icon/graphql.svg' },
    { id: 'typescript', path: '/images/icon/ts.svg' },
  ]

    const iconsToShow = icons;
    const iconsToShowArray = [];

    const checkIcons = (iconsToShow) => {
      iconsToShow.forEach((iconToShow, index) => {
        allIcons.forEach((icon) => {
          if (iconToShow === icon.id) {
            const id = icon.id;
            const path = icon.path;
            iconsToShowArray[index] = { id: id, path: path };
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
              return <li key={index}><img src={icon.path} alt={icon.id} /></li>
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
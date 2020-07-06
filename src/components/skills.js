import React from 'react'

const Skills = ({ heading, description, icons }) => {

  const allIcons = {
    html: { id: 'html', path: '/images/icon/html.svg' },
    css: { id: 'css', path: '/images/icon/css.svg' },
    javascript: { id: 'javascript', path: '/images/icon/js.svg' },
    react: { id: 'react', path: '/images/icon/react.svg' },
    wordpress: { id: 'wordpress', path: '/images/icon/wordpress.svg' },
    git: { id: 'git', path: '/images/icon/git.svg' },
    github: { id: 'github', path: '/images/icon/github.svg' },
    materialui: { id: 'material-ui', path: '/images/icon/material-ui.svg' },
    bootstrap: { id: 'bootstrap', path: '/images/icon/bootstrap.svg' },
    illustrator: { id: 'illustrator', path: '/images/icon/ai.svg' },
    photoshop: { id: 'photoshop', path: '/images/icon/ps.svg' },
    figma: { id: 'figma', path: '/images/icon/figma.svg' },
    firebase: { id: 'firebase', path: '/images/icon/firebase.svg' },
    redux: { id: 'redux', path: '/images/icon/redux.svg' },
    gatsby: { id: 'gatsby', path: '/images/icon/gatsby.svg' },
    graphql: { id: 'graphql', path: '/images/icon/graphql.svg' },
    typescript: { id: 'typescript', path: '/images/icon/ts.svg' },
  }

  const iconsToShow = icons;

  return (
    <>
      <dl className="skills">
        <dt>{heading}</dt>
        <dd>
          <ul className="icon-list">
            { iconsToShow.map(icon => {
              return <li key={allIcons[icon].id}><img src={allIcons[icon].path} /></li>
            })}
          </ul>
          { description && 
            <ul className="desc-list">
              { description.map((item, index) => {
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
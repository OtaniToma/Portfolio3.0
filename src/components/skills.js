import React from 'react'

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
    { id: 'photoshop', path: '/images/icon/wordpress.svg' },
  ]
  const iconsToShow = [];
  
  const checkIcons = (icons) => {
    allIcons.map((icon, index) => {
      if (icons[index] === icon.id) {
        iconsToShow[index] = {id: icon.id, path: icon.path}
      }
      return true;
    })
  }
  checkIcons(icons);

  const showIcons = iconsToShow.map(icon => {
    return (
      <li key={icon.id}>
        <img src={icon.path} className="icon" alt={icon.id} />
      </li>
    );
  });

  return (
    <>
      <dl className="skills">
        <dt>{heading}</dt>
        <dd>
          <ul className="icon-list">
            { showIcons }
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
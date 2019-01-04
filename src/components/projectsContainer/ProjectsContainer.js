import React from 'react'
import Projects from '../projects/Projects'
import projectData from '../../utilities/projectData'
import './ProjectsContainer.css'
import home from '../../images/web-page-home.svg'

const ProjectsContainer = () => {
  const displayProjects = projectData.map((project, index) => {
    return <Projects 
              key={index}
              {...project}
            />
  })

  return (
    <div className='all-projects-container'>
      <img src={home}/>
      {displayProjects}
    </div>
  )
}

export default ProjectsContainer
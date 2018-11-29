import React from 'react'
import Projects from '../projects/Projects'
import projectData from '../../utilities/projectData'
import './ProjectsContainer.css'

const ProjectsContainer = () => {
  const displayProjects = projectData.map((project, index) => {
    return <Projects 
              key={index}
              {...project}
            />
  })

  return (
    <div className='all-projects-container'>
      {displayProjects}
    </div>
  )
}

export default ProjectsContainer
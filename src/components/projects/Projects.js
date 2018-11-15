import React, { Component } from 'react';
import './Projects.css'
import rightArrow from '../../images/right-arrow.png'
import leftArrow from '../../images/left-arrow.png'
import neighborhood1 from '../../images/neighborhood1.png';
import pokemon1 from '../../images/pokemon1.png'
import movie1 from '../../images/movie1.png'
import github from '../../images/github-link.png'

class Projects extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div className='projects-container'>
        <h1>Projects</h1>
        <div className='project neighborhood'>
          <img className='project-image' src={neighborhood1}/>
          <img className='github-link' src={github}/>
        </div>
        <div className='project movie'>
        
          <img className='project-image' src={movie1}/>
        </div>
        <div className='project pokemon'>
     
          <img className='project-image' src={pokemon1}/>
        </div>
      </div>
    )
  }
}

export default Projects
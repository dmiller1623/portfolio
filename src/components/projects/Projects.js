import React, { Component } from 'react';
import './Projects.css'
import rightArrow from '../../images/right-arrow.png'
import leftArrow from '../../images/left-arrow.png'

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
          <img src={leftArrow}/>
          <img src={rightArrow}/>
        </div>
        <div className='project movie'>
          <img src={leftArrow}/>
          <img src={rightArrow}/>
        </div>
        <div className='project pokemon'>
          <img src={leftArrow}/>
          <img src={rightArrow}/>
        </div>
      </div>
    )
  }
}

export default Projects
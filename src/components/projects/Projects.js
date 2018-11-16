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
    let imageRoute = this.props.img.toString()
    console.log(imageRoute)
    return (
      <div className='projects-container'>
        <img className='project-image' src={require(imageRoute)}/>
      </div>
    )
  }
}

export default Projects
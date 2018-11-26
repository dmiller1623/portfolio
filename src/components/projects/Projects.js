import React, { Component } from 'react';
import './Projects.css'
import rightArrow from '../../images/right-arrow.png'
import leftArrow from '../../images/left-arrow.png'
import github from '../../images/github-link.png'

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      currentImage: 0
    }
  }

  handleImageView = () => {
    let imageIndex = this.state.currentImage;
    switch(imageIndex) {
      case (0):
        this.setState({
          currentImage: 1
        })
      break;
      case (1): 
        this.setState({
          currentImage: 0
        })
      break;
    }
    return imageIndex
  }

  render() {
    return (
      <div className='projects'>
        <img className='project-image' src={this.props.img[this.state.currentImage]} onClick={this.handleImageView}/>
        <a className='github-link' href={this.props.github}/>
      </div>
    )
  }
}

export default Projects
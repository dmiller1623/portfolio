import React, { Component } from 'react';
import './Projects.css'
import rightArrow from '../../images/right-arrow.png'
import leftArrow from '../../images/left-arrow.png'
import github from '../../images/github-link.png'

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      currentImage: 0,
      description: false
    }
  }

  changeDescription = () => {
    let description = !this.state.description;
    this.setState({
      description
    })
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
    if(!this.state.description) {
      return (
        <div className='projects'>
          <div className='image-section'>
            <img className='project-image' src={this.props.img[this.state.currentImage]} onClick={this.handleImageView}/>
          </div>
          <div className='all-links'>
            <p className='description' onClick={this.changeDescription}>Description</p>
            <a className='github-link' href={this.props.github}></a>
          </div>
        </div>
      )
    }
    return (
      <div className='projects'>
        <div className='description-section'>
          <h1 className='description-text'>Description</h1>
          <p className='description-text'>{this.props.description}</p>
          <h1 className='description-text'>Tech Stack</h1>
          {this.props.techStack.map((stack, index) => {
            return <div key={index}>
                    <p className='description-text'>{stack}</p>
                  </div>
          })}
        </div>
        <div className='all-links'>
          <p className={!this.state.description ? 'description' : 'clicked-description'} onClick={this.changeDescription}>Description</p>
          <a className='github-link' href={this.props.github}></a>
        </div>
      </div>
    )
  }
}

export default Projects
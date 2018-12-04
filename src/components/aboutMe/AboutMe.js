import React, { Component } from 'react';
import './AboutMe.css'
import denver from '../../images/denver.jpg'
import profileImage from '../../images/img.png'

class AboutMe extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div className='about-section'>
        <img className='denver-image' src={denver}/>
        <div className='profile-image'>
          <img className='profile-pic' src={profileImage}/>
        </div>
      </div>
    )
  }
}

export default AboutMe; 
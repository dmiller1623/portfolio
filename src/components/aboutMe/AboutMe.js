import React, { Component } from 'react';
import './AboutMe.css'
import home from '../../images/web-page-home.svg'
import denver from '../../images/denver.jpg'
import profileImage from '../../images/img3.PNG'
import resume from '../../files/resume.pdf'

class AboutMe extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div className='about'>
        <img className='home-button' src={home} onClick={() => this.props.handleView('')}/>
        <div className='left-side'>
          <h1>About</h1>
        </div>
        <div className='right-side'>

        </div>
      </div>
    )
  }
}

export default AboutMe; 
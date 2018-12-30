import React, { Component } from 'react';
import './AboutMe.css'
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
        <img className='denver-image' src={denver}/>
        <div className='about-container'>
          <section className='about-section left first'>
            <a href={resume} download={resume}>Resume</a>
            <img className='profile-image' src={profileImage}/>
          </section>
          <section className='about-section right first'></section>
        </div>
        <div className='about-container'>
          <section className='about-section right'></section>
          <section className='about-section left'></section>
        </div>
        <div className='about-container'>
          <section className='about-section left'></section>
          <section className='about-section right'></section>
        </div>
        <div className='about-container'>
          <section className='about-section right last'></section>
          <section className='about-section left last'></section>
        </div>
      </div>
    )
  }
}

export default AboutMe; 
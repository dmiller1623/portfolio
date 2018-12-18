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
        <div className='about-container'>
          <section className='about-section left'></section>
          <section className='about-section right'></section>
        </div>
        <div className='about-container'>
          <section className='about-section left'></section>
          <section className='about-section right'></section>
        </div>
        <div className='about-container'>
          <section className='about-section left'></section>
          <section className='about-section right'></section>
        </div>
        <div className='about-container'>
          <section className='about-section left'></section>
          <section className='about-section right'></section>
        </div>
      </div>
    )
  }
}

export default AboutMe; 
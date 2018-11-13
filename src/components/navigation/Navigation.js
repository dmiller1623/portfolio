import React, { Component } from 'react';
import github from '../../images/github-link.png'
import folder from '../../images/folder.png'
import './Navigation.css'

class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      view: ''
    }
  }

  handleView = (view) => {
    this.setState({
      view
    })
  }

  render() {
    return (
      <div className='navigation-section'>
        <div className='github-section'>
          <h1 className='button-title'>Gituhub</h1>
          <img className='github-image' src={github}/>
        </div>
        <div className='projects-section'>
          <h1 className='button-title'>Projects</h1>
          <img className='projects-image' src={folder}/>
        </div>
      </div>
    )
  }
}

export default Navigation
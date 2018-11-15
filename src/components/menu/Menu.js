import React, { Component } from 'react';
import github from '../../images/github-link.png'
import folder from '../../images/folder.png'
import './Menu.css'

class Menu extends Component {
  constructor() {
    super();
    this.state ={

    }
  }

  render() {
    return (
      <div className='menu-container'>
        <div className='heading-section'>
            <h1 className='heading-name'>Dennis Miller</h1>
            <h1 className='heading-title'>FrontEnd Developer</h1>
            <img className='heading-image' src='https://sg.fiverrcdn.com/photo2s/115792331/original/24e73b206afe0be4da2b941ab06bb09efe2a10a0.jpeg?1534395867'/>
          </div>
          <div className='navigation-section'>
            <div className='github-section'>
              <h1 className='button-title'>Github</h1>
              <a href='https://github.com/dmiller1623'>
                <img className='github-image' src={github}/>
              </a>
            </div>
            <div className='projects-section'>
              <h1 className='button-title'>Projects</h1>
              <img onClick={() => this.props.handleView('projects')} className='projects-image' src={folder}/>
            </div>
          </div>
      </div>
    )
  }
}

export default Menu
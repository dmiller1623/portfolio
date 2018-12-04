import React, { Component } from 'react';
import folder from '../../images/folder.png'
import menu from '../../images/menu.svg'
import bio from '../../images/user.svg'
import './Menu.css'

class Menu extends Component {
  constructor() {
    super();
    this.state = {
      active: '',
      hover: ''
    }
  }

  handleHover = (event) => {
    switch(event.target.className) {
      case ('github-image'): 
        this.setState({
          hover: 'Github'
        })
      break;
      case ('projects-image'):
        this.setState({
          hover: 'Projects'
        })
      break;
      case ('bio-image'):
      this.setState({
        hover: 'About Me'
      })
    break;
      default: 
        this.setState({
          hover: ''
        })
    }
  }

  handleExitHover = () => {
    this.setState({
      hover: ''
    })
  }

  handleActive = () => {
    if(this.state.active === '') {
      this.setState({
        active: 'active'
      })
    }
    else {
      this.setState({
        active: ''
      })
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
          <div className={this.state.active ? this.state.active : 'not-active'}>
            <img 
              className='menu-button' 
              src={menu} 
              onClick={this.handleActive}
            />
            <a 
              className='github-image' 
              href='https://github.com/dmiller1623'
              onMouseOver={(event) => this.handleHover(event)}
              onMouseLeave={this.handleExitHover}
              >
            </a>
            <img 
              className='projects-image' 
              src={folder}
              onClick={() => this.props.handleView('projects')}
              onMouseOver={(event) => this.handleHover(event)}
              onMouseLeave={this.handleExitHover} 
            />
            <img
              className='bio-image'
              src={bio}
              onClick={() => this.props.handleView('about')}
              onMouseOver={(event) => this.handleHover(event)}
              onMouseLeave={this.handleExitHover}
            />
          <h1 className='hover-heading'>{this.state.hover}</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default Menu;
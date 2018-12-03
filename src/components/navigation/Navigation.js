import React, { Component } from 'react';
import './Navigation.css';
import AboutMe from '../aboutMe/AboutMe';
import ProjectsContainer from '../projectsContainer/ProjectsContainer';
import Menu from '../menu/Menu';

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
    if(this.state.view === 'projects') {
      return (
        <div>
          <ProjectsContainer></ProjectsContainer>
        </div>
      )
    } else if(this.state.view === 'about') {
        return(
          <div>
            <AboutMe handleView={this.handleView}></AboutMe>
          </div>
        )
    } else {
      return (
        <div className='navigation-container'>
          <Menu handleView={this.handleView}></Menu>
        </div>
      )
    }
  }
}

export default Navigation
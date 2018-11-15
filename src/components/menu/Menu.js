import React, { Component } from 'react';
import github from '../../images/github-link.png'
import folder from '../../images/folder.png'
import menu from '../../images/menu.svg'
import './Menu.css'

class Menu extends Component {
  constructor() {
    super();
    this.state = {
      active: ''
    }
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
    if(!this.state.active) {
      return (
        <div className='menu-container'>
           <div className='heading-section'>
            <h1 className='heading-name'>Dennis Miller</h1>
            <h1 className='heading-title'>FrontEnd Developer</h1>
            <img className='heading-image' src='https://sg.fiverrcdn.com/photo2s/115792331/original/24e73b206afe0be4da2b941ab06bb09efe2a10a0.jpeg?1534395867'/>
          </div>
          <div className='navigation-section'>
           <img className='menu-button' src={menu} onClick={this.handleActive}/>
          </div>
        </div>
      )
    }
    return (
      <div className='menu-container'>
        <div className='heading-section'>
          <h1 className='heading-name'>Dennis Miller</h1>
          <h1 className='heading-title'>FrontEnd Developer</h1>
          <img className='heading-image' src='https://sg.fiverrcdn.com/photo2s/115792331/original/24e73b206afe0be4da2b941ab06bb09efe2a10a0.jpeg?1534395867'/>
        </div>
          <div className='navigation-section'>
            {/* <div className='menu-button'> */}
              <ul className={this.state.active}>
                {/* <div> */}
                  <img className='menu-button' src={menu} onClick={this.handleActive}/>
                  <a className='github-image' href='https://github.com/dmiller1623'></a>
                  <img onClick={() => this.props.handleView('projects')} className='projects-image' src={folder}/> */}
                {/* </div> */}
              </ul>
            {/* </div> */}
            {/* <div className='github-section'> */}
              {/* <h1 className='button-title'>Github</h1>
            </div>
            <div className='projects-section'>
              <h1 className='button-title'>Projects</h1> */}
            {/* </div> */}
          </div>
      </div>
    )
  }
}

export default Menu
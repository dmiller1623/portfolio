import React, { Component } from 'react';
import './App.css';
import Navigation from '../navigation/Navigation'
import Projects from '../projects/Projects'

class App extends Component {
  render() {
    return (
      <div className="App">
       {/* <Projects></Projects> */}
       <Navigation></Navigation>
      </div>
    );
  }
}

export default App;

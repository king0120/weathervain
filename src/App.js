import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        {this.props.children}
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import Home from './components/Home';
import Navbar from './components/Navbar';
import Form from './components/Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar title="Personality" />
        <Form />
      </div>
    );
  }
}

export default App;
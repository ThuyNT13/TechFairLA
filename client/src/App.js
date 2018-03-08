import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

// import Home from './components/Home';
import Navbar from './components/Navbar';
import Form from './components/Form';

class App extends Component {
  render() {
    return (
      <Router className="App">
        <div>
          <Navbar title="Personality" />
          {/* <Route exact path="/" component={Home} /> */}
          <Route exact path="/analyze" component={Form} />
        </div>
      </Router>
    );
  }
}

export default App;
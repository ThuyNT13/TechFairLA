import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import Home from './components/Home';
import Navbar from './components/Navbar';
import Form from './components/Form';
import EmployeeView from './components/EmployeeView';

class App extends Component {
  render() {
    return (
      <Router className="App">
        <div>
          <Navbar title="CLmatch" />
          <div style={{padding: '2rem'}}>
            <Route exact path="/" component={Home} />
            <Route exact path="/analyze" component={Form} />
            <Route exact path="/employee-view" component={EmployeeView} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
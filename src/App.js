import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from '../src/views/Login/index'
import Dashboard from '../src/layouts/Dashboard/Dashboard'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Login} />
          <Route path="/Dashboard" component={Dashboard} />
        </div>
      </Router>
    );
  }
}

export default App;

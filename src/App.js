import React, { Component } from 'react';
import './App.css';
import Login from './Components/loginpage.js';
import Profile from './Components/profile.js';
import Home from './Components/home.js';
import { BrowserRouter as Router, Route } from "react-router-dom";


class App extends Component {
  render() {
    return (
      
      <Router>
        <div>
        <Route exact path="/" component={Home}/>
        <Route path="/Profile" component={Profile}/>
        <Route path="/loginpage" component=
        {Login}/>
        </div>
      </Router>  

    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="login-page">
        <div className="form">
          <img src={logo} alt="logo" />
          <input type="text" placeholder="username"/>
          <input type="password" placeholder="password"/>
          <button>login</button>
        </div>
      </div>
    );
  }
}

export default App;

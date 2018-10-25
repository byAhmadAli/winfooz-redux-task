import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';
import { userLogin } from  './actions/userAction';
import { request, requestSuccess, requestFailure } from './actions/requestAtion'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(){
    this.props.login(this.state)
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ 
      [name]: value 
    });
  }

  render() {
    const { username, password } = this.state;
    const { user, isLoading } = this.props;

    return (
      <div>
        {user ? (
          <div className="welcome-page">
            <h2>Hello,</h2>
            <h1>{user.username}</h1>
          </div>
        ) : (
          <div className="login-page">
            <div className="form">
              <img src={logo} alt="logo" />
              <input type="text" placeholder="username" name="username" value={username} onChange={this.handleChange} />
              <input type="password" placeholder="password" name="password" value={password} onChange={this.handleChange} />
              <button onClick={this.handleSubmit} disabled={isLoading}>
                {isLoading ? 'waiting ...' : 'login'}
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapPropsToState = state => ({
  user: state.user,
  isLoading: state.isLoading
});

const mapDispatchToProps = dispatch => ({
  login: (user) => {
    dispatch(request())
    setTimeout(() => {
      if(user.password && user.username){
        dispatch(userLogin(user));
        dispatch(requestSuccess())
      }else{
        dispatch(requestFailure())
      }
    }, 1000)
  }
})

export default connect(mapPropsToState, mapDispatchToProps)(App);

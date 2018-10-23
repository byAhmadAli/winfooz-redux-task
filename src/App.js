import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';
import { loginUser, userWait } from  './actions/userAction';

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
    this.props.wait();

    setTimeout(() => {
      this.props.login(this.state)
    }, 1000)
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
        {user.username ? (
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
    dispatch(loginUser(user))
  },
  wait: () => {
    dispatch(userWait())
  }
})

export default connect(mapPropsToState, mapDispatchToProps)(App);

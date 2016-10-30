import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import firebase, { reference, signIn, signOut } from '../firebase';
import SignIn from './signIn';
import SignOut from './signOut';
import Budget from './budget';


class App extends Component {
  constructor(){
    super();
    this.state = {
      user: null,
      budget: null
    };
  }

  componentDidMount() {
   firebase.auth().onAuthStateChanged(user => this.setState({ user }));
  }

  render(){
    return(
      <div>
        {this.state.user ?
        <p id="login-display">
          Logged in as <span className="user-name">{this.state.user.displayName}</span> ({this.state.user.email})
          <SignOut signOut={signOut} />
        </p>
        : <SignIn signIn={signIn} /> }
        <Budget />
      </div>
    )
  }
}

module.exports = App;

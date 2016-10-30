import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import firebase, { reference, signIn, signOut } from '../firebase';
import SignIn from './signIn';

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
          <button className='sign-out' onClick={() => signOut()}>
            SIGN OUT!!!!
          </button>
        </p>
        : <SignIn signIn={signIn} /> }
      </div>




    )
  }
}

module.exports = App;

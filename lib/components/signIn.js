import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import firebase, { reference, signIn, signOut } from '../firebase';

class SignIn extends Component {
  render(){
    return (
    <div>
      <h1>Title of app</h1>
      <h2>Welcome!</h2>
      <button className='sign-in' onClick={() => signIn()}>
        SIGN IN!!!!
      </button>
    </div>
    );
  }
}

module.exports = SignIn

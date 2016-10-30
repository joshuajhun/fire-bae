import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import firebase, { reference, signIn, signOut } from '../firebase';

class SignIn extends Component {
  render(){
    return (
      <button className='sign-in' onClick={() => signIn()}>
        SIGN IN!!!!
      </button>
    );
  }
}

module.exports = SignIn

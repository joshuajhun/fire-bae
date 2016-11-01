import React, { Component } from 'react';
import firebase, { reference } from '../firebase';
import SignOut from './signOut';


class HomePage extends Component {
  render(){
    return (
      <div>
        <h2 className='welcome-message'>Welcome {this.props.user.displayName}</h2>
        <p>Your Next Game is...</p>
        <p>You Have Won/Lost</p>
      </div>
    );
  }
}

module.exports = HomePage

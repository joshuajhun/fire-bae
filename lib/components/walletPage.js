import React, { Component } from 'react';
import firebase, { reference } from '../firebase';


class WalletPage extends Component {
  render(){
    return (
      <div>
        <h2>Wallet:{this.props.userBudget}</h2>
        <h3>In Play</h3>
        <h3>History</h3>
      </div>
    );
  }
}

module.exports = WalletPage

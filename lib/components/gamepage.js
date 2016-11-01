import React, { Component } from 'react';
import firebase, { reference } from '../firebase';
import {pick, map} from 'lodash';

class GamePage extends Component {
  constructor(){
    super();
    this.state = {
      wager: ''
    };
  }
  saveBet(user, userBudget, wager){
    reference.push({
      user:pick(user,'displayName', 'email','uid'),
      wallet :userBudget,
      wager: wager
    });
  }
  setWager(location){
    let userInput = parseInt(location.target.value);
    this.setState({wager: userInput});
  }
  render(){
    let userBudget = this.props.userBudget;
    let user = this.props.user;
    let wager = this.state.wager;
    return (
      <div>
        <h2>Today's Schedule</h2>
        <article>
        <h3>SPORT TEAM At SPORT TEAM</h3>
        <input id="wager"
        value={this.state.wager}
        placeholder="Enter your wager!"
        onChange={(event) => this.setWager(event)}
        type="number" />
        <button
          onClick={this.saveBet(user, userBudget, wager)}>Bet!</button>
        </article>

        <article>
        <h3>SPORT TEAM At SPORT TEAM</h3>
        <button>Bet!</button>
        </article>

        <article>
        <h3>SPORT TEAM At SPORT TEAM</h3>
        <button>Bet!</button>
        </article>
      </div>
    );
  }
}

module.exports = GamePage

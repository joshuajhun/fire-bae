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
      userBudget: ''
    };
  }
  saveBudget(){
    reference.push({ wallet : this.state.userBudget});
    this.setState({userBudget: ''});
  }
  setBudget(event){
    let budget = event.target.value;
    this.setState({userBudget: budget});
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
        <Budget setBudget={this.setBudget.bind(this)}
        userBudget={this.state.userBudget}
        saveBudget={this.saveBudget.bind(this)}/>
      </div>
    )
  }
}

module.exports = App;

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import firebase, { reference, signIn, signOut } from '../firebase';
import SignIn from './signIn';
import SignOut from './signOut';
import Budget from './budget';
import Header from './header'
import HomePage from './homepage'

class App extends Component {
  constructor(){
    super();
    this.state = {
      user: null,
      userBudget: '',
      onWalletPage: false,
      onGamePage: false
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
    if(this.state.user){
      return(
      <div>
      <Header />
      <SignOut signOut= {signOut} />
      <HomePage user= {this.state.user} />
        <Budget setBudget={this.setBudget.bind(this)}
        userBudget={this.state.userBudget}
        saveBudget={this.saveBudget.bind(this)}/>
      </div>
    )
  }
  return(
    <SignIn signIn={signIn} />
  )
}
}

module.exports = App;

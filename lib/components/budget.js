import React, { Component } from 'react';
import firebase, { reference } from '../firebase';

class Budget extends Component {
  constructor(){
    super();
    this.state = {
      userBudget : ''
    };
  }
  saveBudget(){
    reference.push({ wallet : this.state.userBudget});
  }

  render(){
    return(
        <div>
          <input
            className='budget-field'
            type='number'
            placeholder='Enter your budget'
            value={this.state.userBudget}
            onChange={(event) =>
              this.setState({userBudget: event.target.value})
            }
            />
          <button
            className='submit-budget'
            onClick={() => this.saveBudget()} >
            SUBMIT</button>
        </div>
    );
  }
}

module.exports = Budget;

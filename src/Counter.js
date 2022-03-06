import React, { Component } from 'react'



 export class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count : 0
        }
    }
    
    increment() {
        this.setState({

          count: this.state.count + 1
        }, () => {
          console.log(this.state.count)
        }
        )
         
    }

    incrementFive(){
      this.increment()
      this.increment()
    }
  render() {
    return (
      <div>
        <div>COUNT - {this.state.count}</div>
        <br/>
        <button onClick={() => this.incrementFive()}>increment</button>
      </div>
    )
  }
}


import React, { Component } from 'react'

// rce

export class EventBinders extends Component {
//    rconst
        constructor(props) {
            super(props)
        
            this.state = {
                 count : "Welcome"
            }
        }    
        addJust() {

            this.setState({
                count : 'goodbye'
            })
        }
// this is binding an event in react, there are three different ways
  render() {
    return (
      <div>
       <h1> {this.state.count}</h1>
        <button onClick={this.addJust.bind(this)}>hello</button>
      </div>
    )
  }
}




import React, { Component } from 'react'

export class Button extends Component {


  render() {
    const{
      variant,
      content,
      ...others
    } = this.props
    return (
      <div>
          <div>
          <button className={variant}> {content}</button>

          </div>
        
      </div>
    )
  }
}



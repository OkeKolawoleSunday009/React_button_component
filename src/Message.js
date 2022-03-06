import React, {Component} from "react";

export class Message extends Component{
    constructor(){
        super()
        this.state = {
            message: 'welcome home boy'
        }
    }

   changeMessage(){
        this.setState({
            message:'thank You for subcribing'
        })
    }
    render(){
        return(
            <div>


           <h1> 
                {this.state.message}
            </h1>
          
            <button onClick ={() => this.changeMessage()}>Subcribe</button>
            </div>
           
        )
    }
}

import React, {Component}  from "react";//you can do it like tis it will work, but dont forget the normal way.
//export class Welcome extends React.Component
// import { Component } from "react/cjs/react.production.min";
 
export class Welcome extends Component{
 render() {
     return <h1>I love You {this.came} {this.herName} </h1>
 }
}
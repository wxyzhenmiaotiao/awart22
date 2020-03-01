import React, { Component } from 'react'
import "./style.less"
export default class componentName extends Component {
  setchail=(v)=>{
    let url="/choose/"+v.id
    localStorage.setItem("fontsname",v.name)
    this.props.history.push(url)
  }
  render() {
    return (
      <p className="cartBox" onClick={()=>this.setchail(this.props.name)}>
         {
           this.props.name.name
         }
      </p>
    )
  }
}

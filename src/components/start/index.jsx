import React, { Component } from 'react'
import { Rate } from 'antd';

export default class componentName extends Component {
  render() {
    let sum=this.props.data
    let a=Math.floor(sum)
    let star=""
    let num=sum%a
    let ss=num.toFixed(1)
    if(ss>0.5)
    {
      star=Math.ceil(this.props.data)
    }
    if(ss<0.5)
    {
      star=Math.floor(this.props.data)
    }
    if(ss==0.5)
    {
      star=Math.floor(this.props.data)*1+0.5
    }
    return (
      <Rate allowHalf disabled defaultValue={star} />
    )
  }
}

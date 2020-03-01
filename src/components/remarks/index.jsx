import React, { Component } from 'react'
import { Icon } from "antd"
import "./style.less"
export default class componentName extends Component {
  state={
    textarea:""
  }
  textarea=(e)=>{
    this.setState({
      textarea:e.target.value
    })
  }
  queding=()=>{
    localStorage.setItem("remarksdata",this.state.textarea)
    this.props.history.push("/placing")
  }
  back=()=>{
    this.props.history.go(-1)
  }
  render() {
    return (
      <div className="remarksVBoxz">
        <div className="remarkstop">
          <div className="remarksleft" onClick={this.back}>
            <Icon type="left" />
          </div>
          <div className="remarkscenter">
            订单备注
              </div>
          <div className="remarksleft">

          </div>
        </div>
        <div className="remarksbody">
          <div className="beizhudiv">
            <p>备注</p>
            <textarea name="" id="" cols="30" rows="10" placeholder="请输入备注内容（可不填写）" onChange={this.textarea}></textarea>
            <div className="lasttextrt">
            <button onClick={this.queding}>确定</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

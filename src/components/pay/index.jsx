import React, { Component } from 'react'
import "./style.less"
import { Icon  } from "antd"
export default class componentName extends Component {
  state = {
    time1: "",
    time2: "",
    timestr: "00 : 15 : 00",
    timer: "",
    minute: "15",
    s: "00"
  }
  componentDidMount() {
    this.setState({
      timer: setInterval(() => this.countDown(), 1000)
    })
  }

  addZero = (i) => {
    return i < 10 ? "0" + i : i + "";
  }
  countDown = () => {
    // var nowtime = new Date("2020/02/26,00:39:00")
    // var endtime = new Date();
    // var lefttime = parseInt((endtime.getTime() - nowtime.getTime()) / 1000)
    // var d = parseInt(lefttime / (24 * 60 * 60))//天
    // var h = parseInt(lefttime / (60 * 60) % 24)//时
    // var m = parseInt(lefttime / 60 % 60)//分
    // var s = parseInt(lefttime % 60)//秒
    let a = this.state.minute
    let b = this.state.s
    if (Number(a) == 0 && Number(b) == 0) {
      clearInterval(this.state.timer)
      this.setState({
        minute: "00",
        s: "00"
      })
    } else {
      if (Number(b) == 0) {
        this.setState({
          minute: this.addZero(Number(a) - 1),
          s: "59"
        })
      } else {
        this.setState({
          s: this.addZero(Number(b) - 1),
        })
      }
    }

  }
  backg=()=>{
    this.props.history.go(-1)
  }
  ding=()=>{
    this.props.history.push("/home/pagethree")
  }
  render() {
    return (
      <div className="payBox">
        <div className="paytop">
          <div className="payleft" onClick={this.backg}>
            <Icon type="left" />
          </div>
          <div className="payname">
            在线支付
            </div>
          <div className="payleft">

          </div>
        </div>
        <div className="paybody">
          <div className="payone">
            <p className="zhifup1">支付剩余时间</p>
            <p className="zhifup2">00 : {this.state.minute} : {this.state.s}</p>
          </div>
          <div className="zhifubao">
            <p>选择支付方式</p>
            <div style={{ color: "#5595ff" }}>
              <Icon type="alipay-circle" />
              <p>支付宝</p>
              <input type="radio" name="1"/>
            </div>
            <div style={{ color: "rgb(69, 193, 68)" }}>
              <Icon type="wechat" />
              <p> 微信</p>
              <input type="radio" name="1"/>
            </div>
          </div>
          <div className="zhifubtn">
          <button className="" onClick={this.ding}>确认支付</button>
          </div>
        </div>
      </div>
    )
  }
}

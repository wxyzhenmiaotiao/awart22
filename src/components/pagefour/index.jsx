import React, { Component } from 'react'
import { Icon } from "antd"
import './styles.less'
import { connect } from 'react-redux'

export default @connect(state => {
  return {
    data: state.user.username,
  }
})
class extends Component {
  constructor(props) {
    super(props)
    console.log(this.props.data)
    this.state = {
      image: "../image/2.jpg"
    }
  }

  loginBtn = () => {
    if(localStorage.getItem('user_id')){
      this.props.history.push('/personal')
    }else{
      this.props.history.push('/login')
    }
  }

  downloadBtn = () => {
    this.props.history.push('/download')
  }

  service = () => {
    this.props.history.push('/service')
  }

  balance = () => {
    this.props.history.push('/balance')
  }

  menber = () => {
    this.props.history.push('/menber')
  }

  preferential = () => {
    this.props.history.push('/preferential')
  }
  
  integral = () => {
    this.props.history.push('/integral')
  }

  loginHou = () => {
    const { image } = this.state
    if (localStorage.getItem('user_id')) {
      return (
        <div onClick={this.loginBtn} className="four_body_2">
          <div className="four_body_2_img">
            <img src={image} alt="" />
          </div>
          <div className="four_body_2_left">
            <p className="p1">{this.props.data}</p>
            <p className="p2"><img src="../image/1.jpg" alt="" />暂无绑定手机号</p>
          </div>
          <div className="four_body_2_right">
            →
          </div>
        </div>
      )
    } else {
      return (
        <div onClick={this.loginBtn} className="four_body_2">
          <div className="four_body_2_img">
            <img src={image} alt="" />
          </div>
          <div className="four_body_2_left">
            <p className="p1">登录/注册</p>
            <p className="p2"><img src="../image/1.jpg" alt="" />暂无绑定手机号</p>
          </div>
          <div className="four_body_2_right">
            →
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="four_body">
        <div className="four_body_1">
          <div className="four_body_1_left">
            <Icon type="left" />
          </div>
          <div className="four_body_1_right">
            我的
          </div>
        </div>
        {this.loginHou()}
        <div className="four_body_3">
          <div className="four_body_3_1" onClick={this.balance}>
            <div className="four_body_3_1_p1">
              <p><span className="four_body_3_1_p1_yuan">0.00</span>元</p>
              <p>我的余额</p>
            </div>
          </div>
          <div onClick={() => this.preferential()} className="four_body_3_1">
            <div className="four_body_3_1_p1">
              <p><span className="four_body_3_1_p1_shu">3</span>个</p>
              <p>我的优惠</p>
            </div>
          </div>
          <div onClick={this.integral} className="four_body_3_1">
            <div className="four_body_3_1_p1">
              <p><span className="four_body_3_1_p1_fen">0</span>分</p>
              <p>我的积分</p>
            </div>
          </div>
        </div>
        <div className="four_body_4">
          <div className="four_body_4_p">
            <p className="four_body_4_p_left">我的订单</p>
            <p className="four_body_4_p_right">></p>
          </div>
          <div className="four_body_4_p">
            <p className="four_body_4_p_left">积分商城</p>
            <p className="four_body_4_p_right">></p>
          </div>
          <div className="four_body_4_p" onClick={this.menber}>
            <p className="four_body_4_p_left">饿了么会员卡</p>
            <p className="four_body_4_p_right">></p>
          </div>
        </div>
        <div className="four_body_5">
          <div onClick={this.service} className className="four_body_4_p">
            <p className="four_body_4_p_left">服务中心</p>
            <p className="four_body_4_p_right">></p>
          </div>
          <div onClick={this.downloadBtn} className="four_body_4_p">
            <p className="four_body_4_p_left">下载了饿了么APP</p>
            <p className="four_body_4_p_right">></p>
          </div>
        </div>
      </div>
    )
  }
}

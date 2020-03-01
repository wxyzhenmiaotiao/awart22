import React, { Component } from 'react'
import './styles.less'
import { connect } from 'react-redux'

export default @connect(state => {
  return {
    data: state.user.username,
  }
})
class extends Component {
  login = () => {
    console.log(this.props.data)
    if(localStorage.getItem('user_id')){
      return this.props.data
    }else{
      return ''
    }
  }

  fan = () => {
    this.props.history.go(-1)
  }

  meming = () => {
    this.props.history.push('/meming')
  }

  btn = () => {
    this.props.history.push('/buy')
  }

  exchange = () => {
    this.props.history.push('/exchange')
  }

  render() {
    return (
      <div className="menber_box">
        <div className="menber_head">
          <div className="menber_head_1">
            <span onClick={this.fan}>{'<'}</span>
          </div>
          <div className="menber_head_2">
            会员中心
          </div>
        </div>
        <div className="menber_body">
          <div className="menber_body_1">
            为账户<span>{this.login()}</span>购买会员
          </div>
          <div className="menber_body_2">
            <div onClick={this.meming} className="menber_body_2_1">
              <p className="menber_body_2_1_left">会员特权</p>
              <p className="menber_body_2_1_right">会员说明 ></p>
            </div>
            <div className="menber_body_2_2">
              <div className="menber_body_2_2_left">
                <img src="image/10.jpg" alt=""/>
              </div>
              <div className="menber_body_2_2_right">
                <p className="menber_body_2_2_right_top">
                  减免配送费
                </p>
                <p className="menber_body_2_2_right_button">
                  每月减免30单,每日可减3单,每单4元蜂鸟转送专享
                </p>
              </div>
            </div>
            <div className="menber_body_2_2">
              <div className="menber_body_2_2_left">
                <img src="image/11.jpg" alt=""/>
              </div>
              <div className="menber_body_2_2_right">
                <p className="menber_body_2_2_right_top">
                  减免配送费
                </p>
                <p className="menber_body_2_2_right_button">
                  每月减免30单,每日可减3单,每单4元蜂鸟转送专享
                </p>
              </div>
            </div>
          </div>
          <div className="menber_body_3">
            <div className="menber_body_3_head">
              开通会员
            </div>
            <div className="menber_body_3_bottom">
              <p className="menber_body_3_bottom_left">1个月<span>￥20</span></p>
              <p className="menber_body_3_bottom_right"><button onClick={this.btn}>购买</button></p>
            </div>
          </div>
          <div onClick={() => this.exchange()} className="menber_body_4">
            <div className="menber_body_4_left">
              兑换会员
            </div>
            <div className="menber_body_4_right">
              使用卡号卡密 >
            </div>
          </div>
          <div className="menber_body_4">
            <div className="menber_body_4_left">
              购买记录
            </div>
            <div className="menber_body_4_right">
              开发票 >
            </div>
          </div>
        </div>
      </div>
    )
  }
}

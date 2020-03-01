import React, { Component } from 'react'
import './styles.less'

export default class extends Component {
  fan = () => {
    this.props.history.go(-1)
  }
  render() {
    return (
      <div className="buy_box">
        <div className="buy_box_head"> 
          <div className="buy_box_head_1">
            <span onClick={this.fan}>{'<'}</span>
          </div>
          <div className="buy_box_head_2">
            在线支付
          </div>
        </div>
        <div className="buy_box_body"> 
          <div className="buy_box_body_1">

          </div>
          <div className="buy_box_body_2">
            选择支付方式
          </div>
          <div className="buy_box_body_3">
            <div className="buy_box_body_3_1">
              <img src="image/12.jpg" alt=""/>
              支付宝
            </div>
            <div className="buy_box_body_3_2">

            </div>
          </div>
          <div className="buy_box_body_4">
            <div className="buy_box_body_4_1">
              <img src="image/13.jpg" alt=""/>
              微信
            </div>
            <div className="buy_box_body_4_2">
              
            </div>
          </div>
          <div className="buy_box_body_5">
            <button>确认支付</button>
          </div>
        </div>
      </div>
    )
  }
}


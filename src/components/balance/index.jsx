import React, { Component } from 'react'
import './styles.less'

export default class extends Component {
  render() {
    return (
      <div className="balance_box">
        <div className="balance_box_head">

          <div className="balance_box_head_1"> 
            <div className="balance_box_head_left">
              <span>{'<'}</span>
            </div>
            <div className="balance_box_head_right">
              我的余额
            </div>
          </div>

          <div className="balance_box_head_2">
            <div className="balance_box_head_2_box">
              <div className="balance_box_head_2_box_1">
                <p className="dang">当前余额</p>
                <p className="ming">余额说明</p>
              </div>
              <div className="balance_box_head_2_box_2">
                <span className="balance_box_head_2_box_2_1">0.00</span>
                <span className="balance_box_head_2_box_2_2">元</span>
              </div>
              <div className="balance_box_head_2_box_3">
                <button>提现</button>
              </div>
            </div>
          </div>

        </div>
        
        <div className="balance_box_body">
          <div className="balance_box_body_head">
            交易明细
          </div>
          <div className="balance_box_body_body">
            <img src="image/7.jpg" alt=""/>
          </div>
        </div>
      </div>
    )
  }
}

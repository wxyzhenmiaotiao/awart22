import React, { Component } from 'react'
import './styles.less'

export default class extends Component {

  btn = () => {
    this.props.history.go(-1)
  }

  render() {
    return (
      <div className="integral_box">
        <div className="integral_box_head">
          <div className="integral_box_head_left">
            <span onClick={this.btn}>{'<'}</span>
          </div>
          <div className="integral_box_head_right">
            我的积分
          </div>
        </div>
        <div className="integral_box_body">
          <div className="integral_box_body_1">
            <div className="integral_box_body_1_1">
              <div className="integral_box_body_1_1_top">
                <p className="integral_box_body_1_1_top_left">当前积分</p>
                <p className="integral_box_body_1_1_top_right">积分说明</p>
              </div>
              <div className="integral_box_body_1_1_body">
                <p><span>0</span>分</p>
              </div>
              <div className="integral_box_body_1_1_bootom">
                <button>积分兑换商品</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

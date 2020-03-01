import React, { Component } from 'react'
import { Icon } from "antd"
import './styles.less'

export default class extends Component {
  render() {
    return (
      <div className="three_body">
        <div className="three_body_head">
          <div className="three_body_head_left">
            <Icon type="left" />
          </div>
          <div className="three_body_head_right">
            我的订单
          </div>
        </div>
        <div className="three_body_body">

        </div>
      </div>
    )
  }
}

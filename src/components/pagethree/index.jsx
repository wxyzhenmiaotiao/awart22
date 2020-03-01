import React, { Component } from 'react'
import './styles.less'

export default class extends Component {
  fan = () => {
    this.props.history.go(-1)
  }

  render() {
    return (
      <div className="three_body">
        <div className="three_body_head">
          <div className="three_body_head_left">
            <span onClick={this.fan}>{'<'}</span>
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

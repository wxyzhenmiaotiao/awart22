import React, { Component } from 'react'
import './styles.less'
import { Form, Icon, Input, Button, Checkbox } from 'antd';

export default class extends Component {

  modify = () => {
    
  }

  fan = () => {
    this.props.history.push('/Personal')
  }

  render() {
    return (
      <div className="modify_box">
        <div className="modify_box_head">
          <div className="modify_box_head_left">
            <span onClick={this.fan}>{'<'}</span>
          </div>
          <div className="modify_box_head_right">
            修改用户名
          </div>
        </div>
        <div className="modify_box_body">
          <div className="modify_box_body_input">
            <input type="text"/>
            <p>请输入5-16位</p>
            <button onClick={this.modify}>修改</button>
          </div>
        </div>
      </div>
    )
  }
}

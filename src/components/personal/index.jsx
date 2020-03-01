import React, { Component } from 'react'
import './styles.less'
import { connect } from 'react-redux'

export default @connect(state => {
  return {
    data: state.user.username,
  }
})
class extends Component {
  
  address = () => {//收货地址
    this.props.history.push('/createGoods')
  }

  yong = () => {
    this.props.history.push('/modify')
  }
  mobile = () => {
    
  }

  render() {
    return (
      <div className="personal_box">
        <div className="personal_box_head">
          <div className="personal_box_head_left">
            <span>{'<'}</span>
          </div>
          <div className="personal_box_head_right">
            账户信息
          </div>
        </div>
        <div className="personal_box_body">
          <div className="loginImg">
            <p className="loginImg_left">头像</p>
            <p className="loginImg_right"><img src="image/8.jpg" alt=""/></p>
          </div>
          <div onClick={this.yong} className="loginName">
            <div className="loginName_left">
              用户名
            </div>
            <div className="loginName_right2">
              {this.props.data.username}
            </div>
          </div>
          <div onClick={this.address} className="loginName">
            <div className="loginName_left">
              收货地址
            </div>
            <div className="loginName_right">
              >
            </div>
          </div>
          <div className="pang">
            账号绑定
          </div>
          <div className="loginName">
            <div onClick={this.mobile} className="loginName_left">
              <img src="image/9.jpg" alt=""/>手机
            </div>
            <div className="loginName_right">
              >
            </div>
          </div>
          <div className="pang">
            安全设置
          </div>
          <div className="loginName">
            <div className="loginName_left">
              登录密码
            </div>
            <div className="loginName_right1">
              修改 >
            </div>
          </div>
          <button>退出登录</button>
        </div>
      </div>
    )
  }
}

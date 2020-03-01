import React, { Component } from 'react'
import './styles.less'

export default class extends Component {
  fan = () => {
    this.props.history.go(-1)
  }
  render() {
    return (
      <div className="meming_box">
        <div className="meming_box_head">
          <div className="meming_box_head_left">
            <span onClick={this.fan}>{'<'}</span>
          </div>
          <div className="meming_box_head_right">
            会员说明
          </div>
        </div>
        <div className="meming_box_body">
            <div className="meming_box_body_1">
                <p>尊敬的用户，随着会员体系逐渐完善，自2016年10月10日起，饿了么会员权益将做如下优化：
              购卡后31天内，累积享有30单减免配送费服务（每日最多3单，每单最高减免4元）。
              注：已购买的会员服务不受影响，当前会员服务失效前无法购买新卡。</p>
            </div>
            <div className="meming_box_body_2">
              <p className="meming_box_body_2_top">Q1:特权介绍</p>
              <p className="meming_box_body_2_button">
                身份标识：饿了么会员服务有效期内，享有专属皇冠标识。<p></p>
                减免配送费： 饿了么会员卡自绑定账户之日起31天内，在「蜂鸟专送」标识商家下单，享有30次减免配送费特权，每日最多减免3单，每单最高可减4元。
              </p>
            </div>
            <div className="meming_box_body_2">
              <p className="meming_box_body_2_top">Q2:资费介绍</p>
              <p className="meming_box_body_2_button">
                饿了么会员卡：20元
              </p>
            </div>
            <div className="meming_box_body_2">
              <p className="meming_box_body_2_top">Q3:使用说明</p>
              <p className="meming_box_body_2_button">
                当用户满足以下任一条件，会员服务自动失效：<p></p>
                只绑定之日超过31天；在31天累计使用减免送费的蜂鸟订单数量达到30单
              </p>
            </div>
            <div className="meming_box_body_2">
              <p className="meming_box_body_2_top">Q4:购卡说明</p>
              <p className="meming_box_body_2_button">
                在线购买：饿了么App>我的>饿了么会员卡
              </p>
            </div>
            <div className="meming_box_body_2">
              <p className="meming_box_body_2_top">Q5:温馨提示</p>
              <p className="meming_box_body_2_button">
              用户在当前会员服务失效前，无法购买新卡。<p></p>
              请认准饿了么官方渠道，任何从其他第三方途径获得的会员卡，饿了么不保证其可用性。
              </p>
            </div>
        </div>
      </div>
    )
  }
}

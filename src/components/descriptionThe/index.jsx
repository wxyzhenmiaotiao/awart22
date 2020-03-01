import React, { Component } from 'react'
import './styles.less'

export default class extends Component {

  btn = () => {
    this.props.history.go(-1)
  }
  render() {
    return (
      <div className="descriptionThe_box"> 
        <div className="descriptionThe_box_head">
          <div className="descriptionThe_box_head_left">
            <span onClick={this.btn}>{'<'}</span>
          </div>
          <div className="descriptionThe_box_head_right">
            红包说明
          </div>
        </div>
        <div className="descriptionThe_box_body">
          <p className="p1">Q1:怎么获得红包</p>
          <ul>
            <li>通过邀请好友获得</li>
            <li>在下单返红包的商家下单获得</li>
            <li>抢微信朋友分享的红包获得</li>
          </ul>
          <p className="p1">Q2: 红包可以做什么？</p>
          <ul>
            <li>可以抵扣在线支付时的实际支付金额。</li>
          </ul>
          <p className="p1">Q3: 红包的门槛金额按照什么金额计算？</p>
          <ul>
            <li>红包的的门槛金额按照（选购菜品折后价＋餐盒费）的金额作为计算门槛，即购物车显示的金额（7.3以上版本）。假设红包满30可用，只要选购的菜品现价（折后价）＋餐盒费超过30，就可以使用红包。</li>
          </ul>
          <p className="p1">Q4: 一个红包能拆开多次使用吗？</p>
          <ul>
            <li>不能，一个红包只能一次性使用，不能分开使用。</li>
          </ul>
          <p className="p1">Q5: 下单的时候使用了红包，但是后来订单取消了，红包还会返还吗？</p>
          <ul>
            <li>会的，订单无效后红包会自动返还到您的账户里。</li>
          </ul>
          <p className="p1">Q6: 红包兑换码怎样兑换成红包，怎样查看红包？</p>
          <ul>
            <li>在个人中心 > 我的红包 > 兑换红包，输入兑换码进行兑换。</li>
          </ul>
          <p className="p1">Q7: 邀请好友了，为什么没获得红包？</p>
          <ul>
            <li>先检查下您是否在同一设备上进行的邀请？或者被邀请人是否通过您发给对方的链接进行注册？而非自己复制链接注册的。同一设备上邀请或没有按照点击发送的链接邀请都是无效邀请。如果您是正常邀请没获得红包，可以致电客服进行查实。</li>
          </ul>
        </div>
      </div>
    )
  }
}

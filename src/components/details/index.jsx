import React, { Component } from 'react'
import { Icon } from "antd"
import { xiangxi } from "@/api/actions"
import "./style.less"
export default class componentName extends Component {
  state = {
    data: []
  }
  componentDidMount() {
    let id = localStorage.getItem("shopid")
    xiangxi(id).then(res => {
      this.setState({
        data: res.data
      })
    })
  }
  backg = () => {
    this.props.history.go(-1)
  }
  render() {
    const data = this.state.data
    return (
      <div className="detailsBox">
        <div className="detailsHeader">
          <div className="flexcoushu" onClick={this.backg}>
            <Icon type="left" />
          </div>
          <div className="detailsHeaderone">
            商家详情
          </div>
          <div className="flexcoushu">

          </div>
        </div>
        <div className="detailsFlex">
          <div className="huoBoxone">
            <div className="huodong">
              活动与属性
          </div>
            {
              data.length != 0 ? data.activities.map((v, i) => {
                return <p className="yangzi" key={i}><span className="neispanone" style={{ background: "#" + v.icon_color }}>{v.icon_name} </span><span>{v.description}(APP专享)</span> </p>
              }) : null
            }
            {
              data.length != 0 ? data.supports.map((v, i) => {
                return <p className="yangzi" key={i}><span className="neispanone" style={{ background: "#" + v.icon_color }}>{v.icon_name} </span><span>{v.description}(APP专享)</span> </p>
              }) : null
            }
          </div>
          <div className="huoBoxone">
            <div className="huodongo">
              <span> 食品监督安全公示</span>
              <span className="qiye">

                企业认证详情<Icon type="right" />
              </span>
            </div>
          </div>
          <div className="huoBoxone">
            <div className="huodong">
              商家信息
          </div>
            <div className="huodong1">
              {data.name}
            </div>
            <div className="huodong1">
              地址：{data.address}
            </div>
            <div className="huodong1">
              营业时间：[{data.opening_hours}]
          </div>
            <div className="huodong1">
              营业执照
          </div>
            <div className="huodong1">
              餐饮服务许可证
          </div>
          </div>
        </div>
      </div>
    )
  }
}

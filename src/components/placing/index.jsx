import React, { Component } from 'react'
import { Icon } from "antd"
import { address , xiadan , dingdan } from "@/api/actions"
import "./style.less"
export default class componentName extends Component {
  state = {
    data: "",
    userdata: "",
    zhifudis: "none",
    remarks: "口味偏好等"
  }
  componentDidMount() {
    let data = JSON.parse(localStorage.getItem("placingdata"))
    let remarks = localStorage.getItem("remarksdata")
    if (remarks == null) {
      this.setState({
        remarks: "口味偏好等"
      })
    } else {
      if (remarks == "") {
        this.setState({
          remarks: "口味偏好等"
        })
      } else {
        this.setState({
          remarks: remarks
        })
      }
    }
    let useraddress = JSON.parse(localStorage.getItem("usersaddress"))
    if (useraddress == null) {
      if (localStorage.getItem("user_id") == null) {
        this.props.history.push("/login")
      } else {

        let id = localStorage.getItem("user_id")
        address(id).then(res => {
          this.setState({
            userdata: res.data[0]
          })
        })
      }
    } else {
      this.setState({
        userdata: useraddress
      })
    }
    this.setState({
      data: data
    })
  }
  wode = () => {
    this.props.history.push("/home/pagefour")
  }
  jump = () => {
    this.props.history.push("/placingaddress")
  }
  clikzhifu = () => {
    this.setState({
      zhifudis: ""
    })
  }
  dis = () => {
    this.setState({
      zhifudis: "none"
    })
  }
  remarks = () => {
    this.props.history.push("/remarks")
  }
  xiadan=()=>{
    let userid=localStorage.getItem("user_id")
    let cartid=this.state.data.id
    let addressid=this.state.userdata.id
    let canguanid=JSON.parse(localStorage.getItem("data")).one.id
    let jingwei=localStorage.getItem("childone")
    jingwei=jingwei.split("&")
    let str=[]
    jingwei.filter(v=>{
      str.push(v.split("=")[1])
    })
    str=str.join(",")
    let description=localStorage.getItem("remarksdata")
    let data=this.state.data.cart.groups
    let obj={
      address_id:addressid,
      restaurant_id:canguanid,
      geohash:str,
      description:description,
      entities:data
    }
    xiadan(userid,cartid,obj).then(res=>{
      let cartdate=JSON.parse(localStorage.getItem("shopcart"))
      cartdate.filter(v=>{
        if(v.shopid==canguanid)
        {
          v.shopcartlist=[]
        }
      })
      localStorage.setItem("shopcart",JSON.stringify(cartdate))
      this.props.history.push("/pay")
    })
  }
  back=()=>{
    this.props.history.push("/Product")
  }
  render() {
    const { data, userdata } = this.state
    return (
      <div className="placing">
        <div className="zhifuBox" style={{ display: this.state.zhifudis }}>
          <div className="zhifutop" onClick={this.dis}>

          </div>
          <div className="zhifubody">
            <div className="zhifuheader">
              支付方式
                </div>
            <div className="moneyBBox">
              <p>货到付款（商家不支持货到付款）</p>
              <Icon type="check-circle" />
            </div>
            <div className="moneyBBox">
              <p style={{ color: "black" }}>在线支付</p>
              <Icon type="check-circle" style={{ color: "#4cd964" }} />
            </div>
          </div>
        </div>
        <div className="placingtop">
          <p onClick={this.back}><Icon type="left" /></p>
          <div>确认订单</div>
          <p onClick={this.wode}><Icon type="user" /></p>
        </div>
        <div className="placingBody">
          {
            userdata != "" ? <div className="addressUserbox" onClick={this.jump}>
              <div className="addressUserleft">
                <p>
                  <span className="nameoneUserdaa">
                    {
                      userdata.name
                    }
                  </span>
                  <span className="phonenumverdiv" style={{ marginRight: "0.1rem" }}>先生</span>
                  <span className="phonenumverdiv">
                    {
                      userdata.phone
                    }
                  </span>
                </p>
                <p style={{ color: "#777 !important" }}>
                  <span style={{ marginRight: "0.1rem" }}>
                    {
                      userdata.tag
                    }
                  </span>
                  {
                    userdata.address
                  }
                </p>
              </div>
              <div className="addressUserright">
                >
            </div>
            </div> : null
          }
          {
            data != "" ? <div className="timehuo">
              <div className="timehuoleft">
                送达时间
              </div>
              <div className="timehuoright">
                <p className="timehuorightp1">尽快送达 | 预计 {data.delivery_reach_time}</p>
                <p className="timehuorightp2">
                  <span>
                    蜂鸟专送
                  </span>
                </p>
              </div>
            </div> : null
          }
          <div className="moneyF">
            <div>
              <p style={{ color: "black" }}>支付方式</p>
              <p onClick={this.clikzhifu}>在线支付 ></p>
            </div>
            <div>
              <p>红包</p>
              <p>暂时只在饿了么APP中支持</p>
            </div>
          </div>
          {
            data != "" ? <div className="shuliangBox">
              <div className="shuliangBoxtop">
                <img src={"//elm.cangdu.org/img/" + `${data.cart.restaurant_info.image_path}`} alt="" />
                <span>{data.cart.restaurant_info.name}</span>
              </div>
              {
                data.cart.groups[0].map((v, i) => {
                  return <div key={i} className="foodshliangjiage">
                    <div className="foodshliangjiage1">
                      <p>
                        {v.name}
                      </p>
                      <span>×{v.quantity}</span>
                    </div>
                    <div className="foodshliangjiage2">
                      ¥{v.price}
                    </div>
                  </div>
                })
              }
              {
                data.cart.extra.map((v, i) => {
                  return <div key={i} className="foodshliangjiage">
                    <div className="foodshliangjiage1">
                      <p>
                        {v.name}
                      </p>
                      <span></span>
                    </div>
                    <div className="foodshliangjiage2">
                      ¥{v.price}
                    </div>
                  </div>
                })
              }
              <div className="foodshliangjiage">
                <div className="foodshliangjiage1">
                  <p>
                    配送费
                    </p>
                  <span></span>
                </div>
                <div className="foodshliangjiage2">
                  ¥{data.cart.deliver_amount}
                </div>
              </div>
              <div className="zongmoney">
                <p>
                  订单 ¥
                  {data.cart.original_total}
                </p>
                <span>
                  待支付 ¥
                  {data.cart.original_total}
                </span>
              </div>
            </div> : null
          }
          <div className="dingdanxuanze">
            <div className="onedivTop">
              <p>订单备注</p>
              <div onClick={this.remarks}>
                <p>{this.state.remarks} ></p>
              </div>
            </div>
            <div className="twodivBottom">
              <p>发票抬头</p>
              <span>不需要开发票 ></span>
            </div>
          </div>
        </div>
        <div className="bottomuubox">
          <div className="bottomuuboxleft">
              {
                data!=""?<p>待支付¥
                {data.cart.original_total}</p>:null
              }
          </div>
          <div className="bottomuuboxright" onClick={this.xiadan}>
            确认下单
          </div>
        </div>
      </div>
    )
  }
}

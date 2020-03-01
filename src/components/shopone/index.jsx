import React, { Component } from 'react'
import { Icon } from "antd"
import Start from "@/components/start"
import "./style.less"
export default class componentName extends Component {
  state = {
    pir: "0.00",
    shopone: "",
    xuanze: "xuanzecang",
    shoponeclass: [],
    skuid: "",
  }
  back = () => {
    this.props.history.go(-1)
  }
  suan = (id) => {
    if (localStorage.getItem("shopcart")) {
      let data = JSON.parse(localStorage.getItem("shopcart"))
      let sum = 0
      data.filter(v => {
        if (v.shopid == id) {
          v.shopcartlist.filter(k => {
            sum += k.shuliang * 20
          })
        }
      })
      this.setState({
        pir: sum
      })
    }

  }
  componentDidMount() {
    let a = JSON.parse(localStorage.getItem("data"))
    let id = a.one.id
    this.suan(id)
  }
  add = (v) => {
    let a = JSON.parse(localStorage.getItem("data"))
    let nameone = v
    let shopid = a.one.id
    if (localStorage.getItem("shopcart")) {
      let data = JSON.parse(localStorage.getItem("shopcart"))
      let sum = 0
      data.filter(v => {
        if (v.shopid == shopid) {

        } else {
          sum++
        }
      })
      if (sum == data.length) {
        let data1 = JSON.parse(localStorage.getItem("shopcart"))
        let arr = []
        v.shuliang = 1
        arr.push(v)
        let a = {
          shopid: shopid,
          shopcartlist: arr
        }
        data1.push(a)
        localStorage.setItem("shopcart", JSON.stringify(data1))
      } else {
        data.filter(v => {
          if (v.shopid == shopid) {
            let data1 = v.shopcartlist
            let sum = 0
            data1.filter(k => {
              if (k.name == nameone.name) {
                if (k.specfoods[0].specs_name == nameone.specfoods[0].specs_name) {
                  k.shuliang = k.shuliang + 1
                  localStorage.setItem("shopcart", JSON.stringify(data))
                }else{
                  sum++
                }
              } else {
                sum++
              }
            })
            if (sum == data1.length) {
              nameone.shuliang = 1
              v = v.shopcartlist.push(nameone)
              localStorage.setItem("shopcart", JSON.stringify(data))
            }
          }
        })
      }
    } else {
      let arr = []
      v.shuliang = 1
      arr.push(v)
      let ar = [{
        shopid: shopid,
        shopcartlist: arr
      }]
      localStorage.setItem("shopcart", JSON.stringify(ar))
    }
    this.componentDidMount()
    this.suan(shopid)
  }
  disxuan = (v) => {
    let sum = v.specfoods.length
    let arr = []
    for (let i = 0; i < sum; i++) {
      arr.push("")
    }
    arr[0] = "kongpp"
    this.setState({
      xuanze: "xuanze",
      shopone: v,
      skuid: v.specfoods[0].sku_id,
      shoponeclass: arr
    })
  }
  none = () => {
    this.setState({
      xuanze: "xuanzecang"
    })
  }
  xuanzhongle = (i, id) => {
    let arr = this.state.shoponeclass
    for (let i = 0; i < arr.length; i++) {
      arr[i] = ""
    }
    arr[i] = "kongpp"
    this.setState({
      shoponeclass: arr,
      skuid: id
    })
  }
  jiaru = () => {
    let id = this.state.skuid
    let a = JSON.parse(JSON.stringify(this.state.shopone))
    a.specfoods.filter((v, i) => {
      if (v.sku_id != id) {
        a.specfoods.splice(i, 1)
      }
    })
    this.add(a)
    this.none()
  }
  render() {
    const data = JSON.parse(localStorage.getItem("shopone"))
    const shopone=this.state.shopone
    return (
      <div className="shoponeBox">
        <div className={this.state.xuanze} >
          <div className="xuanze1">
            <div className="xuzntop">
              {
                shopone.name
              }
              <div className="chaPOistion" onClick={this.none}>
                ×
                </div>
            </div>

            {
              shopone == "" ? null : <div className="xin">
                <span>规格</span>
                <div>
                  {
                    shopone.specfoods.map((v, i) => {
                      return <p key={i} className={this.state.shoponeclass[i]} onClick={() => this.xuanzhongle(i, v.sku_id)}>{v.specs_name}</p>
                    })
                  }
                </div>
              </div>

            }
            <div className="xuanzeFoot">
              <p>
                ¥20
                </p>
              <div>
                <button onClick={this.jiaru}>加入购物车</button>
              </div>
            </div>
          </div>
        </div>
        <div className="shoponeHeader">
          <div className="shoponedivvv" onClick={this.back}>
            <Icon type="left" />
          </div>
          <div className="shoponeFlexbxo">
            {
              data.name
            }
          </div>
          <div className="shoponedivvv">
          </div>
        </div>
        <div className="shopooneBody">
          <div className="shoponeing">
            <img src={"//elm.cangdu.org/img/" + data.image_path} alt="" />
          </div>
          <div className="shopOnefont">
            {data.name}
          </div>
          <div className="shopOnefont">
            <span style={{ marginRight: "0.1rem" }}>评分</span>
            <Start data={data.rating} />
            <span style={{ color: "#ff9a0d", marginLeft: "0.18rem" }}>
              {
                data.rating
              }
            </span>
          </div>
          <div className="shopOnefont">
            月售{data.month_sales}单 <span style={{ color: "#ff9a0d", marginLeft: "0.18rem" }}>售价¥20起</span>
          </div>
          <div className="shopOnefont">
            {
              data.tips
            }
          </div>
          <div className="shopOnefont">
            添加：
              {
              data.specifications.length != 0 ? <span className="guigee" onClick={() => this.disxuan(data)}>规格</span> : <Icon
                onClick={() => this.add(data)} type="plus-circle" style={{ fontSize: "0.3rem" }} />
            }
          </div>
        </div>
        <div className="lastMoney">
          <div className="lastMoneyflex">
            <Icon type="shopping-cart" className="endIcon" />
            <div className="lastMoneyflexbbbiox">
              <p>
                ¥ <span>{this.state.pir}</span>
              </p>
              <p>配送费¥5</p>
            </div>
          </div>
          {
            this.state.pir >= 20 ? <div className="lastMoneyjiesuan">
              去结算
                </div> : <div className="qisong">
                还差20起送
          </div>
          }

        </div>
      </div>
    )
  }
}

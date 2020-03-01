import React, { Component } from 'react'
import { Icon } from "antd"
import { addshop } from "@/api/actions"
import "./style.less"
export default class componentName extends Component {
  state = {
    data: [],
    classname: [],
    id: "",
    shopcart: [],
    dis: "none",
    pir: "0.00",
    shopone: "",
    xuanze: "xuanzecang",
    shoponeclass: [],
    skuid: "",
    cartone: ""
  }
  jumpdanzi = () => {
    let data = this.state.shopcart[0].shopcartlist
    let arr = []
    data.filter(v => {
      let a = {}
      a.id = v.specfoods[0].food_id
      a.name = v.specfoods[0].name
      a.packing_fee = v.specfoods[0].packing_fee
      a.price = "20"
      a.quantity = v.shuliang
      a.sku_id = v.specfoods[0].sku_id
      a.specs = v.specfoods[0].specs
      a.stock = v.specfoods[0].stock
      a.attrs = []
      a.extra = {}
      arr.push(a)
    })
    let b = {}
    let geohash = localStorage.getItem("childone")
    let garr = geohash.split("&")
    let str = []
    garr.filter(v => {
      str.push(v.split("=")[1])
    })
    str = str.join(",")
    let id = this.state.id
    let arrr = []
    arrr.push(arr)
    b.geohash = str
    b.entities = arrr
    b.restaurant_id = id
    addshop(b).then(res => {
      localStorage.setItem("placingdata",JSON.stringify(res.data))
      this.props.history.push("/placing")
    })
  }
  componentDidMount() {
    let a = JSON.parse(localStorage.getItem("data"))
    let id = a.one.id
    if (localStorage.getItem("shopcart")) {
      let data = JSON.parse(localStorage.getItem("shopcart"))
      let arr = []
      data.filter(v => {
        if (v.shopid == id) {
          arr.push(v)
        }
      })
      if (arr[0]) {
        if (arr[0].shopcartlist.length == 0) {
          this.setState({
            shopcart: arr,
            dis: "none"
          })
        } else {
          this.setState({
            shopcart: arr
          })
        }
      } else {
        this.setState({
          shopcart: arr
        })
      }
    }
    this.setState({
      data: a.two,
      id: a.one.id
    })
    this.suan(id)
  }
  top = (v) => {
    let a = document.querySelectorAll(".meiHeaderleft")
    let b = document.querySelector(".foodright")
    for (let i = 0; i < a.length; i++) {
      if (v == a[i].innerHTML) {
        b.scrollTop = a[i].offsetTop
      }
    }
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
                } else {
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
  jumpXing = (v) => {
    this.props.history.push("/Shopone")
    localStorage.setItem("shopone", JSON.stringify(v))
  }
  dis = () => {
    let dis = this.state.dis
    if (dis == "none") {
      this.setState({
        dis: ""
      })
    } else {
      this.setState({
        dis: "none"
      })
    }
  }
  del = (shop) => {
    if (shop[0]) {
      let data = JSON.parse(localStorage.getItem("shopcart"))
      let arr = []
      let id = shop[0].shopid
      data.filter(v => {
        if (v.shopid != id) {
          arr.push(v)
        }
      })
      localStorage.setItem("shopcart", JSON.stringify(arr))
      this.componentDidMount()
      this.dis()
      this.suan(id)
    } else {
      this.dis()
    }
  }
  addmoney = (name, id, names) => {
    let data = JSON.parse(localStorage.getItem("shopcart"))
    data.filter(v => {
      if (v.shopid == id) {
        v.shopcartlist.filter(k => {
          if (k.name == name) {
            if (k.specfoods[0].specs_name == names) {
              k.shuliang = k.shuliang + 1
            }
          }
        })
      }
    })
    localStorage.setItem("shopcart", JSON.stringify(data))
    this.componentDidMount()
    this.suan(id)
  }
  seldel = (name, id, names) => {
    let data = JSON.parse(localStorage.getItem("shopcart"))
    data.filter(v => {
      if (v.shopid == id) {
        v.shopcartlist.filter((k, i) => {
          if (k.name == name) {
            if (k.specfoods[0].specs_name == names) {
              let sum = k.shuliang
              if (sum - 1 == 0) {
                v.shopcartlist.splice(i, 1)
              } else {
                k.shuliang = sum - 1
              }
            }

          }
        })
      }
    })
    localStorage.setItem("shopcart", JSON.stringify(data))
    this.componentDidMount()
    this.suan(id)
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
    const { data, shopcart, shopone } = this.state
    return (
      <div className="bxoaaaa">
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
        <div className="shangTop">
          <div className="fixedzhezhao" style={{ display: `${this.state.dis}` }}>
            <div className="fiexedFlex" onClick={this.dis}>
            </div>
            <div className="listcart" >
              <p>
                <span className="cartspan1">购物车</span>
                <span className="cartspan2" onClick={() => this.del(shopcart)}>清空</span>
              </p>
              {
                shopcart.length != 0 ? shopcart[0].shopcartlist.map((v, i) => {
                  return <div className="shopcartRow" key={i}>
                    <div className="namep"> {
                      v.name

                    }
                      <br />
                      <span style={{ fontSize: "0.2rem" }}>
                        (
                      {
                          v.specfoods[0].specs_name
                        }
                        )
                    </span>
                    </div>
                    <div className="pirdiv">
                      ¥20
                      </div>
                    <div className="adddel">
                      <Icon type="minus-circle" onClick={() => this.seldel(v.name, shopcart[0].shopid, v.specfoods[0].specs_name)} />
                      {
                        v.shuliang
                      }
                      <Icon type="plus-circle" onClick={() => this.addmoney(v.name, shopcart[0].shopid, v.specfoods[0].specs_name)} />
                    </div>
                  </div>
                }) : null
              }
            </div>
          </div>
          <div className="childshNGTop">
            <div className="footleft">
              {
                data.map((v, i) => {
                  return <p key={i} onClick={() => this.top(v.name)} className="foodnameone">{v.name}</p>
                })
              }
            </div>
            <div className="foodright">
              {
                data.map((v, ii) => {
                  return <div key={ii}>
                    <p className="meiHeader">
                      <span className="meiHeaderleft">{v.name}</span>
                      <span className="meiHeaderright"><Icon type="dash" /></span>
                    </p>
                    {
                      v.foods.map((k, i) => {
                        return <dl key={i} className="shoponennn" >
                          <dt onClick={() => this.jumpXing(k)}>
                            <img src={"//elm.cangdu.org/img/" + k.image_path} alt="" />
                          </dt>
                          <dd>
                            <p className="headerOOne">{k.name}</p>
                            <p className="ttttto">{k.description}</p>
                            <p className="cccccccc">月销售{k.month_sales}份 好评率{k.satisfy_rate}%</p>
                            <p className="lastPirbox"><span><span className="lastPirboxspanone">¥20</span>起</span><span className="lastPirboxiop">
                              {
                                k.specifications.length != 0 ? <span className="guigee" onClick={() => this.disxuan(k)}>规格</span> : <Icon
                                  onClick={() => this.add(k)} type="plus-circle" style={{ fontSize: "0.3rem" }} />
                              }
                            </span></p>
                          </dd>
                        </dl>
                      })
                    }
                  </div>
                })
              }
              <div style={{ width: "100%", height: "100%" }}>

              </div>
            </div>
          </div>
        </div>
        <div className="lastMoney">
          <div className="lastMoneyflex" onClick={this.dis}>
            <Icon type="shopping-cart" className="endIcon" />
            <div className="lastMoneyflexbbbiox">
              <p>
                ¥ <span>{this.state.pir}</span>
              </p>
              <p>配送费¥5</p>
            </div>
          </div>
          {
            this.state.pir >= 20 ? <div className="lastMoneyjiesuan" onClick={this.jumpdanzi}>
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

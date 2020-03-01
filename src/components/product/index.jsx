import React, { Component } from 'react'
import { Icon } from "antd"
import { Switch, Route, Link } from 'react-router-dom'
import { Producttwo, Productone } from "@/utils/routersLoader"
import "./style.less"
export default class componentName extends Component {
  state = {
    data1: [],
    data2: [],
    display: "none",
    a: ["spanClick", "spanClicknone"]
  }
  componentDidMount() {
    if(this.props.location.pathname=="/Product/two")
    {
      this.setState({
        a:["spanClicknone","spanClick"]
      })
    }
    let a = JSON.parse(localStorage.getItem("data"))
    this.setState({
      data1: a.one,
      data2: a.two
    })
  }
  back = () => {
    this.props.history.push("/home")
  }
  close = () => {
    this.setState({
      display: "none"
    })
  }
  kai = () => {
    this.setState({
      display: ""
    })
  }
  setcliak = (v) => {
    if (v == 1) {
      let a = ["spanClicknone", "spanClick"]
      this.setState({
        a: a
      })
    } else {
      let a = ["spanClick", "spanClicknone"]
      this.setState({
        a: a
      })
    }
  }
  xiangxi=()=>{
    localStorage.setItem("shopid",JSON.parse(localStorage.getItem("data")).one.id)
    this.props.history.push("/Details")
  }
  render() {
    return (
      this.state.data1.length != 0 || this.state.data2.length != 0 ? <div className="shopye">
        {
          this.state.data1.activities.length != 0 ? <div className="zheBox" style={{ display: `${this.state.display}` }}>
            <p className="firstP">
              {
                this.state.data1.name
              }
            </p>
            <p className="firstP">
              <span>
                优惠信息
            </span>
            </p>
            <p className="Roow">
              <span className="jian">
                减
                    </span>
              {this.state.data1.activities[0].description}
              （APP专享）
            </p>
            {
              this.state.data1.activities[1] ? <p className="Roow">
                <span className="xinde">
                  新
                    </span>
                {this.state.data1.activities[1].description}
                （APP专享）
            </p> : null
            }
            <p className="firstP">
              <span>
                商家公告
            </span>
            </p>
            <p className="Roow">
              {
                this.state.data1.promotion_info
              }
            </p>
            <p className="lastBack" onClick={this.close}>
              <Icon type="close" />
            </p>
          </div> : null
        }
        <div className="shopHeaderss">
          <div className="imgbackg">
            <div>
              <img src={"//elm.cangdu.org/img/" + this.state.data1.image_path} alt="" />
            </div>
          </div>
          <div className="pasositi">
          </div>
          <dl className="header_sideBox">
            <p className="backgding" onClick={this.xiangxi}>
              <Icon type="right" />
            </p>
            <p className="backDing" onClick={this.back}>
              <Icon type="left" />
            </p>
            <div className="pirsmall">
              {
                this.state.data1.activities.length != 0 ?
                  <div className="insidePir">
                    <p className="PIrleft">
                      <span className="jian">
                        减
                    </span>
                      <span>
                        {this.state.data1.activities[0].description}
                      </span>
                      （APP专享）
                    </p>
                    <p className="Pirright" onClick={this.kai}>
                      {this.state.data1.activities.length}
                      个活动
                    <Icon type="right" />
                    </p>
                  </div>
                  : ""
              }
            </div>
            <dt>
              <img src={"//elm.cangdu.org/img/" + this.state.data1.image_path} alt="" />
            </dt>
            <dd>
              <p className="headerH">{this.state.data1.name}</p>
              <p className="shopfontsone">商家配送 / 分钟送达 / {this.state.data1.piecewise_agent_fee.tips}</p>
              <p className="shopfontsone">
                {
                  this.state.data1.promotion_info
                }
              </p>
            </dd>
          </dl>
        </div>
        <div className="shopBodys">
          <div className="shopBodys-header">
            <p onClick={() => this.setcliak(0)}>
              <span className={this.state.a[0]} >
                <Link to="/Product/">商品</Link>
              </span>
            </p>
            <p onClick={() => this.setcliak(1)}>
              <span className={this.state.a[1]} >
                <Link to="/Product/two">评价</Link>

              </span>
            </p>
          </div>
          <Switch>
            <Route path="/Product/two" component={Producttwo} />
            <Route path="/Product/" component={Productone} />
          </Switch>
        </div>
      </div> : null
    )
  }
}



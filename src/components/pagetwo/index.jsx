import React, { Component } from 'react'
import { searchshop } from "@/api/actions"
import { Icon, message } from "antd"
import Search from "@/components/searchlist"
import './styles.less'

export default class extends Component {
  state = {
    search: "",
    searchdata: [],
    historydata: []
  }
  searchone = (e) => {
    if (e.target.value == "") {
      this.setState({
        searchdata: []
      })
    }
    this.setState({
      search: e.target.value
    }, () => {
      this.history()
    })
  }
  componentDidMount() {
    this.history()
  }
  history = () => {
    if (localStorage.getItem("searchhistory")) {
      let data = JSON.parse(localStorage.getItem("searchhistory"))
      this.setState({
        historydata: data
      })
    } else {
      this.setState({
        historydata: []
      })
    }
  }
  search = () => {
    let d = this.state.search
    if (d != "") {
      if (localStorage.getItem("searchhistory")) {
        let data = JSON.parse(localStorage.getItem("searchhistory"))
        let arr = []
        let sum = 0
        data.filter(v => {
          if (d == v) {
            sum++
          }
        })
        if (sum == 0) {
          data.push(d)
          localStorage.setItem("searchhistory", JSON.stringify(data))
        }
      } else {
        let arr = []
        arr.push(d)
        localStorage.setItem("searchhistory", JSON.stringify(arr))
      }
      let a = localStorage.getItem("childone")
      let arr = a.split("&")
      let str = []
      arr.filter(v => {
        str.push(v.split("=")[1])
      })
      str = str.join(",")
      let url = "geohash=" + str + "&keyword=" + d
      searchshop(url).then(res => {
        if (res.data.length == 0) {
          message.error("未找到对应结果")
        }
        this.setState({
          searchdata: res.data
        })
      })
    }
  }
  back = (v) => {
    this.setState({
      search: v
    }, () => {
      this.search()
    })
  }
  clear = () => {
    this.setState({
      historydata: []
    })
    localStorage.removeItem('searchhistory')
  }
  render() {
    return (
      <div className="two_body">
        <div className="two_body_header">
          <div className="zuo">
            <Icon type="left" />
          </div>
          <div className="cen">
            搜索
            </div>
          <div className="zuo">

          </div>
        </div>
        <div className="searchShopbox">
          <input type="text" name="" id="" value={this.state.search} placeholder="请商家输入或者美食名称" onChange={this.searchone} />
          <button onClick={this.search}>提交</button>
        </div>
        <div className="listbodyOne">
          {
            this.state.searchdata.length != 0 ?
              <div>
                <p className="histp">商家</p>{
                  this.state.searchdata.map((v, index) => {
                    return <Search key={index} data={v} {...this.props} />
                  })
                }
              </div> : this.state.historydata.length == 0 ? null : <div>
                <p className="histp">搜索历史</p>{
                  this.state.historydata.map((v, index) => {
                    return <p key={index} className="his" onClick={() => this.back(v)}>{v}</p>
                  })
                }
                <p onClick={this.clear} className="classclear">清空</p>
              </div>

          }
        </div>
      </div>
    )
  }
}

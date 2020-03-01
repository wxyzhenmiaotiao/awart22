import React, { Component } from 'react'
import { search, city } from '@/api/actions'
import './style.less'
export default class componentName extends Component {
  state = {
    value: "",
    searchdata: [],
    history: []
  }
  componentDidMount() {
    this.disLocal()
  }
  disLocal = () => {
    if (localStorage.getItem("history")) {
      this.setState({
        history: JSON.parse(localStorage.getItem("history"))
      })
    } else {
      this.setState({
        history: []
      })
    }
  }
  value = (e) => {
    this.setState({
      value: e.target.value
    })
  }
  searchone = (e) => {
    let a = this.state.value
    if (a != "") {
      e.preventDefault();
      let url = "city_id=" + this.props.match.params.id + "&keyword=" + a + "&type=search"
      search(url).then(res => {
        this.setState({
          searchdata: res.data
        })
      })
    }
  }
  jump = (v) => {
    city(v.geohash).then(res => {
      if (localStorage.getItem("history")) {
        let a = JSON.parse(localStorage.getItem("history"))
        a.filter(k => {
          if (k.name === v.name) {

          } else {
            a.push(v)
          }
        })
        localStorage.setItem("history", JSON.stringify(a))
      } else {
        let a = []
        a.push(v)
        localStorage.setItem("history", JSON.stringify(a))
      }
      let url1 = res.data.latitude
      let url2 = res.data.longitude
      let url3 = "latitude=" + url1 + "&" + "longitude=" + url2
      localStorage.setItem("childone", url3)
      localStorage.setItem("childname", res.data.name)
      this.props.history.push("/home")
    })
  }
  clear = () => {
    localStorage.removeItem('history')
    this.disLocal()
  }
  render() {
    return (
      <div className="chooseChild">
        <div className="headerChoose">
          <p className="choosesma"> ㄑ </p>
          <p className="fontsone">{localStorage.getItem("fontsname")}</p>
          <p>切换城市</p>
        </div>
        <div className="flexchoose">
          <form className="inpBox">
            <input type="text" name="" id="" onChange={this.value} placeholder="输入学校，商务楼，地址" required="required" />
            <button onClick={this.searchone}>提交</button>
          </form>
          {
            this.state.searchdata.length != 0 ?
              <div>
                {
                  this.state.searchdata.map((v, index) => {
                    return <div key={index} onClick={() => this.jump(v)} className="addressRow">
                      <p>{v.name}</p>
                      <br />
                      <span>{v.address}</span>
                    </div>
                  })
                }
              </div>
              : <div className="searchhistory">
                <p>搜索历史</p>
                {
                  this.state.history.length != 0 ?
                    <div className="listhistoy">
                      {
                        this.state.history.map((v, index) => {
                          return <div key={index} onClick={() => this.jump(v)} className="addressRowtwo">
                            <span className="hone">{v.name}</span>
                            <br />
                            <span>{v.address}</span>
                          </div>
                        })
                      }
                      <div className="deleteList" onClick={this.clear}>
                        清空所有
                          </div>
                    </div>
                    : null
                }
              </div>
          }
        </div>
      </div>
    )
  }
}

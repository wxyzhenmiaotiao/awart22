import React, { Component } from 'react'
import { evaluafen, evalualei, evalualist } from "@/api/actions"
import { Spin } from "antd"
import Start from "@/components/start"
import InfiniteScroll from "react-infinite-scroller"
import "./style.less"
export default class componentName extends Component {
  state = {
    fen: "",
    list: [],
    lei: [],
    classarr: []
  }
  componentDidMount() {
    let data = JSON.parse(localStorage.getItem("data"))
    let id = data.one.id
    evaluafen(id).then(res => {
      evalualei(id).then(res1 => {
        evalualist(id, 0, 10).then(res2 => {
          let arr = []
          for (let i = 0; i < res1.data.length; i++) {
            arr.push("proleTokele")
          }
          let arrone=res2.data
          arrone.filter(v => {
            if (v.avatar == "") {
              v.avatar = "//elm.cangdu.org/img/default.jpg"
            } else {
              let a = v.avatar
              a = a.split("")
              a[0] = a[0] + "/"
              a[2] = a[2] + "/"
              a = a.join("")
              v.avatar = "https://fuss10.elemecdn.com/" + a + ".jpeg"
            }
            if (v.item_ratings.length != 0) {
              v.item_ratings.filter(k => {
                if (k.image_hash != "") {
                  let a = k.image_hash
                  a = a.split("")
                  a[0] = a[0] + "/"
                  a[2] = a[2] + "/"
                  a = a.join("")
                  k.image_hash = "https://fuss10.elemecdn.com/" + a + ".jpeg"
                }
              })
            }
          })
          this.setState({
            list: arrone,
            lei: res1.data,
            fen: res.data,
            classarr: arr,
            listarr:arrone
          })
        })
      })
    })
  }
  porpleclick = (v) => {
    let arr = this.state.classarr
    let sum = arr.length
    let arr1 = []
    for (let i = 0; i < sum; i++) {
      arr1.push("proleTokele")
    }
    arr1[v] = "proleTokele1"
    this.setState({
      classarr: arr1
    })
  }
  loadFunc = () => {
    let arr=this.state.list
    let arr1=this.state.listarr
    let arr2=[...arr,...arr1]
    this.setState({
      list:arr2
    })
  }
  render() {
    const { fen, list, lei, classarr } = this.state
    return (
      <div className="evaluateBox">
        {
          fen != "" ? <div className="evaluateBox1">
            <div className="fenshuBox">
              <div className="fenshuleft">
                <span className="zongfenshu">4.7</span>
                <span className="zonghespan">综合评价</span>
                <span className="heightshop">高于周边商家{(fen.compare_rating * 100).toFixed(1)}%</span>
              </div>
              <div className="fenshuright">
                <div className="fuwu"><p>服务态度</p><Start data={fen.service_score.toFixed(1)} /><span>{fen.service_score.toFixed(1)}</span></div>
                <div className="fuwu"><p>菜品评价</p><Start data={fen.food_score.toFixed(1)} /><span>{fen.food_score.toFixed(1)}</span></div>
                <div className="fuwu"><p>送达时间</p>
                  <span className="minuate">分钟</span>
                </div>
              </div>
            </div>
            <div className="propleTalk">
              {
                lei.map((v, i) => {
                  return <span key={i} className={classarr[i]} onClick={() => this.porpleclick(i)}>
                    {
                      v.name
                    }
                    ({v.count})
                  </span>
                })
              }
            </div>
            <InfiniteScroll
              pageStart={0}
              loadMore={this.loadFunc}
              hasMore={true}
              loader={<div className="loaderLoading" key={0}><Spin /><span className="loadingSpan">Loading</span></div>}
              useWindow={false}
              threshold="-300"
            >
              {
                list.map((v, i) => {
                  return <div key={i} className="propleT">
                    <div className="propleleft">
                      <div className="propleImg">
                        <img src={v.avatar} alt="" />
                      </div>
                    </div>
                    <div className="proleriight">
                      <p className="usernameoneuu">
                        <span>
                          {
                            v.username
                          }
                        </span>
                        <span style={{ marginRight: "0.2rem" }}>
                          {
                            v.rated_at
                          }
                        </span>
                      </p>
                      <div className="stttt">
                        <Start data={v.rating_star} />
                        <span className="anTimeone">
                          {
                            v.time_spent_desc
                          }
                        </span>
                      </div>
                      {
                        v.item_ratings.length != 0 ? <div className="caiImg">
                          {
                            v.item_ratings.map((k, p) => {
                              if (k.image_hash != "") {
                                return <img key={p} className="propeleImgg" src={k.image_hash} alt="" />
                              }
                            })
                          }
                        </div> : null
                      }
                      {
                        v.item_ratings.length != 0 ? <div className="nameCai">
                          {
                            v.item_ratings.map((k, p) => {
                            return <p className="foodname" key={p}>{k.food_name}</p>
                            })
                          }
                        </div> : null
                      }
                    </div>
                  </div>
                })
              }
            </InfiniteScroll>
          </div> : null
        }

      </div>
    )
  }
}

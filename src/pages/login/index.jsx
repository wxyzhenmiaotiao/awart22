import React, { Component } from 'react'
import './styles.less'
import { childone } from "@/api/actions"
import Childmodel from "@/components/childmodel/"
export default class extends Component {
  state = {
    guess: "",
    hot: [],
    group: []
  }
  componentDidMount() {
    childone("type=group").then(res => {
      let data=[]
      for (let k in res.data) {
        data.push(k)
      }
      data.sort()

      let g = []
      data.filter(v => {
        let a = {}
        a[v] = res.data[v]
        a.name = v
        g.push(a)
      })
      let guess=[]
      childone("type=guess").then(ttt => {
        guess=ttt.data
        
      })
      childone("type=hot").then(aaa => {
        this.setState({
          guess:guess,
          hot: aaa.data,
          group: g
        })
      })
    })
  }

  buttons = () => {
    if(localStorage.getItem('user_id')){
      return <img src="image/6.jpg" />
    }else{
      return <p><span>登陆</span>|<span>注册</span></p>
    }
  }

  login = () => {
    this.props.history.push('/login')
  }

  render() {
    // console.log(this.state)
    return (
      <div className="Login-box">
        <div className="childUrlheader">
          <p>ele.me</p>
          <p onClick={this.login}>{this.buttons()}</p>
        </div>
        <div className="childFlex-box">
          <div className="rowPosition">
            <p className="leftPoition">
              当前定位城市
            </p>
            <p>
              定位不准确时，请在城市列表中选择
            </p>
          </div>
          <div className="positionBox">
            {
              this.state.guess != "" ? <p>{this.state.guess.name}</p> : <p className="dd">正在获取</p>
            }
            <p className="right">></p>
          </div>
          <div className="hotCity">
            <div className="hotP">热门城市</div>
            {
              this.state.hot.length == 0 ? <div className="loadingBody">加载数据中</div> : <div className="hotBopx">
                {
                  this.state.hot.map(v => {
                    return <Childmodel {...this.props} key={v.id} name={v} />
                  })
                }
              </div>
            }
          </div>
          {
            this.state.group.map((v,index) => {
              return <div key={index} className="bodylast">
                <div className="headerlastone">
                  {
                    v.name
                  }
                </div>
                <div className="flexxx">
                  {
                    v[v.name].map(v=>{
                    return <Childmodel {...this.props} key={v.id} name={v}/>
                    })
                  }
                </div>
              </div>
            })
          }
        </div>

      </div>
    )
  }
}

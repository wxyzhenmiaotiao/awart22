import React, { Component } from 'react'
import { Icon, Carousel , Spin  } from 'antd'
import { fenlei , shop } from "@/api/actions"
import Fen from "@/components/fenlei"
import Shoplist from "@/components/shoplist"
import './styles.less'
export default class extends Component {
  state = {
    classification: [],
    datalength:[],
    shop:[]
  }
  componentDidMount() {
    fenlei().then(res => {
      let a=res.data.length
      let b=a/8
      b=Math.ceil(b)
      let arr=[]
      for(let i=0;i<b;i++)
      {
        arr.push(i)
      }
      this.setState({
        classification: res.data,
        datalength:arr
      })
    })
    shop(localStorage.getItem("childone")).then(res=>{
      this.setState({
        shop:res.data
      },()=>{
        if(localStorage.getItem("scroll"))
        {
          let a=document.getElementsByClassName("one_body_flex")[0]
          a.scrollTop=localStorage.getItem("scroll")
        }
      })
    })
  }
  searchshop=()=>{
    this.props.history.push("/home/pagetwo")
  }
  users=()=>{
    this.props.history.push("/home/pagefour")
  }
  scroll=(e)=>{
    let value=e.target.scrollTop
    localStorage.setItem("scroll",value)
  }
  render() {
    return (
      <div className="one_body">
        <div className="one_body_header">
          <p onClick={this.searchshop}><Icon type="search" /></p>
          <div>
            {
              localStorage.getItem("childname")
            }
          </div>
          <p onClick={this.users}><Icon type="user" /></p>
        </div>
        <div className="one_body_flex" onScroll={this.scroll}>
          <div className="lunbox">
            <Carousel>
              {
                this.state.datalength.map((v,index)=>{
                  
                  let i=[]
                  this.state.classification.filter(v=>{
                    i.push(v)
                  })
                  let sum=v+1
                  sum=sum*8-8
                  let a=i.splice(sum,8)
                  return <div key={index} className="insidebox">
                        {
                          a.map((v,index)=>{
                            return <Fen key={index} data={v}/>
                          })
                        }
                  </div>
                })
              }
            </Carousel>
          </div>
          <div className="shopchild">
              <div className="shopheaderBox">
              <Icon type="shop" /> <p>附近商家</p>
              </div>
              {
               this.state.shop.length==0?<div className="listLoading">
                 <Spin/>
                 <span>
                   正在拼命加载中
                 </span>
               </div>: this.state.shop.map((v,index)=>{
                  return <Shoplist {...this.props} key={index} data={v} />
                })
              }
          </div>

        </div>
      </div>
    )
  }
}

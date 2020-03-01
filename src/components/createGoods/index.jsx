import React, { Component } from 'react'
import { address , deleaddress } from "@/api/actions"
import './styles.less';

export default class extends Component {
  state={
    data:[],
    dis:"none"
  }
  componentDidMount(){
    let id=localStorage.getItem("user_id")
    address(id).then(res=>{
      this.setState({
        data:res.data
      })
    })
  }
  address = () => {
    this.props.history.push('address')
  }

  fan = () => {
    this.props.history.go(-1)
  }
  dele=(id)=>{
    let userid=localStorage.getItem("user_id")
    deleaddress(userid,id).then(res=>{
      this.componentDidMount()
    })
  }
  set=()=>{
    if(this.state.dis=="none")
    {
      this.setState({
        dis:""
      })
    }else{
      this.setState({
        dis:"none"
      })
    }
  }
  render() {
    const data  = this.state.data
    return (
      <div className="createGoods_box">
        <div className="createGoods_box_head">
          <div onClick={this.fan} className="createGoods_box_head_1">
            <span>{'<'}</span>
          </div>
          <div className="createGoods_box_head_2">
            编辑地址
          </div>
          <div className="createGoods_box_head_3" onClick={this.set}>
            编辑
          </div>
        </div>
        <div className="createGoods_box_body">
          {
            data.length!=0?data.map((v,i)=>{
              return <div key={i} className="addressBBixo">
              <p>{v.name}</p>
            <p>{v.phone}</p>
            <div className="addressPOition" onClick={()=>this.dele(v.id)} style={{display:this.state.dis}}>
              ×
            </div>
            </div>
            }):null
          }
          <div onClick={this.address} className="createGoods_box_body_line">
            <p className="createGoods_box_body_line_left">修改地址</p>
            <p className="createGoods_box_body_line_right">></p>
          </div>
        </div>

      </div>
    )
  }
}

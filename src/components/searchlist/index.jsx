import React, { Component } from 'react'
import { xiang } from "@/api/actions"
import "./style.less"
export default class componentName extends Component {
  search=(v)=>{
    xiang(v.id).then(res=>{
      let a={}
      a.one=v
      a.two=res.data
      localStorage.setItem("data",JSON.stringify(a))
      this.props.history.push("/Product")
    })
  }
  render() {
    const data = this.props.data
    return (
      <dl className="searchRow" onClick={()=>this.search(data)}>
        <dt>
          <img src={"//elm.cangdu.org/img/" + data.image_path} alt="" />
        </dt>
        <dd>
          <p className="tou">
            {
              data.name
            }
          </p>
          <p>
            月售
                {
              data.recent_order_num
            }
          </p>
          <p className="money">
            ¥{
              data.float_minimum_order_amount
            }起送/距离您{
              data.distance
            }
          </p>
        </dd>
      </dl>
    )
  }
}

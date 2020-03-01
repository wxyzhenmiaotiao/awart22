import React, { Component } from 'react'
import Start from "@/components/start"
import { xiang } from "@/api/actions"
import "./style.less"
export default class componentName extends Component {
  chuan=(v)=>{
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
    let fonts = ""
    data.supports.map(k => {
      fonts += k.icon_name
    })
    return (
      <dl className="listRow" onClick={()=>this.chuan(data)}>
        <dt>
          <img src={"//elm.cangdu.org/img/" + data.image_path} alt="" />
        </dt>
        <dd>
          <div className="prowone">
            <p>
              <span className="shoppai">品牌</span>
              <span className="title">
                {
                  data.name
                }
              </span>
            </p>
            <p>
              <span className="carte">
                {
                  fonts
                }
              </span>
            </p>
          </div>
          <div className="prowone" style={{marginTop:"0.15rem"}}>
            <div className="zuostart">
              <Start data={data.rating} /><p>{data.rating}</p>
              <span>
                月售
                {
                  data.recent_order_num
                }
              </span>
            </div>
            <p>
              <span className="fistSpan">
                {
                  data.delivery_mode.text
                }
              </span>
              <span className="secondSpan">
                  准时达
              </span>
            </p>
          </div>
          <div className="prowone" style={{marginTop:"0.15rem"}}>
              <p>
                <span className="money">
                  ¥{
                    data.float_minimum_order_amount
                  }起送/{
                    data.piecewise_agent_fee.tips
                  }
                </span>
              </p>
              <p className="one">
                <span className="gong">
                  {
                    data.distance
                  }
                </span> 
                / 
                <span className="hour">
                  {
                    data.order_lead_time
                  }
                </span>
              </p>
          </div>
        </dd>
      </dl>
    )
  }
}

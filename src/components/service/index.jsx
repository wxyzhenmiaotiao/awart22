import React, { Component } from 'react'
import './styles.less'
import { xin } from "@/api/actions"

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
    const dataobj = []
    xin().then(res => {
      Object.keys(res.data).forEach(function (key) {
        dataobj.push(res.data[key])
      });
      this.setState({
        data: dataobj
      })
    })
  }

  click = (id) => {
    let url="/fu/"+id
    this.props.history.push(url)
  }

  render() {
    const { data } = this.state
    return (
      <div className="service_box">
        <div className="service_box_head">
          <div className="service_box_head_left">
            <span>{'<'}</span>
          </div>
          <div className="service_box_head_right">
            服务中心
          </div>
        </div>

        <div className="service_box_body">
          <div className="service_box_body_line1">
            <div className="service_box_body_line1_1">
              <img src="image/4.jpg" alt=""/>
              <p>在线客服</p>
            </div>
            <div className="service_box_body_line1_1">
              <img src="image/5.jpg" alt=""/> 
              <p>在线客服</p>
            </div>
          </div>
          <div className="service_box_body_line2">
            <p>热门问题</p>
          </div>
          <div className="service_box_body_line3">
            {
              data.map((val,key) => {
                if(key % 2 != 0 && key < 24){
                  return <p onClick={() => this.click(key)} key={key}>{val}</p>
                }
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

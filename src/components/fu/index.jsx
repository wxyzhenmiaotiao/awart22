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

  render() {
    const { id } = this.props.match.params
    const { data } = this.state
    return (
      <div className="fu_box">
        <div className="fu_box_head">
          <div className="fu_box_head_left">
            <span>{'<'}</span>
          </div>
          <div className="fu_box_head_right">
            <span>{data[id]}</span>
          </div>
        </div>
        <div className="fu_box_body">
            {data[id-1]}
        </div>
      </div>
    )
  }
}

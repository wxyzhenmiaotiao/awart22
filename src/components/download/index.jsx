import React, { Component } from 'react'
import './styles.less'

export default class extends Component {
  render() {
    return (
      <div className="download_body">
        <div className="download_body_head">
          <div className="download_body_head_left">
            ←
          </div>
          <div className="download_body_head_right">
            下载
          </div>
        </div>
        <div className="download_body_body">
            <div className="download_body_body_img">
              <img src="image/3.jpg" alt=""/>
            </div>
            <div className="download_body_body_btn">
              <button>下载</button>
            </div>
        </div>
      </div>
    )
  }
}

import React, { Component } from 'react'
import { BrowserRouter, Switch, Route,Link } from 'react-router-dom'
import './styles.less'
import { Preferential_left, Preferential_right } from "@/utils/routersLoader"

export default class extends Component {
  render() {
    return (
      <div className="preferential_box">
        <div className="preferential_box_head">
          <div className="preferential_box_head_1">
            <div className="preferential_box_head_1_left"> 
              <span>{'<'}</span>
            </div>
            <div className="preferential_box_head_1_right"> 
              我的优惠
            </div>
          </div>
          <div className="preferential_box_head_2">
            <div className="preferential_box_head_2_left">
              <Link to="/preferential">红包</Link>
            </div>
            <div className="preferential_box_head_2_left">
              <Link to="/preferential/right">商家代金券</Link>
            </div>
          </div>
        </div>
        <div className="preferential_box_body">
					<Switch>
						<Route path='/preferential/right' component={Preferential_right} />
            <Route path='/' component={Preferential_left} />
					</Switch>
        </div>
      </div>
    )
  }
}

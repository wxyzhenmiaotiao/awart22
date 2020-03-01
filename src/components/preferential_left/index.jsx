import React, { Component } from 'react'
import './styles.less'
import { connect } from 'react-redux'
import { sponsored } from "@/api/actions"

export default @connect(state => {
  return {
    data: state.user,
  }
})
class extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: []
    }
    const id = localStorage.getItem('user_id')
    sponsored(id,20,0)
      .then(res => {
        console.log(res)
        this.setState({
          data: res.data
        })
      })
  }

  shuo = () => {
    this.props.history.push('/descriptionThe')
  }


  render() {
    const { data } = this.state
    return (
      <div className="Preferential_left_box">
        <div className="Preferential_left_box_1">
          <p className="p1">有<span>{data.length}</span>个红包即将到期</p>
          <p onClick={this.shuo} className="p2">红包说明</p>
        </div>
        {
          data.map((v,key)=> {
            return (
              <div key={key} className="Preferential_left_box_2">
                <div className="Preferential_left_box_2_line">
                  <div className="left"> 
                    <div className="left_top">
                      <p>￥<span>{v.amount}</span></p>
                    </div>
                    <div className="left_bottom">
                      <span>{v.description_map.sum_condition}</span>
                    </div>
                  </div>
                  <div className="right">
                    <div className="right_1">
                      <div className="right_1_left"> 
                        {v.name}
                      </div>
                      <div className="right_1_right"> 
                        {v.description_map.validity_delta}
                      </div>
                    </div>
                    <div className="right_2">
                    {v.description_map.validity_periods}
                    </div>
                    <div className="right_3">
                    {v.description_map.phone}
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
        <div className="Preferential_left_box_3"> 
          限品类：快餐便当、特色菜系、小吃夜宵、甜品饮品、异国料理
        </div>
        <div className="Preferential_left_box_4"> 
          查看历史红包 >
        </div>
        <div className="Preferential_left_box_5">
          <p>兑换红包</p>
          <p>推荐有奖</p>
        </div>
      </div>
    )
  }
}
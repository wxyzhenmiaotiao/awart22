import React, { Component } from 'react'
import { addressadd ,} from "@/api/actions"
import { Form, Icon, Input, Button, Checkbox , message} from 'antd';
import { connect } from 'react-redux'
import './styles.less'
export default @connect(state => {
  return {
    data: state.data
  }
})
@Form.create({ name: 'normal_login' })
class extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        let id = localStorage.getItem("user_id")
        let a=localStorage.getItem("childone")
        a=a.split("&")
        let arr=[]
        a.filter(v=>{
          arr.push(v.split("=")[1])
        })
        arr=arr.join(",")
        values.geohash= arr
        values.phone_bk= ""
        values.poi_type= 0
        values.sex= 1
        values.tag= "公司"
        values.tag_type= 4
        addressadd(id,values).then(res=>{
          message.success("添加成功")
        })
      }
    });
  }
  back=()=>{
    this.props.history.go(-1)
  }
  render() {
   
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="address_body">
        <div className="address_body_head">
          <div className="address_body_head_left" onClick={this.back}> 
            <span>{'<'}</span>
          </div>
          <div className="address_body_head_right">
            新增地址
          </div>
        </div>
        <div className="address_body_body">
          <div className="address_body_body_line">
            <Form onSubmit={this.handleSubmit} className="login-form">
              <Form.Item>
                {getFieldDecorator('name', {
                  rules: [{ required: true, message: '姓名不能为空' }],
                })(
                  <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="请填写你的名字"
                  />,
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('address', {
                  rules: [{ required: true, message: '小区名不能为空' }],
                })(
                  <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="小区/写字楼/学校等"
                  />,
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('address_detail', {
                  rules: [{ required: true, message: '详细地址不能为空' }],
                })(
                  <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="请填写能够联系到您的电话"
                  />,
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('phone', {
                  rules: [{ required: true, message: '电话不可为空' }],
                })(
                  <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="请填写能够联系到您的电话"
                  />,
                )}
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  添加
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    )
  }
}

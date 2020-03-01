import React, { Component } from 'react'
import './styles.less'
import { Pageone, Pagetwo, Pagethree, Pagefour } from "@/utils/routersLoader"
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { TabBar } from 'antd-mobile';
export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'blueTab',
      hidden: false,
      fullScreen: false,
    };
  }
  componentDidMount() {
    let a = this.props.location.pathname
    this.feng(a)
  }
  feng = (a) => {
    switch (a) {
      case '/home/pagetwo':
        this.setState({
          selectedTab: 'redTab',
        });
        break;
      case '/home/pagethree':
        this.setState({
          selectedTab: 'greenTab',
        });
        break;
      case '/home/pagefour':
        this.setState({
          selectedTab: 'yellowTab',
        });
        break;
      default:
        this.setState({
          selectedTab: 'blueTab',
        });
        break
    }
  }
  componentWillReceiveProps(s) {
    let a = s.location.pathname
    this.feng(a)
  }
  render() {
    return (
      <div className="box">
        <div className="body">
          <Switch>
            <Route path="/home/pagetwo" component={Pagetwo} />
            <Route path="/home/pagethree" component={Pagethree} />
            <Route path="/home/pagefour" component={Pagefour} />
            <Route path="/home" component={Pageone} />
          </Switch>
        </div>
        <div className="foot">
          <TabBar
            className="tabbar"
            unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="white"
            hidden={this.state.hidden}
            tabBarPosition="top"
          >
            <TabBar.Item
              title="外卖"
              key="Life"
              icon={<div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat'
              }}
              />
              }
              selectedIcon={<div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat'
              }}
              />
              }
              selected={this.state.selectedTab === 'blueTab'}
              badge={1}
              onPress={() => {
                this.setState({
                  selectedTab: 'blueTab',
                });
                this.props.history.push("/home")
              }}
              data-seed="logId"
            >
            </TabBar.Item>
            <TabBar.Item
              icon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat'
                }}
                />
              }
              selectedIcon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat'
                }}
                />
              }
              title="搜索"
              key="Koubei"
              badge={'new'}
              selected={this.state.selectedTab === 'redTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'redTab',
                });
                this.props.history.push("/home/pagetwo")
              }}
              data-seed="logId1"
            >
            </TabBar.Item>
            <TabBar.Item
              icon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat'
                }}
                />
              }
              selectedIcon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat'
                }}
                />
              }
              title="订单"
              key="Friend"
              dot
              selected={this.state.selectedTab === 'greenTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'greenTab',
                });
                this.props.history.push("/home/pagethree")
              }}
            >
            </TabBar.Item>
            <TabBar.Item
              icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
              selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
              title="个人"
              key="my"
              selected={this.state.selectedTab === 'yellowTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'yellowTab',
                });
                this.props.history.push("/home/pagefour")
              }}
            >
            </TabBar.Item>
          </TabBar>
        </div>
      </div>
    )
  }
}

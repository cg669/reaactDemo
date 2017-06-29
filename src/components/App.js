import React, { Component } from 'react';
import '../css/App.css';
import {Link} from "react-router";
import { Layout, Menu, Breadcrumb, Icon} from 'antd';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
const { SubMenu } = Menu;
const { Header, Content , Sider } = Layout;

export default class App extends Component {
  state = {
    collapsed: false,
    mode: 'inline',
    width : 0,
    show: true
  };
  onCollapse = (collapsed) => {
    this.setState({
      collapsed,
      mode: collapsed ? 'vertical' : 'inline',
    });
  }
  render() {
    return (
	      <Layout>
			    <Header className="header">
			      <div className="logo" />
			      <Menu
			        theme="dark"
			        mode="horizontal"
			        defaultSelectedKeys={['2']}
			        style={{ lineHeight: '64px' }}
			      >
			        <Menu.Item key="1"><Link to="/about">个人资料</Link></Menu.Item>
			        <Menu.Item key="2"><Link to="/home">首页</Link></Menu.Item>
			        <Menu.Item key="3"><Link to="/topics">每日随笔</Link></Menu.Item>
			      </Menu>
			    </Header>
			    <Content style={{ padding: '0 50px'}} className="laybody">
			      <Breadcrumb style={{ margin: '12px 0'}}>
			        <Breadcrumb.Item style={{fontSize : '1.2rem',color : "#eeeedd"}}>张晨光的个人网站</Breadcrumb.Item>
			      </Breadcrumb>
			      <Layout>
			        <Sider width={this.state.width} style={{ background: '#fff'}} className="slider">
			          <Menu
			            mode="inline"
			            defaultSelectedKeys={['1']}
			            defaultOpenKeys={['sub1']}
			            style={{ height: '100%' }}
			          >
			            <SubMenu key="sub1" title={<span><Icon type="user" />首页</span>}>
			              <Menu.Item key="1"><Link to="/home/jiepanxia">接盘侠</Link></Menu.Item>
			              <Menu.Item key="2"><Link to="/home/pintu">超级拼图</Link></Menu.Item>
			              <Menu.Item key="3"><Link to="/home/topics">option3</Link></Menu.Item>
			              <Menu.Item key="4"><Link to="/home">option4</Link></Menu.Item>
			            </SubMenu>
			            <SubMenu key="sub2" title={<span><Icon type="laptop" />个人资料 </span>}>
			              <Menu.Item key="5">option5</Menu.Item>
			              <Menu.Item key="6">option6</Menu.Item>
			              <Menu.Item key="7">option7</Menu.Item>
			              <Menu.Item key="8">option8</Menu.Item>
			            </SubMenu>
			            <SubMenu key="sub3" title={<span><Icon type="notification" />每日随笔</span>}>
			              <Menu.Item key="9">option9</Menu.Item>
			              <Menu.Item key="10">option10</Menu.Item>
			              <Menu.Item key="11">option11</Menu.Item>
			              <Menu.Item key="12">option12</Menu.Item>
			            </SubMenu>
			          </Menu>
			        </Sider>
			        <Content style={{ minHeight: 280 }}>	
			          <button className="sliderBtn" onClick={this.showSlider}>
					       菜单
					      </button>
					      
					        <ReactCSSTransitionGroup
				            component="div"
				            className="react-container"
				            transitionName="slide-in"
				            transitionEnterTimeout={300}
				            transitionLeaveTimeout={300}>
                		<div key={this.props.location.pathname} className={this.props.location.pathname}>
                		
			            		{this.props.children}
			            	</div>
            			</ReactCSSTransitionGroup>	
  							
			        </Content>
			      </Layout>
			    </Content>
			  </Layout>
    );
  }
  //是否显示侧边栏
	showSlider = ()=> {
		this.setState({
			width: this.state.width === 200 ? 0 : 200
		})
	}
}

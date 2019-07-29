import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { withRouter } from "react-router-dom"
import {Logo} from "./styled"
import {layoutRouteComponent} from '@router'
import sliderEach from '@utils/sliderEach'
const SliderTabBar = sliderEach(layoutRouteComponent);
const { Header, Content, Footer, Sider } = Layout;

class LayoutCom extends Component { 
         render() {
        return (
            <Layout>
                <Sider
                    style={{
                        overflow: 'auto',
                        height: '100vh',
                        position: 'fixed',
                        left: 0,
                    }}
                >
                    <Logo>
                        <img src="http://www.egu365.com/static/images/logo.png" alt="logo"/>
                    </Logo>
                    <Menu style={{ width: "100%" }}
                        onClick={this.handleTo.bind(this)}
                        mode="inline"
                        theme="dark">
                        { SliderTabBar }
                    </Menu>
                </Sider>
                <Layout style={{ marginLeft: 200 }}>
                    <Header style={{ background: '#fff', padding: 0 }} />
                    <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                        <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
                            {this.props.children}
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        );
    }
    handleTo({ key }) {
        this.props.history.push(key);
    }
}

export default withRouter(LayoutCom);
import React, { Component } from "react";

import Table from "../Components/table";

import { Layout, Menu } from "antd";
const { Header, Content, Sider } = Layout;

class Mainpage extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={broken => {}}
            onCollapse={(collapsed, type) => {}}
          >
            <div className="logo" />
            <Menu theme="dark" mode="inline">
              <Menu.Item key="1">
                <span className="nav-text">صفحه اصلی</span>
              </Menu.Item>
              <Menu.Item key="2">
                <span className="nav-text">دسته بندی</span>
              </Menu.Item>
              <Menu.Item key="3">
                <span className="nav-text">زیر دسته بندی</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header
              style={{ width: "100%", background: "#001529", padding: 0 }}
            />
            <Content style={{ margin: "24px 16px 0" }}>
              <div
                style={{
                  padding: 24,
                  minHeight: 700,
                  background: "#white"
                }}
              >
                <Table />
                
              </div>
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default Mainpage;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import List from "../../../../src/components/list.js";
import YJ from "../../../../src/img/상윤쓰프로필.jpg";
import SY from "../../../../src/img/유진쓰프로필.jpg";
import EH from "../../../../src/img/은하쓰프로필.jpg";
import { Layout, Menu, Breadcrumb } from "antd";
import { UserOutlined, LaptopOutlined } from "@ant-design/icons";
import "../../../../src/components/main.css";
import { Image } from "antd";

export default function MypageHomeView() {
  const { SubMenu } = Menu;

  const [write, setWrite] = useState(1);
  const { Header, Content, Footer, Sider } = Layout;
  //export default function MypageHomeView() {
  //  return <List />;
  //}

  const App = () => (
    <Image.PreviewGroup>
      <Image width={200} height={230} src={YJ} />
      <Image width={200} height={230} src={SY} />
      <Image width={200} height={230} src={EH} />
    </Image.PreviewGroup>
  );
  if (write === 1) {
    return (
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            height={100}
          >
            <div>THIS IS PAGE FOR OHJANGPARK!!</div>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>MYPAGE</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
          </Breadcrumb>
          <Layout
            className="site-layout-background"
            style={{ padding: "24px 0" }}
          >
            <Sider className="site-layout-background" width={200}>
              <Menu
                mode="inline"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                style={{ height: "100%" }}
              >
                <SubMenu
                  key="sub1"
                  onClick={() => setWrite(1)}
                  icon={<UserOutlined />}
                  title="USER-INFO"
                >
                  <Menu.Item key="1" onClick={() => setWrite(1)}>
                    {" "}
                    PROFILE{" "}
                  </Menu.Item>
                  <Menu.Item key="2" onClick={() => setWrite(3)}>
                    LEVEL
                  </Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub2"
                  onClick={() => setWrite(2)}
                  icon={<UserOutlined />}
                  title="REVIEW"
                >
                  <Menu.Item key="3" onClick={() => setWrite(2)}>
                    WRITTENBY
                  </Menu.Item>
                  <Menu.Item key="4" onClick={() => setWrite(3)}>
                    LIKE
                  </Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" icon={<LaptopOutlined />} title="SETTING">
                  <Link to="mypage/setting">
                    <Menu.Item key="5">SETTING</Menu.Item>
                  </Link>
                </SubMenu>
              </Menu>
            </Sider>

            <Content style={{ padding: "0 24px", minHeight: 280 }}>
              <App />
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          THIS IS FOR POCNIC @ ohjangpark.github.com
        </Footer>
      </Layout>
    );
  } else if (write == 2) {
    return (
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            height={100}
          >
            <div>THIS IS PAGE FOR OHJANGPARK!!</div>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>MYPAGE</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
          </Breadcrumb>
          <Layout
            className="site-layout-background"
            style={{ padding: "24px 0" }}
          >
            <Sider className="site-layout-background" width={200}>
              <Menu
                mode="inline"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                style={{ height: "100%" }}
              >
                <SubMenu
                  key="sub1"
                  onClick={() => setWrite(1)}
                  icon={<UserOutlined />}
                  title="USER-INFO"
                >
                  <Menu.Item key="1" onClick={() => setWrite(1)}>
                    {" "}
                    PROFILE{" "}
                  </Menu.Item>
                  <Menu.Item key="2" onClick={() => setWrite(1)}>
                    LEVEL
                  </Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub2"
                  onClick={() => setWrite(2)}
                  icon={<UserOutlined />}
                  title="REVIEW"
                >
                  <Menu.Item key="3" onClick={() => setWrite(2)}>
                    WRITTENBY
                  </Menu.Item>
                  <Menu.Item key="4" onClick={() => setWrite(3)}>
                    LIKE
                  </Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" icon={<LaptopOutlined />} title="SETTING">
                  <Link to="WHAT?">
                    <Menu.Item key="5">SETTING</Menu.Item>
                  </Link>
                </SubMenu>
              </Menu>
            </Sider>

            <Content style={{ padding: "0 24px", minHeight: 280 }}>
              <List />
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          THIS IS FOR POCNIC @ ohjangpark.github.com
        </Footer>
      </Layout>
    );
  }
}

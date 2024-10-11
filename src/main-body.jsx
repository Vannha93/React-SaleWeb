import { Outlet } from "react-router-dom";
import { Flex, Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import './main-body.css'
import { Content, Footer, Header } from "antd/es/layout/layout";
import SiderMenuBar from "./components/sider-menu-bar";

export default function MainBody() {

  return (
    <>
      <Flex gap="middle" wrap>
        <Layout className='layoutStyle'>

          <Header className='headerStyle'>Header</Header>

          <Layout>
            <Sider width="400px" className='siderStyle'>
              <SiderMenuBar />
            </Sider>

            <Content sclassName='contentStyle'>
              <Outlet />
            </Content>
          </Layout>

          <Footer className='footerStyle'>
            Footer
          </Footer>
        </Layout>
      </Flex>

    </>
  );
}
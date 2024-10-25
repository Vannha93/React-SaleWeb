import { Outlet } from "react-router-dom";
import { Flex, Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import './main-body.css'
import { Content, Footer, Header } from "antd/es/layout/layout";
import SiderMenuBar from "./components/sider-menu-bar";
import HeaderContent from "./pages/header";
import { useState } from "react";

export default function MainBody() {

  const [cartItems, setCartItems] = useState([])
  const addItemToCart = (newItem) => {
    setCartItems([...cartItems, newItem]);
  };

  return (
    <>
      <Flex gap="middle" wrap>
        <Layout className='layoutStyle'>
          <Header className='headerStyle'>
            <HeaderContent
              cartItems={cartItems}
              setCartItems={setCartItems}
              addItemToCart={addItemToCart}
            />
          </Header>

          <Layout>
            <Sider width="400px" className='siderStyle'>
              <SiderMenuBar />
            </Sider>

            <Content sclassName='contentStyle'>
              <Outlet context={{ cartItems, setCartItems, addItemToCart }}
              />
            </Content>
          </Layout>

        </Layout>
      </Flex>

    </>
  );
}
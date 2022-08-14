import React from 'react'
import { BrowserRouter, Navigate, Route, Routes,Link} from "react-router-dom";
import { Breadcrumb, Layout, Menu } from 'antd';
import Login from "login/Login";
import Register from "login/Register";
import Product from "pdp/Product";
import Products from './Pages/Products';
const { Header, Content, Footer } = Layout;
const MainLayout = () => {

const item=[
    {
        "key": 1,
        "label": "Login"
    },
    {
        "key": 2,
        "label": "Register"
    },
  
]
  console.log("itm",item);
  return (
    <BrowserRouter>
     <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        items={item}
      />
    </Header>
    <Content
      style={{
        padding: '0 50px',
      }}
    >
    <Routes>
      <Route path="/" element={<Login />}  />
      <Route path="/register" element={<Register/>}  />
      <Route path="/product/:id" element={<Product />}  />
      <Route path="/products" element={<Products />}  />
      </Routes>
    </Content>
    <Footer
      style={{
        textAlign: 'center',
      }}
    >
      Ant Design ©2022
    </Footer>
  </Layout>
    </BrowserRouter>
  )
}

export default MainLayout

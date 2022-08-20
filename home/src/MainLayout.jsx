import React from 'react'
import { BrowserRouter, Navigate, Route, Routes,Link} from "react-router-dom";
import { Breadcrumb, Layout, Menu } from 'antd';
import Login from "login/Login";
import Register from "login/Register";
import Product from "pdp/Product";
import Products from './Pages/Products';
const { Header, Content, Footer } = Layout;
import { QueryClient, QueryClientProvider } from "react-query";
import { getStorage } from './helper/apiHelper';
import { tokenvalue } from 'login/localStorage';
// import { useNavigate} from "react-router-dom";
const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnmount: false,
        refetchOnReconnect: false,
        retry: false,
        staleTime: 5*60*1000,
      },
    },
  });
const MainLayout = () => {
  // const navigate=useNavigate();
  const token=tokenvalue();
  console.log("token",token);
const item=[
    {
        "key": 1,
        "label": "Login",
        "path":"/"
    },
    {
        "key": 2,
        "label": "Register",
        "path":"/register"
    },
  
]
const item2=[
  {
      "key": 1,
      "label": "Products",
      "path":"/register"
  },
  {
      "key": 2,
      "label": "Logout",
      "path":"/"
  },

]
  console.log("itm",item);
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
     <Layout className="layout">
    <Header>
      <div className="logo" />
      {token ===null ?
      <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['1']}
      items={item}
    />:
    <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        items={item2}
      />
      }
      
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
    </QueryClientProvider>
  )
}

export default MainLayout

import React from 'react'

import { Layout,Button } from "antd";
import { Col, Row } from 'antd';
const { Header, Content } = Layout;
const HeaderComponent = () => {
  return (
    <Row>
    <Col>
    Register
    </Col>
    <Col>
    Login
    </Col>
  </Row>
  )
}

export default HeaderComponent
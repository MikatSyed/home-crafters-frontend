import React from "react";
import { Layout, Menu, Row, Col } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

const { Footer } = Layout;

const AppFooter = () => {
  return (
    <footer className="footer">
    <div className="container">
      <Row >
        <Col className="footer-col"  xs={{span: 24 }} sm={{span: 24}} md={{span: 12}} lg={{span: 6}}>
          <h4>company</h4>
          <ul>
            <li><a href="#">about us</a></li>
            <li><a href="#">our services</a></li>
            <li><a href="#">privacy policy</a></li>
            <li><a href="#">affiliate program</a></li>
          </ul>
        </Col>
        <Col className="footer-col"  xs={{span: 24 }} sm={{span: 24}} md={{span: 12}} lg={{span: 6}}>
          <h4>get help</h4>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">shipping</a></li>
            <li><a href="#">returns</a></li>
            <li><a href="#">order status</a></li>
            <li><a href="#">payment options</a></li>
          </ul>
        </Col>
        <Col className="footer-col"  xs={{span: 24 }} sm={{span: 24}} md={{span: 12}} lg={{span: 6}}>
          <h4>online shop</h4>
          <ul>
            <li><a href="#">watch</a></li>
            <li><a href="#">bag</a></li>
            <li><a href="#">shoes</a></li>
            <li><a href="#">dress</a></li>
          </ul>
        </Col>
        <Col className="footer-col"   xs={{span: 24 }} sm={{span: 24}} md={{span: 12}} lg={{span: 6}}>
          <h4>follow us</h4>
          <div className="social-links">
            <a href="#"><FacebookOutlined/></a>
            <a href="#"><TwitterOutlined/></a>
            <a href="#"><InstagramOutlined/></a>
            <a href="#"><LinkedinOutlined/></a>
          </div>
        </Col>
      </Row>
    </div>
 </footer>
  );
};

export default AppFooter;

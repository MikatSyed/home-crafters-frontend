"use client"
import React from 'react';
import { Row, Col, Card } from 'antd';
import hero from "../../../assets/troy-mortier-FW1XhtGsdBA-unsplash (1).jpg"
import Image from 'next/image';

const AboutUsPage = () => {
  return (
    <div style={{marginTop:'100px'}}>
      <Row gutter={24}>
        <Col xs={22} sm={22} md={16} lg={16} xl={16} className="about-us-content">
        <Card>
        <h1>About Us</h1>
          <p>
            Welcome to our company, where we are passionate about delivering high-quality products and services to our
            valued customers. With years of experience and a dedicated team, we aim to exceed your expectations in every
            way.
          </p>
          <p>
            Our mission is to provide innovative solutions that meet your needs and help you achieve your goals. We
            take pride in our commitment to excellence and are dedicated to building lasting relationships with our
            clients.
          </p>
          <p>
            At our company, we focus on continuous improvement, sustainability, and customer satisfaction. We believe
            in transparency, honesty, and integrity in all our business practices. Your trust is important to us, and we
            work diligently to maintain it.
          </p>
          <p>
            As a forward-thinking organization, we are constantly exploring new ways to serve you better. Our team is
            composed of experts in their respective fields who are passionate about what they do. Whether it's product
            development, customer support, or community engagement, we're committed to delivering excellence.
          </p>

        </Card>
        </Col>
        <Col xs={22} sm={22} md={8} lg={8} xl={8}>
          <Image src={hero} alt="About Us" width={300} height={300}/>
        </Col>
      </Row>
    </div>
  );
};

export default AboutUsPage;

"use client"
import { CaretRightOutlined } from '@ant-design/icons';
import { Collapse, Col, Row, theme } from 'antd';
import type { CSSProperties } from 'react';
import image from "../../assets/Shrug-pana.png";
import { useFaqsQuery } from '@/redux/api/faqApi';
import Image from 'next/image';

const { Panel } = Collapse;

const FaqSection = () => {
    const { data } = useFaqsQuery(undefined);
    const { token } = theme.useToken();
  
    const panelStyle: React.CSSProperties = {
      marginBottom: 24,
      background: token.colorFillAlter,
      borderRadius: token.borderRadiusLG,
      border: 'none',
    };
  
    const getItems = (panelStyle: CSSProperties) => {
      if (!data) return [];
  
      return data?.data?.map((faq: any) => (
        <Panel
          key={faq.id}
          header={
            <Row justify="space-between" align="middle">
              <Col>
                <b>{faq.question}</b>
              </Col>
              <Col></Col>
            </Row>
          }
          style={panelStyle}
        >
          <p>{faq.answer}</p>
        </Panel>
      ));
    };
    return (
        
        <section className='footerContact' >
      <div className='container'>
        <Row gutter={16} justify="center">
          <Col xs={24} sm={24} md={12} lg={12}>
            <div className="left-content">
              <h1>Frequently Asked Questions</h1>
              <p>We will help you grow your career and knowledge.</p>
              <Image src={image} alt="" layout="responsive" />
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12}>
            <div className="right-content">
              <Collapse
                bordered={false}
                defaultActiveKey={
                  data ? data?.data?.map((faq:any) => faq.id.toString()) : []
                }
                expandIcon={({ isActive }) => (
                  <CaretRightOutlined rotate={isActive ? 90 : 0} />
                )}
                style={{ background: token.colorBgContainer }}
              >
                {getItems(panelStyle)}
              </Collapse>
            </div>
          </Col>
        </Row>
      </div>
    </section>
        
    );
};

export default FaqSection;
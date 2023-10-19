"use client"

import { CaretRightOutlined  } from '@ant-design/icons';
import {  Collapse, Col, Row, theme } from 'antd';
import type { CSSProperties } from 'react';
import BreadCrumb from '@/components/UI/BreadCrumb';
import ActionBar from '@/components/UI/ActionBar';

import {  useFaqsQuery } from '@/redux/api/faqApi';



const { Panel } = Collapse;

const FaqPage = () => {
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
              <span>{faq.question}</span>
            </Col>
            <Col>
           
            </Col>
          </Row>
        }
        style={panelStyle}
      >
        <p>{faq.answer}</p>
      </Panel>
    ));
  };



  return (
    <>
      <BreadCrumb items={[
        { label: 'Home', link: '/' },
        { label: 'Faq', link: '/faq' }
        
        ]} />
      <ActionBar title="FAQ List" />

      <h1
      style={{
        textAlign: 'center',
        fontSize: '30px',
        margin: '30px 0px',
      }}
    >
      FAQ Section
    </h1>
   

      <Collapse
        bordered={false}
        defaultActiveKey={data ? data?.data?.map((faq: any) => faq.id.toString()) : []}
        expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
        style={{ background: token.colorBgContainer }}
      >
        {getItems(panelStyle)}
      </Collapse>
    </>
  );
};

export default FaqPage;

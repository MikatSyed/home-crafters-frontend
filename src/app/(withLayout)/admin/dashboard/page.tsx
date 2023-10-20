"use client"
import React from 'react';
import { ArrowDownOutlined, ArrowUpOutlined, CalendarOutlined, SnippetsOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic } from 'antd';
import { useGetStatisticsQuery } from '@/redux/api/bookingApi';



const Dashboard = () => {
  const {data} = useGetStatisticsQuery(undefined)
  const statistic = data?.data;
  return (
    <>
      <Row gutter={16}>
    <Col span={12}>
      <Card bordered={false}>
        <Statistic
          title="Total User"
          value={statistic?.totalUsers}
    
          valueStyle={{ color: '#3f8600' }}
          prefix={<UsergroupAddOutlined />}
         
        />
      </Card>
    </Col>
    <Col span={12}>
      <Card bordered={false}>
        <Statistic
          title="Total Service"
          value={statistic?.totalServices}
         
          valueStyle={{ color: '#3f8600' }}
          prefix={<SnippetsOutlined />}
         
        />
      </Card>
    </Col>

    <Col span={12} style={{marginTop:"20px"}}>
      <Card bordered={false}>
        <Statistic
          title="Total Booking"
          value={statistic?.totalBookings}
         
          valueStyle={{ color: '#3f8600' }}
          prefix={<CalendarOutlined />}
        
        />
      </Card>
    </Col>
  </Row>
    </>
  );
};

export default Dashboard;
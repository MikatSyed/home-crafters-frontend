"use client"
import { Card, Typography, Button, Row, Col, Tag } from 'antd';
import {  CalendarOutlined } from '@ant-design/icons';
import BreadCrumb from '@/components/UI/BreadCrumb';
import ActionBar from '@/components/UI/ActionBar';

import { useBlogQuery, useBlogsQuery } from '@/redux/api/blogApi';
import Image from 'next/image';  // Import Image from 'next/image'
const { Title, Paragraph } = Typography;
import dayjs from "dayjs";



type IDParams = {
    params:any
}
const BlogCard = ({params}:IDParams) => {
    const {id} = params;

  const { data } = useBlogQuery(id);
  const blog = data?.data;




  return (
    <>
      <BreadCrumb
        items={[
          {
            label: "Home",
            link: "/",
          },
          {
            label: "Blog",
            link: "/blog",
          },
        ]}
      />
      <ActionBar title="Blog List"></ActionBar>

    
        <Card key={blog?.id} style={{ marginBottom: '20px' }}>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={8} md={8} lg={6}>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
                <Image src={blog?.blogImg[0]} alt="Blog Cover" width={200} height={200} />
              </div>
            </Col>
            <Col xs={24} sm={16} md={16} lg={18} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <Tag icon={<CalendarOutlined />} color="default">{dayjs(blog?.createdAt).format("MMM D, YYYY hh:mm A")}</Tag>
                <Title level={4}>{blog?.title}</Title>
                <Paragraph>
                  {blog?.content}
                </Paragraph>
              </div>
            
            </Col>
          </Row>
        </Card>
     
    </>
  );
};

export default BlogCard;

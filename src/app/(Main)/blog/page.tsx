"use client"
import { Card, Typography, Row, Col, Tag } from 'antd';
import {  CalendarOutlined } from '@ant-design/icons';
import BreadCrumb from '@/components/UI/BreadCrumb';
import ActionBar from '@/components/UI/ActionBar';
import { useBlogsQuery } from '@/redux/api/blogApi';
import Image from 'next/image'; 
const { Title, Paragraph } = Typography;
import dayjs from "dayjs";


const BlogCard = () => {

  const { data } = useBlogsQuery(undefined);




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

      {data?.data?.map((blog:any) => (
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
      ))}
    </>
  );
};

export default BlogCard;

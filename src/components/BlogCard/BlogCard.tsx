"use client"
import { Card, Typography, Row, Col, Tag } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';
import BreadCrumb from '@/components/UI/BreadCrumb';
import ActionBar from '@/components/UI/ActionBar';
import Link from "next/link";
import Image from 'next/image';
import { useBlogsQuery } from '@/redux/api/blogApi';
import dayjs from "dayjs";
import { Toaster } from 'react-hot-toast';

const { Title, Paragraph } = Typography;

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
      <ActionBar title="Blog List" />
      <Toaster position="top-right" reverseOrder={false} />

      <Row gutter={16}>
        {data?.data?.map((blog: any) => (
          <Col key={blog?.id} xs={24} sm={12} md={8} lg={6}>
           <Link href={`/blog/${blog.id}`}>
           <Card style={{ marginBottom: '20px' }} hoverable>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
                <Image src={blog?.blogImg[0]} alt="Blog Cover" width={200} height={200} />
              </div>
              <Tag icon={<CalendarOutlined />} color="default">
                {dayjs(blog?.createdAt).format("MMM D, YYYY hh:mm A")}
              </Tag>
              <Title level={4}>{blog?.title}</Title>
             
            </Card>
           </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default BlogCard;

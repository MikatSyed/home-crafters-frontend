"use client"
import { Card, Typography, Button, Row, Col, Tag } from 'antd';
import { EditOutlined, DeleteOutlined, CalendarOutlined } from '@ant-design/icons';
import BreadCrumb from '@/components/UI/BreadCrumb';
import ActionBar from '@/components/UI/ActionBar';
import Link from "next/link";
import { useBlogsQuery, useDeleteBlogMutation } from '@/redux/api/blogApi';
import Image from 'next/image';  
const { Title, Paragraph } = Typography;
import dayjs from "dayjs";
import { useState } from 'react';
import ConfirmationModal, { ConfirmationModalProps } from '@/components/ConfirmationModal/ConfirmationModal';
import toast, { Toaster } from 'react-hot-toast';
import { FaPlus } from 'react-icons/fa6';
const BlogCard = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [id, setId] = useState<string>('');
  const { data } = useBlogsQuery(undefined);
  const [deleteBlog] = useDeleteBlogMutation();


  const handleOk = async () => {
    console.log(id);
    const res = await deleteBlog(id).unwrap();
    setIsModalVisible(false);
    toast(res?.message, {
      icon: <span style={{ color: 'green' }}>✔</span>,
      style: {
        borderRadius: '10px',
        background: '#FFBF00',
        color: '#fff',
      },
    });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  
  const modalProps: ConfirmationModalProps = {
    title: 'Do you Want to delete these items?',
    content: "You won't be able to revert this!",
    onOk: handleOk,
    onCancel: handleCancel,
    visible: isModalVisible,
  };

  return (
    <>
      <BreadCrumb
        items={[
          {
            label: "admin",
            link: "/admin",
          },
        ]}
      />
        <div style={{display:'flex', justifyContent:'space-between'}}>
  
  <div>
  <ActionBar title="Service List"/>
  </div>
  <div> 
 <Link href="/admin/blog/create">

 <button className="btn"
   >
   <FaPlus/>Add Blog</button>
 </Link>
   </div>
 </div>
     

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
              <div style={{ textAlign: 'right' }}>
              <Link href={`/admin/blog/edit/${blog?.id}`}> 
              <Button type="primary" icon={<EditOutlined />} style={{ marginRight: '8px' }}>
                  Edit 
                </Button>
              </Link>
                <Button type="primary" danger icon={<DeleteOutlined />}  onClick={() => {
                    setIsModalVisible(true);
                    setId(blog?.id);
                  }}>
                  Delete
                </Button>
              </div>
            </Col>
          </Row>
        </Card>
      ))}
    </>
  );
};

export default BlogCard;

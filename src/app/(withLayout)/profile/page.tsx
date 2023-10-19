"use client"
import { Card, Avatar, Row, Col, Button } from 'antd';
import { Toaster } from 'react-hot-toast';
import { useLoggedUserQuery } from '@/redux/api/userApi';
import { EditOutlined } from '@ant-design/icons';
import Link from 'next/link';


const { Meta } = Card;

const ProfilePage = () => {
  const { data } = useLoggedUserQuery(undefined);
 

  // Check if user data is available
  const user = data?.data;
  const profileImg = user?.profileImg;
  const lastProfileImg = profileImg && profileImg.length > 0 ? profileImg[profileImg.length - 1] : null;

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div style={{ padding: '20px' }}>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={24} md={8}>
            <Card style={{ width: '100%' }}>
              {/* Render user information if available */}
              {user && (
                <Meta
                  avatar={<Avatar size={64} src={lastProfileImg} />} 
                  title={user.name}
                  description={user.role}
                />
              )}
            </Card>
          </Col>
          <Col xs={24} sm={24} md={16}>
            <Card style={{ width: '100%' }}>
              <Row justify="end" style={{ marginBottom: '16px' }}>
               <Link href={`/profile/edit/${user?.id}`} >
               <Button icon={<EditOutlined />} type="primary">
                  Edit Profile
                </Button>
               </Link>
              </Row>
              <h2>About Me</h2>
              <p>{user ? user.address : 'Loading...'}</p>
              <h2>Contact Information</h2>
              <p>Email: {user ? user.email : 'Loading...'}</p>
              <p>Phone: {user ? user.contactNo : 'Loading...'}</p>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ProfilePage;

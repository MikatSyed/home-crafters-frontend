"use client"
import { Card, Avatar, Row, Col, Button, message } from 'antd';
import toast, { Toaster } from 'react-hot-toast';
import { useLoggedUserQuery, useUpdateUserMutation } from '@/redux/api/userApi';
import { EditOutlined } from '@ant-design/icons';
import Link from 'next/link';
import FormTextArea from '@/components/Forms/FormTextArea';
import FormInput from '@/components/Forms/FormInput';
import Form from '@/components/Forms/Form';
import { yupResolver } from '@hookform/resolvers/yup';
import { adminUpdateSchema } from '@/schemas/admin';
import dayjs from "dayjs";
import Image from 'next/image';
import { FaCalendarAlt } from 'react-icons/fa';
import { useChangePasswordMutation } from '@/redux/api/authApi';



const ProfilePage = () => {
  const [changePassword] = useChangePasswordMutation()
  const { data } = useLoggedUserQuery(undefined);


  // Check if user data is available
  const user = data?.data;
  const id = user?.id;
  
  const onSubmit = async (values: any) => {
    console.log(values);
    try {
    const res = await changePassword({id,body:values}).unwrap();
    toast(res?.message, {
      icon: <span style={{ color: "green" }}>✔</span>,
      style: {
        borderRadius: "10px",
        background: "#27ae60",
        color: "#fff",
      },
    });
    console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} />
     
<div style={{  display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Row gutter={[16, 16]}>
     
          <Col xs={24} sm={24} md={16}>
            <Card style={{ width: '100%' }}>
              <Row justify="end" style={{ marginBottom: '16px' }}>
               
              </Row>
              <Form submitHandler={onSubmit}>
          <div
           
          >
            <p
              style={{
                fontSize: "18px",
                marginBottom: "10px",
              }}
            >
              User Information
            </p>
            <Row >
              <Col
                className="gutter-row"
                md={20}
                sm={20}
                xs={20}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type="text"
                  name="oldPassword"
                  size="large"
                  label="Old Password"
                />
              </Col>
             
              <Col
                className="gutter-row"
                md={20}
                sm={20}
                xs={20}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type="test"
                  name="newPassword"
                  size="large"
                  label="New Password"
                />
              </Col>

              
            </Row>
          </div>
      
         <div style={{display:'flex',justifyContent:'center' ,padding:'0 5px'}}>
         <button type="submit" className='btn' >
          Change Password
          </button>
         </div>
        </Form>
              
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ProfilePage;

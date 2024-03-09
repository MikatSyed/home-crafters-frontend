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

const { Meta } = Card;

const ProfilePage = () => {
  const { data } = useLoggedUserQuery(undefined);
  const [updateUser] = useUpdateUserMutation();

  // Check if user data is available
  const user = data?.data;
  const id = user?.id;
  console.log(id);
  const profileImg = user?.profileImg;
  const lastProfileImg = profileImg && profileImg.length > 0 ? profileImg[profileImg.length - 1] : null;


  const onSubmit = async (values: any) => {
    const obj = {...values}
    obj.role = "user"
   
   message.loading("Creating..")
   
    try {
      console.log(values);
     const res =  await updateUser({id,body:values}).unwrap()
     
      toast(res?.message,
        {
          icon:  <span >✔</span>,
          style: {
            borderRadius: '10px',
            background: '#27ae60',
            color: '#fff',
          }
        })
    } catch (err: any) {
      toast(err?.data,
        {
          icon:  <span style={{color:"white"}}>❌</span>,
          style: {
            borderRadius: '10px',
            background: 'red',
            color: '#fff',
          }
        })
    }
  };


 

  
  const defaultValues = {
    name: user?.name || "",
    email: user?.email || "",
    contactNo: user?.contactNo || "",
    address: user?.address || "",
}
  
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div style={{ padding: '20px' }}>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={24} md={8}>
           
                <Card className="card-container">
                {user && (
                  <div className="user-info">
                    <Image  alt="profile" height={130} width={130} src={lastProfileImg} />
                    <h2>{user.name}</h2>
                  
                    <p>{user.role}</p>
                    <span className=""> <FaCalendarAlt size={20} style={{marginRight:'5px'}}/>{dayjs(user.createdAt).format("MMM D, YYYY hh:mm A")}</span>
                   
                  </div>
                )}
              </Card>
                <Card className="card-container">
                 <button>Change Password</button>
              </Card>
              
          </Col>
          <Col xs={24} sm={24} md={16}>
            <Card style={{ width: '100%' }}>
              <Row justify="end" style={{ marginBottom: '16px' }}>
               
              </Row>
              <Form submitHandler={onSubmit} defaultValues={defaultValues} resolver={yupResolver(adminUpdateSchema)}>
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
                  name="name"
                  size="large"
                  label="Name"
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
                  type="email"
                  name="email"
                  size="large"
                  label="Email address"
                />
              </Col>

                   <Col
                className="gutter-row"
                md={20}
                sm={12}
                xs={20}
                style={{
                  marginBottom: "10px",
                 
                }}
              >
                <FormInput
                  type="number"
                  name="contactNo"
                  size="large"
                  label="Contact No."
                />
              </Col>           

              <Col md={20} sm={20} xs={20} style={{ margin: "10px 0" }}>
                <FormTextArea
                  name="address"
                  label="Present address"
                  rows={4}
                />
              </Col>
            </Row>
          </div>
      
         <div style={{display:'flex',justifyContent:'center' ,padding:'0 5px'}}>
         <button type="submit" className='btn' >
            Update Profile
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

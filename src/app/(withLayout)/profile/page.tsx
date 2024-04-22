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
import { useState } from 'react';
import { FaCamera, FaPlus } from 'react-icons/fa6';
import Camera from "../../../assets/photo.png"
const { Meta } = Card;
interface ProductImage {
  id: number;
  url: string;
}
const ProfilePage = () => {
  const { data } = useLoggedUserQuery(undefined);
  const [updateUser] = useUpdateUserMutation();
  const [images, setImages] = useState<ProductImage[]>([]);
  const [imagesPreview, setImagesPreview] = useState<string[]>([]);
  const [updatedImage, setUpdatedImage] = useState('');
  // Check if user data is available
  const user = data?.data;
  const id = user?.id;
  const profileImg = user?.profileImg;
  const lastProfileImg = profileImg && profileImg.length > 0 ? profileImg[profileImg.length - 1] : null;


  const onSubmit = async (values: any) => {
    const obj = {...values}
    
    images.forEach((image) => {
      obj.profileImg = image?.url;
    });
   
   message.loading("Creating..")

   
    try {
      console.log(obj);
     const res =  await updateUser({id,body:obj}).unwrap()
     
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

let counter = 0;

const uniqueId = (): number => {
  counter += 1;
  return counter;
};
//@ts-ignore
const createproductImagesChange = (
  e: React.ChangeEvent<HTMLInputElement>
) => {
  let files: File[] = Array.from(e.target.files || []);

  // Assuming images and imagesPreview are properly typed arrays
  setImages((oldImages: ProductImage[]) => []);
  setImagesPreview((oldImages: string[]) => []);

  files.forEach((file: File) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setImagesPreview((oldImages: string[]) => [
          ...oldImages,
          reader.result as string,
        ]);
        // Assuming you have a valid way to create a ProductImage from the reader result
        const newProductImage: ProductImage = {
          id: uniqueId(), // replace with a function to generate unique IDs
          url: reader.result as string,
        };
        setImages((oldImages: ProductImage[]) => [
          ...oldImages,
          newProductImage,
        ]);
        setUpdatedImage(reader.result as string);
      }
    };

    reader.readAsDataURL(file);
  });
};



  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div style={{ padding: '20px' }}>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={24} md={8}>
           
                <Card className="card-container">
                {user && (
                  <div className="user-info">
      <div style={{ position: "relative", width: "130px", height: "130px" }}>
     
  <div
    style={{
      width: "130px",
      height: "130px",
      backgroundImage: `url(${updatedImage || lastProfileImg})`, // Set the background image
      backgroundSize: "cover",
      backgroundPosition: "center",
      borderRadius:'50%'
    }}
  ></div>
  {/* Input file */}
  <input
    accept="image/*"
    multiple
    type="file"
    name="avatar"
    onChange={createproductImagesChange}
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      opacity: 0,
      cursor: "pointer",
    }}
  />
  <div
       style={{marginTop:'-7rem',marginLeft:'6rem'}}
      >
      
      <Image src={Camera} alt="camera" height={30} width={30}/>
       
      </div>
</div>

                    <h2>{user.name}</h2>
                  
                    <p>{user.role}</p>
                    <span className=""> <FaCalendarAlt size={20} style={{marginRight:'5px'}}/>{dayjs(user.createdAt).format("MMM D, YYYY hh:mm A")}</span>
                   
                  </div>
                )}
              </Card>
                <Card className="card-container">
                <Link href="/profile/change-password"> <button>Change Password</button></Link>
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

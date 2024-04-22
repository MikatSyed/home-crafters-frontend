"use client";

import { Button, Col, Input, Modal, Row } from "antd";
import Link from "next/link";
import {
  DeleteOutlined,
  EditOutlined,
  ReloadOutlined,

} from "@ant-design/icons";

import dayjs from "dayjs";

import BreadCrumb from "@/components/UI/BreadCrumb";
import ActionBar from "@/components/UI/ActionBar";
import UMTable from "@/components/UI/Table";
import { useDeleteUserMutation, useUsersQuery } from "@/redux/api/userApi";
import ConfirmationModal, { ConfirmationModalProps } from "@/components/ConfirmationModal/ConfirmationModal";
import toast, { Toaster } from "react-hot-toast";
import { FaPlus } from "react-icons/fa";
import { useRegistrationMutation } from "@/redux/api/authApi";
import { yupResolver } from "@hookform/resolvers/yup";
import { adminSchema } from "@/schemas/admin";
import FormInput from "@/components/Forms/FormInput";
import Image from "next/image";
import FormTextArea from "@/components/Forms/FormTextArea";
import Form from "@/components/Forms/Form";
import React, { useState } from 'react';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';


interface ProductImage {
  id: number;
  url: string;
}
const AdminPage = () => {
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [id,setId] = useState<string>("");
  const [isCreateModalVisible, setIsCreateModalVisible] = useState(false);
  const [isReviewModalVisible, setIsReviewModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;


  
  const { data, isLoading } = useUsersQuery({ ...query })
  const [ deleteUser] = useDeleteUserMutation();
  const users:any = data?.users;
  const res = users?.data?.filter((data:any)=> data.role === "user" )
  const meta = data?.meta;


  const handleOk = async () => {
    console.log(id);
    const res = await deleteUser(id).unwrap()
    setIsModalVisible(false);
    toast(res?.message,
    {
      icon:  <span style={{color:"green"}}>✔</span>,
      style: {
        borderRadius: '10px',
        background: '#FFBF00',
        color: '#fff',
      }
    })
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  
  const handleReviewModalCancel = () => {
    setIsReviewModalVisible(false);
  };



  const handleCreate = (values: any) => {
    console.log(values);
    // Perform your create user action here
    setIsCreateModalVisible(false);
  };

  const [images, setImages] = useState<ProductImage[]>([]);
  // console.log(images);

  const [imagesPreview, setImagesPreview] = useState<string[]>([]);
  const [registration] = useRegistrationMutation();

  // const departments:IDepartment[]= data?.departments;

  const onSubmit = async (values: any) => {
    const obj = { ...values };
    obj.role = "user";
    images.forEach((image) => {
      obj.profileImg = image?.url;
    });
    message.loading("Creating..");

    try {
      const res = await registration(obj).unwrap();
      setImages([]);
      setImagesPreview([]);
      toast(res?.message, {
        icon: <span style={{ color: "green" }}>✔</span>,
        style: {
          borderRadius: "10px",
          background: "#FFBF00",
          color: "#fff",
        },
      });
    } catch (err: any) {
      toast(err?.data, {
        icon: <span style={{ color: "white" }}>❌</span>,
        style: {
          borderRadius: "10px",
          background: "red",
          color: "#fff",
        },
      });
    }
  };
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
        }
      };

      reader.readAsDataURL(file);
    });
  };

  const columns = [
  
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
    },
   
    {
      title: "contactNo",
      dataIndex: "contactNo",
    },
   
    {
      title: "Created at",
      dataIndex: "createdAt",
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      },
      sorter: true,
    },
    {
      title: "Action",
      dataIndex: "id",
      render: function (data: any) {
        return (
          <>
            {/* <Link href={`/super_admin/admin/details/${data.id}`}>
              <Button onClick={() => console.log(data)} type="primary">
                <EyeOutlined />
              </Button>
            </Link> */}
            <Link href={`/admin/user/edit/${data}`}>
              <Button 
                style={{
                  margin: "0px 3px",
                }}
                onClick={() => console.log(data)}
                
              >
                <EditOutlined />Edit
              </Button>
            </Link>
            <Button
              onClick={() =>  {
                setIsModalVisible(true)
                setId(data)
              }
              }
              type="dashed"
              danger
            >
              <DeleteOutlined />
            </Button>
          </>
        );
      },
    },
  ];
  const onPaginationChange = (page: number, pageSize: number) => {
    
    setPage(page);
    setSize(pageSize);
  };
  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
    setSortBy(field as string);
    setSortOrder(order === "ascend" ? "asc" : "desc");
  };

  const resetFilters = () => {
    setSortBy("");
    setSortOrder("");
  
  };

  const modalProps: ConfirmationModalProps = {
    title: 'Do you Want to delete these items?',
    content: "You won't be able to revert this!",
    onOk: handleOk,
    onCancel: handleCancel,
    visible: isModalVisible
  };

  return (
    <div>
      <BreadCrumb
        items={[
          {
            label: "admin",
            link: "/admin",
          },
        ]}
      />
        <Toaster  position="top-right"
  reverseOrder={false} />
     
      <ConfirmationModal {...modalProps} />
      <Modal
  title="User Information"
  visible={isReviewModalVisible}
  onCancel={handleReviewModalCancel}
  footer={null}
>
  <Form submitHandler={onSubmit} resolver={yupResolver(adminSchema)}>
    <div
      style={{
        border: "1px solid #d9d9d9",
        borderRadius: "5px",
        padding: "15px",
        marginBottom: "10px",
      }}
    >
    
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
          <FormInput type="text" name="name" size="large" label="Name" />
        </Col>

        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
          <FormInput
            type="email"
            name="email"
            size="large"
            label="Email address"
          />
        </Col>

        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
          <FormInput
            type="password"
            name="password"
            size="large"
            label="Password"
          />
        </Col>

        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
          <FormInput
            type="number"
            name="contactNo"
            size="large"
            label="Contact No."
          />
        </Col>

     

        <Col span={24}>
          <FormTextArea
            name="address"
            label="Present address"
            rows={4}
            // style={{ marginBottom: "10px" }}
          />
        </Col>

        <Col span={24}>
  <div style={{ display: "flex", flexDirection: "row" }}>
    <div style={{ position: "relative", width: "100px", height: "100px" }}>
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
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100px",
          height: "100px",
          border: "1px dashed #27ae60",
          borderRadius: "5px",
          backgroundColor: "#f9f9f9",
          fontSize: "14px",
          fontWeight: "bold",
        }}
      >
        <p><FaPlus/></p>
        <p>Upload</p>
      </div>
    </div>
    <div style={{padding:'0 5px'}}>
  
      {imagesPreview.map((image, index) => (
        <div key={index}>
          <Image
            src={image}
            alt="product Preview"
            height={100}
            width={100}
          />
        </div>
      ))}
   
    </div>
  
  </div>
</Col>
     


      </Row>
    </div>

  <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
  <button type="submit" className="btn" style={{ marginTop: "10px" }}>
      Add User
    </button>
  </div>
  </Form>
</Modal>

      
     
      <div style={{display:'flex', justifyContent:'space-between'}}>
  
       <div>
       <ActionBar title="User List"/>
       </div>
       <div> 
      <Link href="/admin/user/create">

      <button className="btn"
        >
        <FaPlus/>Add User</button>
      </Link>
        
      
        {(!!sortBy || !!sortOrder ) && (
          <Button
            style={{ margin: "0px 5px" }}
            type="primary"
            onClick={resetFilters}
          >
            <ReloadOutlined />
          </Button>
        )}
        </div>
      </div>

   <div style={{padding: '5px 0px'}}>
   <Input
          size="large"
          placeholder="Search"
          // onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: "20%",
          }}
        /> 
   </div>

      <UMTable
        loading={isLoading}
        columns={columns}
        dataSource={res}
        pageSize={size}
        totalPages={meta?.total}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
        scroll={true}
      />
    </div>
  );
};

export default AdminPage;

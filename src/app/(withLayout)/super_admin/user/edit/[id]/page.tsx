"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormTextArea from "@/components/Forms/FormTextArea";
import BreadCrumb from "@/components/UI/BreadCrumb";
import { useRegistrationMutation } from "@/redux/api/authApi";
import { useUpdateUserMutation, useUserByIdQuery } from "@/redux/api/userApi";
import {  adminUpdateSchema } from "@/schemas/admin";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row, message } from "antd";
import toast, { Toaster } from "react-hot-toast";

type IDProps = {
  params: any;
};
const EditPage = ({params}:IDProps) => {
  const {id} = params;
  const{data} = useUserByIdQuery(id)
  const [updateUser] = useUpdateUserMutation();
  const [registration] = useRegistrationMutation()
  
  // const departments:IDepartment[]= data?.departments;

  


  const onSubmit = async (values: any) => {
    const obj = {...values}
    obj.role = "user"
   
   message.loading("Creating..")
   
    try {
     const res =  await updateUser({id,body:values}).unwrap()
     
      toast(res?.message,
        {
          icon:  <span style={{color:"green"}}>✔</span>,
          style: {
            borderRadius: '10px',
            background: '#FFBF00',
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
    name: data?.data?.name || "",
    email: data?.data?.email || "",
    contactNo: data?.data?.contactNo || "",
    address: data?.data?.address || "",
}
  

  return (
    <>
      <BreadCrumb
        items={[
          {
            label: "admin",
            link: "/admin",
          },
          {
            label: "user",
            link: "/admin/user",
          },
        ]}
      />
       <Toaster  position="top-right"
  reverseOrder={false} />
      <h1>Edit User </h1>
      <div>
        <Form submitHandler={onSubmit} defaultValues={defaultValues} resolver={yupResolver(adminUpdateSchema)}>
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              marginBottom: "10px",
            }}
          >
            <p
              style={{
                fontSize: "18px",
                marginBottom: "10px",
              }}
            >
              User Information
            </p>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col
                className="gutter-row"
                md={8}
                sm={12}
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
                md={8}
                sm={12}
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
                md={8}
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

              <Col md={12} sm={20} xs={20} style={{ margin: "10px 0" }}>
                <FormTextArea
                  name="address"
                  label="Present address"
                  rows={4}
                />
              </Col>
            </Row>
          </div>
      
          <Button htmlType="submit" type="primary">
            Edit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default EditPage;

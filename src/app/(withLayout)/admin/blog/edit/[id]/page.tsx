"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormTextArea from "@/components/Forms/FormTextArea";
import BreadCrumb from "@/components/UI/BreadCrumb";
import {  useBlogQuery, useUpdateBlogMutation } from "@/redux/api/blogApi";
import { Button, Col, message } from "antd";
import toast, { Toaster } from "react-hot-toast";

type IDProps = {
  params: any;
};

const EditBlogPage = ({params}:IDProps) => {
  const {id} = params;
  const {data} = useBlogQuery(id)
  const [updateBlog] = useUpdateBlogMutation()
  
  const onSubmit = async (values: any) => {
    message.loading("Creating..");
   
    try {
     const res =  await updateBlog({id,body:values}).unwrap();
    
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
    title: data?.data?.title || "",
    content: data?.data?.content || "",
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
            label: "blog",
            link: "/admin/blog",
          },
        ]}
      />
       <Toaster  position="top-right"
  reverseOrder={false} />
      <h1>Update Blog</h1>
      <div>
        <Form submitHandler={onSubmit} defaultValues={defaultValues}>
        
          <Col md={20}
                sm={12}
                xs={20} style={{ margin: "10px 0" }}>
            <FormInput name="title" label="Title" />
          </Col>
          
          <Col  md={20}
                sm={12}
                xs={20} style={{ margin: "10px 0" }}>
                <FormTextArea name="content" label="Content" rows={8} />
              </Col>
      
          <Button htmlType="submit" type="primary">
            Update
          </Button>
        </Form>
      </div>
    </>
  );
};

export default EditBlogPage;

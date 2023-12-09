"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormTextArea from "@/components/Forms/FormTextArea";
import BreadCrumb from "@/components/UI/BreadCrumb";
import { usePostFeedBackMutation } from "@/redux/api/feedBackApi";

import { Button, Col, message } from "antd";
import toast, { Toaster } from "react-hot-toast";


const CreateUserPage = () => {
 

  const [postFeedBack] = usePostFeedBackMutation()
  

  const onSubmit = async (values: any) => {
    const obj = { ...values };
    
    message.loading("Creating..");
   
    try {
     const res =  await postFeedBack(obj).unwrap();
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
 


  return (
    <>
   
       <Toaster  position="top-right"
  reverseOrder={false} />
      <div style={{marginLeft:'50px',marginTop:'100px'}}>
      <h1>Post Feedback </h1>
        <Form submitHandler={onSubmit} >
        
          <Col md={10}
                sm={12}
                xs={20} style={{ margin: "10px 0" }}>
            <FormInput name="name" label="Name" />
          </Col>

          <Col md={10}
                sm={12}
                xs={20} style={{ margin: "10px 0" }}>
            <FormInput name="email" label="Email" />
          </Col>
          
          <Col  md={10}
                sm={12}
                xs={20} style={{ margin: "10px 0" }}>
                <FormTextArea name="feedback" label="Feedback" rows={8} />
              </Col>

           
            
          <button type="submit" className="btn2">
            Post
          </button>
        </Form>
      </div>
    </>
  );
};

export default CreateUserPage;

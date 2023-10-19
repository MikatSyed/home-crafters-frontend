"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormTextArea from "@/components/Forms/FormTextArea";
import BreadCrumb from "@/components/UI/BreadCrumb";
import { useAddFaqMutation } from "@/redux/api/faqApi";
import { Button, Col, Row, message } from "antd";
import toast, { Toaster } from "react-hot-toast";


const CreateFaqPage = () => {
 
  const [addFaq] = useAddFaqMutation()
  

  const onSubmit = async (values: any) => {
    const data = {...values}
   
    
   message.loading("Creating..")
   
    try {
     const res =  await addFaq(data).unwrap();
 
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
      <BreadCrumb
        items={[
          {
            label: "admin",
            link: "/admin",
          },
          {
            label: "faq",
            link: "/admin/faq",
          },
        ]}
      />
       <Toaster  position="top-right"
  reverseOrder={false} />
      <h1>Create FAQ</h1>
      <div>
        <Form submitHandler={onSubmit} >
        
          <Col md={15}
                sm={15}
                xs={20} style={{ margin: "10px 0" }}>
            <FormInput name="question" label="Question" />
          </Col>
          
          <Col  md={15}
                sm={15}
                xs={20} style={{ margin: "10px 0" }}>
                <FormTextArea name="answer" label="Answer" rows={4} />
              </Col>
       
      
          <Button htmlType="submit" type="primary">
            Add
          </Button>
        </Form>
      </div>
    </>
  );
};

export default CreateFaqPage;

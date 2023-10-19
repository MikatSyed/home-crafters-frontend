"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormTextArea from "@/components/Forms/FormTextArea";
import BreadCrumb from "@/components/UI/BreadCrumb";
import { useFaqQuery, useUpdateFaqMutation } from "@/redux/api/faqApi";
import { Button, Col, message } from "antd";
import toast, { Toaster } from "react-hot-toast";

type IDProps = {
  params: any;
};
const EditPage = ({params}:IDProps) => {
  const {id} = params;
  const{data} = useFaqQuery(id)
  const [updateFaq] = useUpdateFaqMutation();
  
  
  const onSubmit = async (values: any) => {
    const obj = {...values}
    obj.role = "user"
   
   message.loading("Creating..")
   
    try {
     const res =  await updateFaq({id,body:values}).unwrap()
     
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
    question: data?.data?.question || "",
    answer: data?.data?.answer || "",
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
            label: "faq",
            link: "/admin/faq",
          },
        ]}
      />
       <Toaster  position="top-right"
  reverseOrder={false} />
      <h1>Edit User </h1>
      <div>
      <Form submitHandler={onSubmit}  defaultValues={defaultValues}>
        
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
          Edit
        </Button>
      </Form>
      </div>
    </>
  );
};

export default EditPage;

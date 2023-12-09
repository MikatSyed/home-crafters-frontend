"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormTextArea from "@/components/Forms/FormTextArea";
import BreadCrumb from "@/components/UI/BreadCrumb";
import { useBookingQuery } from "@/redux/api/bookingApi";
import { usePostFeedBackMutation } from "@/redux/api/feedBackApi";
import { useInitialPaymentMutation } from "@/redux/api/paymentApi";
import { Button, Col, message } from "antd";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

type IDProps = {
  params: any;
};

const ConfirmBooking = ({ params }: IDProps) => {
  const { id } = params;
  console.log(id);
  const { data, isLoading } = useBookingQuery(id);
  console.log(data); 
 const router = useRouter()

 const [initialPayment] = useInitialPaymentMutation();
  // const booking:any = localStorage.getItem("booking")
  // const service = JSON.parse(booking);
  // console.log(service);
  // const price = service.price.toString()


 
//   const defaultValues = {
//     amount: price,
  
// }
const handleInitialPayment = async () => {
  const data = {
 amount: 2000,
name: "Mikat Syed",
email: "mikat@gmail.com",
userId:"86eaabb3-0891-4c0e-b5a9-c6a0704f6d3a",
bookingId:id,
address: "Muradpur,Chittagong",
phone: "01858832211"
  }
  try {
    // console.log("hello");
    const res = await initialPayment(data).unwrap();
    // console.log("clicked");
    console.log(res);
    router.push(res?.data);
  } catch (error) {}
};
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
      <h1>Post Payment </h1>
      
        
         
           
            
          <Button htmlType="submit" type="primary" onClick={handleInitialPayment}>
            Confirm Payment
          </Button>

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

export default ConfirmBooking;

"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import BreadCrumb from "@/components/UI/BreadCrumb";
import { usePostPaymentMutation } from "@/redux/api/paymentApi";
import { Button, Col, message } from "antd";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";


const CreateUserPage = () => {
 const router = useRouter()

  const [postPayment] = usePostPaymentMutation()
  // const booking:any = localStorage.getItem("booking")
  // const service = JSON.parse(booking);
  // console.log(service);
  // const price = service.price.toString()

  const onSubmit = async (values: any) => {
    let obj = { ...values };
    // obj.bookingId = service.bookingId;
    message.loading("Creating..");
   console.log(obj);
    try {
    //  const res =  await postPayment(obj).unwrap();
      toast("payment created successfully",
        {
          icon:  <span style={{color:"green"}}>✔</span>,
          style: {
            borderRadius: '10px',
            background: '#FFBF00',
            color: '#fff',
          }
        })
        router.push('/user/booking')
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
 
//   const defaultValues = {
//     amount: price,
  
// }
  
  return (
    <>
      <BreadCrumb
        items={[
          {
            label: "Home",
            link: "/",
          },
         
        ]}
      />
       <Toaster  position="top-right"
  reverseOrder={false} />
      <div style={{marginLeft:'50px',marginTop:'100px'}}>
      <h1>Post Payment </h1>
        <Form submitHandler={onSubmit} >
        
          <Col md={10}
                sm={12}
                xs={20} style={{ margin: "10px 0" }}>
            <FormInput name="amount" label="Amount" />
          </Col>
           
            
          <Button htmlType="submit" type="primary">
            Confirm Payment
          </Button>
        </Form>
      </div>
    </>
  );
};

export default CreateUserPage;

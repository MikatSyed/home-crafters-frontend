"use client";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { useBookingQuery } from "@/redux/api/bookingApi";
import { useInitialPaymentMutation } from "@/redux/api/paymentApi";
import {  Col, message } from "antd";
import { getSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

type IDProps = {
  params: any;
};

const ConfirmBooking = async({ params }: IDProps) => {
 const { id } = params;
 const { data, isLoading } = useBookingQuery(id);
 const router = useRouter()

 const [initialPayment] = useInitialPaymentMutation();
 const session: any = await getSession();
 const price = data?.data?.service?.price;
// const handleInitialPayment = async () => {
//   const data = {
//  amount: 2000,
// name: "Mikat Syed",
// email: "mikat@gmail.com",
// userId:"86eaabb3-0891-4c0e-b5a9-c6a0704f6d3a",
// bookingId:id,
// address: "Muradpur,Chittagong",
// phone: "01858832211"
//   }
//   try {
//     // console.log("hello");
//     const res = await initialPayment(data).unwrap();
//     // console.log("clicked");
//     console.log(res);
//     router.push(res?.data);
//   } catch (error) {}
// };



const onSubmit = async (values: any) => {
  const obj = { ...values };
  obj.userId = session?.userId;
  obj.bookingId = id;
  obj.amount = price;
  try {
    console.log(obj);
 
    const res = await initialPayment(obj).unwrap();
    router.push(res?.data);
      //   {
      //     icon:  <span style={{color:"green"}}>✔</span>,
      //     style: {
      //       borderRadius: '10px',
      //       background: '#FFBF00',
      //       color: '#fff',
      //     }
      //   })
    } catch (err: any) {
      // toast(err?.data,
      //   {
      //     icon:  <span style={{color:"white"}}>❌</span>,
      //     style: {
      //       borderRadius: '10px',
      //       background: 'red',
      //       color: '#fff',
      //     }
      //   })
    }
  };
  
  return (
    <>
     
       <Toaster  position="top-right"
  reverseOrder={false} />
  
     
      
        
         
           
            
          {/* <Button htmlType="submit" type="primary" onClick={handleInitialPayment}>
            Confirm Payment
          </Button> */}

    
     <div className="container padding">
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
    <Col md={10}
          sm={12}
          xs={20} style={{ margin: "10px 0" }}>
      <FormInput name="phone" label="Phone" />
    </Col>
    <Col md={10}
          sm={12}
          xs={20} style={{ margin: "10px 0" }}>
      <FormInput name="address" label="Address" />
    </Col>
         
    <button type="submit" className="btn2">
      Confirm Payment
    </button>
 
  </Form>
     </div>
        
    </>
  );
};

export default ConfirmBooking;

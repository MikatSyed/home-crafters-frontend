"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import BreadCrumb from "@/components/UI/BreadCrumb";
import { useBookingQuery } from "@/redux/api/bookingApi";
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
    console.log("hello");
    const res = await initialPayment(data).unwrap();
    console.log("clicked");
    console.log(res);
    router.push(res?.data);
  } catch (error) {}
};

  
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
      
        
         
           
            
          <Button htmlType="submit" type="primary" onClick={handleInitialPayment}>
            Confirm Payment
          </Button>
        
      </div>
    </>
  );
};

export default ConfirmBooking;

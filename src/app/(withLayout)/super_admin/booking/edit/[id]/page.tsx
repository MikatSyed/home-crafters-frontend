"use client";

import { bookingStatusOptions } from "@/app/constants/global";
import Form from "@/components/Forms/Form";
import FormSelectField from "@/components/Forms/FormSelectField";
import BreadCrumb from "@/components/UI/BreadCrumb";
import { useBookingQuery, useUpdateBookingMutation } from "@/redux/api/bookingApi";
import { Button, Col, Row, message } from "antd";
import toast, { Toaster } from "react-hot-toast";

type IDProps = {
  params: any;
};
const EditPage = ({params}:IDProps) => {
  const {id} = params;
  const{data} = useBookingQuery(id)
  console.log(data);
  const [updateBooking] = useUpdateBookingMutation();
  
  

  const onSubmit = async (values: any) => {
    const obj = {...values}
    obj.role = "user"
   
   message.loading("Creating...")
   
    try {
     const res : any =  await updateBooking({id,body:values}).unwrap()
     
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
            label: "Admin",
            link: "/admin",
          },
          {
            label: "Booking",
            link: "/admin/booking",
          },
        ]}
      />
       <Toaster  position="top-right"
  reverseOrder={false} />
      <h1>Edit Booking </h1>
      <div>
      <Form submitHandler={onSubmit} >
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
             Upcoming Booking Status
            </p>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
           

              <Col
          className="gutter-row"
          span={8}
          style={{
            marginBottom: "10px",
          }}
        >
          <FormSelectField
            size="large"
            name="status"
            options={bookingStatusOptions}
            label="Status"
            placeholder="Select"
          />
        </Col>
                 
            </Row>
          </div>

          <button type="submit"className="btn">
            Update 
          </button>
        </Form>
      </div>
    </>
  );
};

export default EditPage;

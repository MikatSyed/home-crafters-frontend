"use client"
import React, { useEffect, useState } from 'react';
import { Card, Typography, Row, Col, Button, message, Rate } from 'antd';
import { useServiceQuery } from '@/redux/api/servicesApi';
import Image from 'next/image';
import { useTimeSlotsQuery } from '@/redux/api/timeSlot';
import Form from '@/components/Forms/Form';
import FormDatePicker from '@/components/Forms/FormDatePicker';
import { useLoggedUserQuery } from '@/redux/api/userApi';
import { useAddBookingMutation, useCheckAvailableSlotQuery } from '@/redux/api/bookingApi';
import  { Dayjs } from "dayjs";
import AppNavbar from '@/components/UI/AppNavbar';
import AppFooter from '@/components/UI/AppFooter';
const { Meta } = Card;
import  { Toaster } from 'react-hot-toast';
import ReviewPage from '@/components/UI/ReviewPage';

type IDProps = {
  params: any;
};

const ServiceDetailsPage = ({ params }: IDProps) => {
  const { id } = params;
  const currentDate = new Date();
  let formattedDate  = currentDate.toISOString().split('T')[0];
  console.log(formattedDate);
  const [selectedSlotId, setSelectedSlotId] = useState(null);
  const [selectedDate, setSelectedDate] = useState<Dayjs | string>();
  if(selectedDate === undefined) {
    setSelectedDate(formattedDate)
  }


  const { data: sData, isLoading: serviceDataLoading } = useServiceQuery(id);
  const { data: slotD, isLoading: slotsLoading } = useTimeSlotsQuery(undefined);
  const { data: loginData } = useLoggedUserQuery(undefined);
  const [addBooking,{isSuccess} ] = useAddBookingMutation();
  const { data: checkAvailableSlotData } = useCheckAvailableSlotQuery(selectedDate);

  const onSubmit = async (data: any) => {
    console.log(data);
    if(data?.bookingDate === undefined){
      data.bookingDate = formattedDate
    }
    let booking = { ...data }
    booking.serviceId = id;
    booking.slotId = selectedSlotId;
    booking.userId = loginData?.data?.id
    try {
      let res = await addBooking(booking).unwrap();   
      console.log(res);
      message.success(res?.message);
      setSelectedSlotId(null)

    } catch (err: any) {
      console.log(err);
      message.error(err.data)

    }
  };
  useEffect(() => {
    
  }, [selectedDate ,selectedSlotId])


  const serviceData = sData?.data;
  const timeSlot = slotD?.data;
  let existingBookings = checkAvailableSlotData?.data
  const isSlotBooked = (slotId: any) => {
    console.log(slotId);
    return existingBookings?.some((booking:any) => booking.slotId === slotId);
  };

  const slotOptions = timeSlot?.map((slot : any) => {
    return {
      label: slot?.startTime,
      value: slot?.id,
    };
  });


  const handleDateChange = (date: Dayjs | null , dateString: string)  => {
     setSelectedDate(dateString) // The dateString is already in 'YYYY-MM-DD' format
   
  };


  return (
<>
<Toaster position="top-right" reverseOrder={false} />
<AppNavbar/>

<div style={{  marginTop:"5rem",marginBottom:"5rem"}}>
      {serviceDataLoading ? (
        <div>Loading service data...</div>
      ) : (
        <Row gutter={[16, 16]}>
          <Col xs={24} lg={12}>
            <Card style={cardStyle}>
              <Image src={serviceData?.serviceImg[0]} alt={serviceData?.name} width={200} height={200} style={imageStyle} />
              <Meta title={serviceData?.name} description={serviceData?.description} />
            </Card>
          </Col>
          <Col xs={24} lg={12}>
            <div style={serviceInfoStyle}>
              <Typography.Title level={4}>Service Details</Typography.Title>
              <p>
                <strong>Price:</strong> ${serviceData?.price}
              </p>
              <p>
                <strong>Location:</strong> {serviceData?.location}
              </p>
              <p>
                <strong>Availability:</strong> {serviceData?.availbility}
              </p>
              <p>
                <strong>Duration:</strong> {serviceData?.duration}
              </p>
              <p>
                <strong>Category:</strong> {serviceData?.category?.title}
              </p>
              <p>
                <strong>Created At:</strong> {serviceData?.createdAt}
              </p>
            </div>
          {serviceData.availbility === "available" ? <>
          
          <Form submitHandler={onSubmit}>

<Col span={12} style={{ margin: '10px 0' }}>
  <FormDatePicker
    name="bookingDate"
    label="Select A Date"
    size="large"
    onChange={handleDateChange}
  />
</Col>
<Row gutter={16} style={{ marginTop: '20px' }}>
  {slotOptions?.map((slot : any) => (
    <Col key={slot.id} xs={24} lg={8}>
      <Button
      
        style={{ width: '100%', marginBottom: '10px',    backgroundColor: selectedSlotId === slot.value ? 'orange' : '',}}
        onClick={() => setSelectedSlotId(slot.value)}
        disabled={isSlotBooked(slot.value)}
        
      >
        {slot.label}
      </Button>
    </Col>
  ))}
 
</Row>
<Col>
  <Button type="primary" htmlType="submit" disabled={!selectedSlotId}>
  Reserve Now
</Button> 
  </Col>             
</Form>
          </> : <> Booking Only For Available Service</>}
          </Col>

        </Row>
      )}
<div>

<ReviewPage userId={loginData?.data?.id} serviceId={id}/>
  
</div>
    </div>
<AppFooter/>
</>
  );
};

export default ServiceDetailsPage;


const cardStyle = {
  width: '100%',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const imageStyle = {
  display: 'block',
  margin: '0 auto',
};

const serviceInfoStyle = {
  padding: '20px',
  border: '1px solid #e0e0e0',
  borderRadius: '4px',
  backgroundColor: '#f9f9f9',
};


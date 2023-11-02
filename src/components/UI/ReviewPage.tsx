"use client";

import Form from "@/components/Forms/Form";
import FormTextArea from "@/components/Forms/FormTextArea";
import { useAddReviewMutation, useReviewByServiceIdQuery } from "@/redux/api/reviewApi";
import { Button, Card, Col, Rate, Row, message } from "antd";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import ReviewCard from "./ReviewCard";
import { useServiceQuery } from "@/redux/api/servicesApi";
import Heading from "../Hero/Heading";


const ReviewPage = (id:any) => {
    const data = id;
    const {data:service} = useServiceQuery(data.serviceId)
    const [ratingValue, setRatingValue] = useState<number | undefined>(0);
    const [addReview] = useAddReviewMutation();

    const {data:reviewData} = useReviewByServiceIdQuery(data.serviceId)
    const reviews  = reviewData?.data;
    console.log(reviews);
  


  const onSubmit = async (values: any) => {
    let obj = {...values}
    obj.rating = ratingValue
    obj.userId = data.userId
    obj.serviceId = data.serviceId
    message.loading("Creating..");
   
   console.log(obj);
    try {
     const res =  await addReview(obj).unwrap();
     if(res?.data?.id){
      setRatingValue(0)
     }
      toast(res.message,
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
     
     {
      service?.data?.availbility === "available" ? <> 
       <Card style={{marginLeft:'20px',width:'400px', marginTop:'20px'}}>
      <h1>Post Review</h1>
        <Form submitHandler={onSubmit} >
        <Rate
      defaultValue={ratingValue}
      allowHalf
      onChange={(value)=> setRatingValue(value)}
    />
          
          <Col  md={24}
                sm={12}
                xs={20} style={{ margin: "10px 0" }}>
                <FormTextArea name="comment" label="Comment" rows={8} />
              </Col>
    
          <Button htmlType="submit" type="primary">
            Review
          </Button>
        </Form>
      </Card>
      </> 
      : 
      <>Review Section Only for Available Service </>
     }

      <div>  
          
      <section className="team background">
      <div className="container">
        <Heading
          title="Our Client Reviews"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        />
            
          <ReviewCard review={reviews} />
      </div>
    </section>
      </div>
    </>
  );
};

export default ReviewPage;

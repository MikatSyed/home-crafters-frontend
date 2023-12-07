"use client";

import Form from "@/components/Forms/Form";
import FormTextArea from "@/components/Forms/FormTextArea";
import {
  useAddReviewMutation,
  useReviewByServiceIdQuery,
} from "@/redux/api/reviewApi";
import { Button, Card, Col, Modal, Rate, Row, Typography, message } from "antd";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import ReviewCard from "./ReviewCard";
import { useServiceQuery } from "@/redux/api/servicesApi";
import Heading from "../Hero/Heading";

const ReviewPage = (id: any) => {
  const data = id;
  const [isReviewModalVisible, setIsReviewModalVisible] = useState(false);
  const { data: service } = useServiceQuery(data.serviceId);
  const [ratingValue, setRatingValue] = useState<number | undefined>(0);
  const [addReview] = useAddReviewMutation();

  const onSubmit = async (values: any) => {
    let obj = { ...values };
    obj.rating = ratingValue;
    obj.userId = data.userId;
    obj.serviceId = data.serviceId;
    message.loading("Creating..");

    console.log(obj);
    try {
      const res = await addReview(obj).unwrap();
      console.log(res);
      if (res?.data?.id) {
        setRatingValue(0);
        setIsReviewModalVisible(false)
      }
      toast(res?.message, {
        icon: <span style={{ color: "green" }}>✔</span>,
        style: {
          borderRadius: "10px",
          background: "#FFBF00",
          color: "#fff",
        },
      });
    } catch (err: any) {
      toast(err?.data, {
        icon: <span style={{ color: "white" }}>❌</span>,
        style: {
          borderRadius: "10px",
          background: "red",
          color: "#fff",
        },
      });
    }
  };


  const handleReviewModalCancel = () => {
    setIsReviewModalVisible(false);
  };



  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Typography.Title level={4}>Review Now</Typography.Title>
      <button onClick={()=> setIsReviewModalVisible(true)} type="button">
        Review
      </button>

      <Modal
        title="Write a Review"
        visible={isReviewModalVisible}
        onCancel={handleReviewModalCancel}
        footer={null}
      >
        {service?.data?.availbility === "available" ? (
          <>
            <Card
              style={{ marginLeft: "20px", width: "400px", marginTop: "20px" }}
            >
              <h1>Post Review</h1>
              <Form submitHandler={onSubmit}>
                <Rate
                  defaultValue={ratingValue}
                  allowHalf
                  onChange={(value) => setRatingValue(value)}
                />

                <Col md={24} sm={12} xs={20} style={{ margin: "10px 0" }}>
                  <FormTextArea name="comment" label="Comment" rows={8} />
                </Col>

                <button type="submit" className="btn2">
                  Review
                </button>
              </Form>
            </Card>
          </>
        ) : (
          <> </>
        )}
      </Modal>

      <div></div>
    </>
  );
};

export default ReviewPage;

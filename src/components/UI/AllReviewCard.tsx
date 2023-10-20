"use client"
import { Row } from 'antd';
import React from 'react';
import ReviewCard from './ReviewCard';
import { useReviewsQuery } from '@/redux/api/reviewApi';

const AllReviewCard = () => {
  const {data:reviews} = useReviewsQuery(undefined)
  console.log(reviews);
  return (
    <>
      <h1
      style={{
        textAlign: 'center',
        fontSize: '30px',
        margin: '30px 0px',
      }}
    >
      All Review
    </h1>
       <Row justify="center" align="middle">
        {reviews?.data?.data?.map((review:any, index:any) => (
          <ReviewCard key={index} review={review} />
        ))}
      </Row>
    </>
  );
};

export default AllReviewCard;
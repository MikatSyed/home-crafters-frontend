"use client"
import 'swiper/css';
import 'swiper/css/pagination';
import { useReviewByServiceIdQuery, useReviewsQuery } from "@/redux/api/reviewApi";
import ReviewCard from '../UI/ReviewCard';


const Review = (id:any) => {
  console.log(id);
  const {serviceId} = id;
  console.log(serviceId);
  const {data} = useReviewByServiceIdQuery(serviceId)
  console.log(data);
  const reviews = data?.data;
  console.log(reviews);
  return (
    <>
       <ReviewCard reviews={reviews}/>
    </>
  );
};

export default Review;

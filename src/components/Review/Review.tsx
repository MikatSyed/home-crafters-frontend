"use client"
import 'swiper/css';
import 'swiper/css/pagination';
import { useReviewByServiceIdQuery, useReviewsQuery } from "@/redux/api/reviewApi";
import ReviewCard from '../UI/ReviewCard';


const Review = (id:any) => {
  const {serviceId} = id;
  const {data} = useReviewByServiceIdQuery(serviceId)
  const reviews = data?.data;
  // console.log(reviews);

  return (
    <>
       <ReviewCard reviews={reviews}/>
    </>
  );
};

export default Review;

"use client"
import { useReviewsQuery } from '@/redux/api/reviewApi';
import 'swiper/css';
import 'swiper/css/pagination';
import ReviewCard from '../UI/ReviewCard';

const Testimonial = () => {
  const {data} = useReviewsQuery(undefined)
  const reviews = data?.data?.data;
 
  return (
    <>
   <ReviewCard reviews={reviews}/>
    </>
  );
};

export default Testimonial;

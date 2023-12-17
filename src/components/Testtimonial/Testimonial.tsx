

import ReviewCard from '../UI/ReviewCard';
import { getAllReviews } from '@/lib/fetch';

const Testimonial = async() => {
  const data = await getAllReviews()
  console.log(data,'12');
  const reviews = data?.data?.data;
 
  return (
    <>
   <ReviewCard reviews={reviews}/>
    </>
  );
};

export default Testimonial;

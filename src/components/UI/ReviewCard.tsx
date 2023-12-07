
import React from 'react';
import Heading from '../Hero/Heading';
import {BiSolidQuoteAltRight,BiSolidQuoteAltLeft } from 'react-icons/bi'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import { Rate } from 'antd';

const ReviewCard = ({reviews}:any) => {
  console.log(reviews);
  return (
    <div>
     <section className='testimonal padding'>
        <div className='container'>
          <Heading subtitle='TESTIMONIAL' title='Our Client Reviews' />
      <div className='mtop'>
      <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                // spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 3, // Show 3 cards in a row for large devices
                spaceBetween: 10, // Adjust spacing as needed
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >    
          <div className='content grid2'>
            {reviews?.map((val:any) => (
            <SwiperSlide key={val?.id}>
              <div className='items shadow'>
                <div className='box flex'>
                  <div className='img'>
                    <Image src={val?.user?.profileImg[0]} alt='' height={100} width={100} style={{borderRadius :'50%'}} />
                
                  </div>
                  <div className='name'>
                    <h2>{val?.user?.name}</h2>
                    <Rate disabled allowHalf defaultValue={val?.rating}  />
                  </div>
                </div>
                <p> <span className='icon'> <BiSolidQuoteAltLeft /></span>{val.comment} <span className='icon'> <BiSolidQuoteAltRight /></span></p>
              </div>
            </SwiperSlide>
            ))}
          </div>
          </Swiper>
      </div>
        </div>
      </section>
    </div>
  );
};

export default ReviewCard;

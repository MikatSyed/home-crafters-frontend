"use client"
import React from "react";
import Heading from "../Hero/Heading";
import { team } from "../../components/Nav/Data";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Col, Rate, Row } from "antd";
import { useReviewsQuery } from "@/redux/api/reviewApi";
import { EnvironmentFilled ,InteractionFilled} from "@ant-design/icons";
import Image from "next/image";

const Review = () => {
  const {data} = useReviewsQuery(undefined)
  const reviews = data?.data?.data;
  console.log(reviews);
  return (
    <>
      <section className="team background">
        <div className="container">
          <Heading
            title="Our Client Reviews"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          />
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
              <div className="content mtop">
             
                {reviews?.map((val:any) => (
            <SwiperSlide key={val?.id}>
                  <div className="box" key={val?.id}>
                    <div className="details">
                      <div className="img">
                        <Image src={val?.user?.profileImg[0]} alt="" height={90} width={90} style={{  borderRadius: '80%'}} />
                      </div>
                      <label><EnvironmentFilled/> {val?.user?.address}</label>
                      <h4>{val?.user?.name}</h4>
                    
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Rate disabled allowHalf defaultValue={val?.rating} style={{ fontSize: 16 }} />
                      </div>
       
                      <label>{val.comment}</label>
                    </div>
                  </div>             
            </SwiperSlide>
                ))}        
              </div>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Review;

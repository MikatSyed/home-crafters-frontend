
import React from "react";
import { Col, Row } from "antd";
import { EnvironmentOutlined } from "@ant-design/icons";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination ,Navigation} from 'swiper/modules';


// Import Swiper styles


const ServiceCard = ({data}:any) => {



  return (
    <>
   
             <div className="content mtop">
             {/* <Swiper
  pagination={{
    type: 'fraction',
  }}
  navigation={{
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  }}
  modules={[Pagination, Navigation]}
  className="mySwiper"
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
         
         
          >   */}
        <Row gutter={[16, 16]}>
          {data?.map((val: any) => {
            const {
              id,
              name,
              serviceImg,
              category,
              availbility,
              price,
              location,
            } = val;
            return (
              <Col xs={24} sm={24} md={12} lg={8} xl={8} key={id}>
                 <Link href={`/services/${id}`}>
                <div className="box shadow">

                  
                 
                <Image src={serviceImg[0]} alt="" width={349} height={220} className="Service_img" />

                 
                  <div className="text">
                    <div className="category flex">
                      <span
                        style={{
                          background:
                            availbility === "available"
                              ? "#25b5791a"
                              : "#ff98001a",
                          color:
                            availbility === "available" ? "#25b579" : "#ff9800",
                        }}
                      >
                        {availbility}
                      </span>
                    </div>
                    <h2>{name}</h2>
                    <p>
                      <EnvironmentOutlined /> {location}
                    </p>
                  </div>
                  <div className="button flex">
                    <div>
                      <button className="btn5">৳{price}</button>{" "}
                    </div>
                    <span className="service_title">{category?.title}</span>
                  </div>
                </div>
             </Link>
              </Col>
            );
          })}
        </Row>
        {/* </Swiper> */}
      </div>
          
   
    </>
  );
};

export default ServiceCard;
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// export default function ServiceCard({data}:any) {
//   return (
//     <>
//      <Swiper
//       spaceBetween={50}
//       slidesPerView={3}
//       onSlideChange={() => console.log('slide change')}
//       onSwiper={(swiper) => console.log(swiper)}
//     >
//       <SwiperSlide>Slide 1</SwiperSlide>
//       <SwiperSlide>Slide 2</SwiperSlide>
//       <SwiperSlide>Slide 3</SwiperSlide>
//       <SwiperSlide>Slide 4</SwiperSlide>
//       ...
//     </Swiper>
//     </>
//   );
// }

"use client";
import React, { useState } from "react";
import Heading from "../Hero/Heading";
import { BiSolidQuoteAltRight, BiSolidQuoteAltLeft } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Rate } from "antd";
import { Navigation, Pagination } from "swiper/modules";
import { SwiperNavButtons } from "../SwiperNavButton/SwiperNavButton";
import styles from "../../styles/testtimonial.module.css";
const ReviewCard = ({ reviews }: any) => {
  return (
    <div>
      <section className={`${styles.testimonal} ${styles.padding}`}>
        <div className="container">
          <h1 className={styles.heading}>Our Client Reviews</h1>
          <div className={styles.mtop}>
            <Swiper
              modules={[Navigation]}
              className="mySwiper"
              breakpoints={{
                640: {
                  slidesPerView: 2,
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
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
              }}
            >
              <div className="grid2">
                {reviews?.map((val: any) => (
                  <>
                    <SwiperSlide key={val?.id}>
                      <div className={`${styles.items} ${styles.shadow}`}>
                        <div className={styles.flex}>
                          <div className={styles.img}>
                            <Image
                              src={val?.user?.profileImg[0]}
                              alt=""
                              height={80}
                              width={80}
                              style={{ borderRadius: "50%" }}
                            />
                          </div>
                          <div className={styles.name}>
                            <h2>{val?.user?.name}</h2>
                            <Rate
                              disabled
                              allowHalf
                              defaultValue={val?.rating}
                            />
                          </div>
                        </div>
                        <p>
                          {" "}
                          <span className={styles.icon}>
                            {" "}
                            <BiSolidQuoteAltLeft />
                          </span>
                          {val.comment}{" "}
                          <span className="icon">
                            {" "}
                            <BiSolidQuoteAltRight />
                          </span>
                        </p>
                      </div>
                    </SwiperSlide>
                  </>
                ))}
              </div>
              <SwiperNavButtons />
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReviewCard;

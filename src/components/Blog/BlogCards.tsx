
import React from "react";
import { Col, Row } from "antd";
import { CalendarFilled } from "@ant-design/icons";
import dayjs from "dayjs";
import Link from "next/link";
import Image from "next/image";
const BlogCards = ({data}:any) => {

  return (
    <>
      <div className="content mtop">
        <Row gutter={[16, 16]}>
          {data?.map((val: any) => {
            const {
              id,
              title,
              blogImg,
              createdAt,
            } = val;
            return (
              <Col xs={24} sm={24} md={12} lg={8} xl={8} key={id}>
                <div className="box shadow">
                  <div className="img">
                    <Image src={blogImg[0]} alt="" height={183} width={349} className="service_img"/>
                  </div>
                
                  <div className="text">
                    <div className="category flex">
                    </div>
                    <label><CalendarFilled/> {dayjs(createdAt).format("MMM D, YYYY hh:mm A")}</label>
                    <h2>{title}</h2>            
                  </div>
                  <div className="button flex">
                    <div>
                   
                    </div>
                   <Link href={`/blog/${id}`}> 
                   <button className="btn2">Read More</button>
                   </Link>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
};

export default BlogCards;

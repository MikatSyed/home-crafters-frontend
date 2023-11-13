
import React from "react";
import { Col, Row } from "antd";
import { EnvironmentOutlined } from "@ant-design/icons";
import Link from "next/link";
import Image from "next/image";


const ServiceCardPage = ({data}:any) => {

 
  return (
    <>
      <div className="content mtop">
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

                  
                 
                <Image src={serviceImg[0]} alt="" width={289} height={220} className="Service_img" />

                 
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
                      <button className="btn2">${price}</button>{" "}
                    </div>
                    <span className="service_title">{category?.title}</span>
                  </div>
                </div>
             </Link>
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
};

export default ServiceCardPage;

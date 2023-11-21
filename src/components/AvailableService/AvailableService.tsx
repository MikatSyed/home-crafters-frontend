"use client";
import {  theme } from "antd";

import { useServicesQuery } from "@/redux/api/servicesApi";
import { Col, Row, Card, Input, Rate } from "antd";
import Image from "next/image";
import Link from "next/link";


const AvailableService = () => {
 
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const { data } = useServicesQuery(undefined);

  let serviceData: any = data?.data.filter(
    (data: any) => data?.availbility === "available"
  );
  

  return (
    <>
       <h1
      style={{
        textAlign: 'center',
        fontSize: '30px',
        margin: '30px 0px',
      }}
    >
      Available Service
    </h1>
      <div
        style={{
          padding: 24,
          textAlign: "center",
          background: colorBgContainer,
        }}
      >
        <Row gutter={{ xs: 5, sm: 5, md: 5, lg: 5, xl: 5 }} justify="center">
          {serviceData ? (
            serviceData.map((service: any) => (
              <Col
                xs={24}
                sm={12}
                md={8}
                lg={8}
                xl={6}
                style={{ marginBottom: "5px" }}
                key={service.id}
              >
                <Link href={`/services/${service.id}`}>
                  <Card
                    style={{
                      width: "100%",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    }}
                    cover={
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          height: "180px",
                        }}
                      >
                        <Image
                          alt={service?.name}
                          src={
                            service?.serviceImg.length > 1
                              ? service?.serviceImg.length - 1
                              : service?.serviceImg[0]
                          }
                          height={180}
                          width={180}
                        />
                      </div>
                    }
                    actions={[
                      <span className="text" key="1">
                        {service?.category?.title}
                      </span>,
                      <span className="text" key="2">
                        {service?.availbility}
                      </span>,
                      <span className="text" key="3">
                        ${service?.price}
                      </span>,
                    ]}
                  >
                    <Card.Meta
                      title={service?.name}
                      description={
                        <div>
                          <span style={{ marginRight: "10px" }}>
                            <Rate
                              allowHalf
                              disabled
                              defaultValue={service?.averageRating}
                            />
                          </span>
                          <span>({service?.totalReviews} reviews)</span>
                        <p>{service?.location}</p>

                        </div>
                      }
                    />
                  </Card>
                </Link>
              </Col>
            ))
          ) : (
            <div>Loading...</div>
          )}

          <div></div>
        </Row>
      </div>
    
    </>
  );
};

export default AvailableService;

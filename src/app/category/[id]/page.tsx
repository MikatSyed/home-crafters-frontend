"use client"
import {  Pagination, theme } from 'antd';
import AppNavbar from '@/components/UI/AppNavbar';
import {  useServicesQuery } from "@/redux/api/servicesApi";
import { Col, Row, Card, Input, Rate } from "antd";
import Image from "next/image";
import Link from "next/link";
import BreadCrumb from '@/components/UI/BreadCrumb';
import ActionBar from '@/components/UI/ActionBar';
import { useDebounced } from '@/redux/hook';
import { useState } from 'react';
import AppFooter from '@/components/UI/AppFooter';

type IDParams = {
    params : any
}


const ServicesPage = ({params}:IDParams) => {
    const {id} = params;
    
  const query: Record<string, any> = {};
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [searchTerm, setSearchTerm] = useState<string>("");


  query["searchTerm"] = searchTerm;
  


  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600
  })

  if (!!debouncedTerm) {
    query["searchTerm"] = debouncedTerm;
  }



  const { data } = useServicesQuery({
    ...query
  });

  let serviceData : any = data?.data.filter((data:any)=> data.categoryId === id);
  console.log(serviceData);

  if(!serviceData){
    return <p>No Data</p>
  }


  return (
    <>
      <AppNavbar />

      <BreadCrumb items={[
              { label: 'Home', link: '/' },
              { label: 'Services', link: '/services' }

            ]} />
            <ActionBar title="Service Category" />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <Input.Search placeholder="Search" style={{ width: 300 }} onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
            <div style={{ padding: 24, textAlign: 'center', background: colorBgContainer }}>

              <Row gutter={{ xs: 5, sm: 5, md: 5, lg: 5, xl: 5 }} justify="center">
             
                 {serviceData ? (
          serviceData.map((service: any) => (
            <Col
              xs={24}
              sm={12}
              md={8}
              lg={8}
              xl={6}
              style={{ marginBottom: '5px' }}
              key={service.id}
            >
              <Link href={`/services/${service.id}`}>
                <Card
                  style={{ width: '100%', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
                  cover={
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '180px'
                      }}
                    >
                      <Image  alt={service?.name} src={service?.serviceImg.length > 1 ? service?.serviceImg.length - 1 : service?.serviceImg[0]} height={180} width={180} />
                    </div>
                  }
                  actions={[
                    <span className="text" key="1">
                      {service?.category?.title}
                    </span>,
                    <span className="text" key="2">
                      {service?.availability}
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
                        <span style={{ marginRight: '10px' }}>
                          <Rate allowHalf disabled defaultValue={service?.averageRating} />
                        </span>
                        <span>({service?.totalReviews} reviews)</span>
                      </div>
                    }
                  />
                </Card>
              </Link>
            </Col>
          ))
          ) : (
            <div>Loading...</div>
            ) 
          }

<div>
      
     
    </div>

              </Row>
            
            </div>
      <AppFooter/>
    </>
  );
};

export default ServicesPage;
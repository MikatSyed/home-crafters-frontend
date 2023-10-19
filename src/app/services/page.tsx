"use client"
import { Layout, Pagination, theme } from 'antd';
import AppNavbar from '@/components/UI/AppNavbar';
import {  useServicesQuery } from "@/redux/api/servicesApi";
import { Col, Row, Card, Input, Rate } from "antd";
import Image from "next/image";
import Link from "next/link";
// import serviceImage from "../../assets/images.jpg";
import BreadCrumb from '@/components/UI/BreadCrumb';
import ActionBar from '@/components/UI/ActionBar';
import { Radio } from 'antd';
import { useDebounced } from '@/redux/hook';
import { useState } from 'react';
import AppFooter from '@/components/UI/AppFooter';
import { useCategoriesQuery } from '@/redux/api/categoryApi';
import AllReviewCard from '@/components/UI/AllReviewCard';
const RadioGroup = Radio.Group;

const { Header, Content, Sider } = Layout;



const ServicesPage = () => {
  const query: Record<string, any> = {};
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [selectedCategories, setSelectedCategories] = useState("");
  const [sliderValue, setSliderValue] = useState(1000);

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedFilters, setSelectedFilters] = useState({});




  query["limit"] = size;
  query["page"] = page;
  query["searchTerm"] = searchTerm;
  // query["minPrice"] = sliderValue[0];
  // query["maxPrice"] = sliderValue[1];
  // query["category"] = selectedCategories;



  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600
  })

  if (!!debouncedTerm) {
    query["searchTerm"] = debouncedTerm;
  }



  const { data } = useServicesQuery({
    ...query, ...selectedFilters, price_gte: sliderValue,
  });

  let serviceData : any = data?.data;
  console.log(serviceData);
  const { data: category } = useCategoriesQuery(undefined);
  const categoryData : any = data?.data;
 
  

  const handleCategoryChange = (e: any) => {
    const categoryValue = e.target.value;
    setSelectedCategories(categoryValue);
    setSelectedFilters({ ...selectedFilters, category: categoryValue });
  };

  const handleSliderChange = (event: any) => {
    const value = event.target.value;
    setSliderValue(value);
    console.log();
    setSelectedFilters({ ...selectedFilters, minPrice: value });
  };

  const onPaginationChange = (page: number, pageSize: number) => {
    console.log("Page:", page, "PageSize:", pageSize);
    setPage(page);
    setSize(pageSize);
  };

  const handlePageSizeChange = (current: number, size: number) => {
    setSize(size);  // Update the page size when the user selects a new size
  };

  return (
    <>
      <AppNavbar />

      <Layout hasSider>

        <Sider
          style={{
            overflow: 'auto',
            height: '80vh',
            position: 'fixed',
            left: 0,
            top: 0,
            bottom: 0,
            marginTop: '5rem',
            backgroundColor: '#fff',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div className="demo-logo-vertical" />
          <h2 style={{ marginBottom: '10px', color: 'orange', marginLeft: '20px' }}>Select Categories</h2>
          <RadioGroup
            options={category?.data?.map((cat: any) => ({ label: cat.title, value: cat.id }))}
            onChange={handleCategoryChange}
            value={selectedCategories}
            style={{ margin: '20px 20px' }}
          >
           <div>
      {/* Display loading message if category.data is null or empty */}
      {!categoryData ? (
        <div>Loading categories...</div>
      ) : categoryData.length === 0 ? (
        <div>No categories available.</div>
      ) : (
        categoryData.map((cat: any) => (
          <Radio key={cat.id} style={{ color: 'red' }}>
            {cat.title}
          </Radio>
        ))
      )}
    </div>
          </RadioGroup>

          <h2 style={{ marginBottom: '10px', color: 'orange', marginLeft: '20px' }}>Price Range</h2>
          <div style={{ width: '80%', maxWidth: '300px', marginLeft: '20px' }}>
            <input
              type="range"
              min={1000}
              max={20000}
              value={sliderValue} // Use the upper limit of the range
              onChange={handleSliderChange}
            />
            <p>Selected Price: {sliderValue}</p>
          </div>
        </Sider>
        <Layout className="site-layout" style={{ marginLeft: 200 }}>
          <Header style={{ padding: 0, background: colorBgContainer }} />
          <Content style={{ margin: '5px 10px 0', overflow: 'initial' }}>
            <BreadCrumb items={[
              { label: 'Home', link: '/' },
              { label: 'Services', link: '/services' }

            ]} />
            <ActionBar title="Services List" />
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
              <div style={{ marginTop: '20PX' }}>
                <Pagination
                  showSizeChanger={true}
                  onShowSizeChange={handlePageSizeChange}
                  onChange={onPaginationChange}
                  current={page}
                  pageSize={size}
                  defaultCurrent={1}
                  total={data?.meta?.total || 0}
                />
              </div>
            </div>
            <div>

            <AllReviewCard/>
            </div>
      <AppFooter/>
          </Content>

        </Layout>
      </Layout>
    </>
  );
};

export default ServicesPage;
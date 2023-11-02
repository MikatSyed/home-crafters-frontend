"use client";
import { Layout, Pagination, theme } from "antd";
import AppNavbar from "@/components/UI/AppNavbar";
import { useServicesQuery } from "@/redux/api/servicesApi";
import { Col, Row, Card, Input, Rate } from "antd";
import Image from "next/image";
import Link from "next/link";
// import serviceImage from "../../assets/images.jpg";
import BreadCrumb from "@/components/UI/BreadCrumb";
import ActionBar from "@/components/UI/ActionBar";
import { Radio } from "antd";
import { useDebounced } from "@/redux/hook";
import { useState } from "react";
import AppFooter from "@/components/UI/AppFooter";
import { useCategoriesQuery } from "@/redux/api/categoryApi";
import AllReviewCard from "@/components/UI/AllReviewCard";
import Footer from "@/components/Footer/Footer";
import Nav from "@/components/Nav/Nav";
import Loading from "../loading";
import Heading from "@/components/Hero/Heading";
import ServiceCard from "@/components/Services/ServiceCard";
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
    delay: 600,
  });

  if (!!debouncedTerm) {
    query["searchTerm"] = debouncedTerm;
  }

  const { data } = useServicesQuery({
    ...query,
    ...selectedFilters,
    price_gte: sliderValue,
  });

  let serviceData: any = data?.data;
  console.log(serviceData);
  const { data: category } = useCategoriesQuery(undefined);
  const categoryData: any = data?.data;

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
    setSize(size); // Update the page size when the user selects a new size
  };

  return (
    <>
      <Nav />
      <Row>

        <Col lg={4} xl={4}>
        
          <Card bordered={false}>
          <div className="demo-logo-vertical" />
            <h2
              style={{
                marginBottom: "10px",
                color: "orange",
                // marginLeft: "20px",
              }}
            >
              Select Categories
            </h2>
            <RadioGroup
              options={category?.data?.map((cat: any) => ({
                label: cat.title,
                value: cat.id,
              }))}
              onChange={handleCategoryChange}
              value={selectedCategories}
              style={{ margin: "20px 20px" }}
            >
              <div>
                {/* Display loading message if category.data is null or empty */}
                {!categoryData ? (
                  <div>Loading categories...</div>
                ) : categoryData.length === 0 ? (
                  <div>No categories available.</div>
                ) : (
                  categoryData.map((cat: any) => (
                    <Radio key={cat.id} style={{ color: "red" }}>
                      {cat.title}
                    </Radio>
                  ))
                )}
              </div>
            </RadioGroup>

            <h2
              style={{
                marginBottom: "10px",
                color: "orange",
                marginLeft: "20px",
              }}
            >
              Price Range
            </h2>
            <div
              style={{ width: "80%", maxWidth: "300px", marginLeft: "20px" }}
            >
              <input
                type="range"
                min={1000}
                max={20000}
                value={sliderValue} // Use the upper limit of the range
                onChange={handleSliderChange}
              />
              <p>Selected Price: {sliderValue}</p>
            </div>
          </Card>
       
        </Col>

        <Col lg={20} xl={20}>
        <section className='recent' style={{padding:'20px 0'}}>
        <div className='container'>
 
          <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "10px",
                marginTop:'30px'
              }}
            >
              <Input.Search placeholder="Search" style={{ width: 300 }} onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
          <ServiceCard  data={serviceData} />
        </div>
      </section>
         
        </Col>

      </Row>
      <div style={{ marginTop: "20PX" }}>
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
      <Footer />
    </>
  );
};

export default ServicesPage;

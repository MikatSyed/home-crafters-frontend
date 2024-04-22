"use client";
import React from "react";
import { Card, Col, Row, Statistic } from "antd";
import {
  LineChart,
  Line,
  Cell,
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Table } from "antd";

import {
  CalendarOutlined,
  SnippetsOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { FaMoneyBill } from "react-icons/fa";
import { HiCalendar } from "react-icons/hi";
import { MdHomeRepairService } from "react-icons/md";
import chartImg1 from "../../../../assets/pro-chart-01.svg";
import chartImg2 from "../../../../assets/pro-chart-02.svg";
import chartImg3 from "../../../../assets/pro-chart-03.svg";
import chartImg4 from "../../../../assets/pro-chart-04.svg";
import Image from "next/image";
import CustomPieChart from "@/components/Dashboard/CustomPieChart/CustomPieChart";
import { useOverviewQuery } from "@/redux/api/servicesApi";
const Dashboard = () => {
 
  const {data:overviewData} = useOverviewQuery(undefined)
  console.log(overviewData);

  // Sample data for Table
  const tableData = [
    { name: "Product A", quantity: 20, price: 100 },
    { name: "Product B", quantity: 30, price: 160 },
    { name: "Product C", quantity: 16, price: 200 },
    { name: "Product D", quantity: 26, price: 120 },
  ];



  // Data for the chart
  let revenueData = overviewData?.data?.formattedRevenueData;
  let categoryData = overviewData?.data?.formattedCategoryServiceCounts;
  let Services = overviewData?.data?.totalServices;
  let totalBookings = overviewData?.data?.totalBookings;
  let Earning = overviewData?.data?.totalEarnings;
  console.log(categoryData);

  return (
    <div className="">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
          gap: "10px",
        }}
      >
      

        <div
          style={{
            borderRadius: 10,
            backgroundColor: "#FFFFFF",
          }}
        >
          <div
            style={{ display: "flex", alignItems: "center", padding: "10px" }}
          >
            <div
              style={{
                backgroundColor: "#F4F7FF",
                padding: "0px 10px",

                display: "inline-block",
              }}
            >
              <HiCalendar size={24} style={{ color: "#27ae60" }} />
            </div>
            <div style={{ padding: "15px 10px" }}>
              <p style={{ margin: 0 }}>Booking</p>
              <h3 style={{ margin: 0 }}>{totalBookings}</h3>
            </div>
            <div>
              {/* Your other content */}
              <div style={{ padding: "5px 10px", position: "relative" }}>
                <select
                  style={{
                    marginLeft: "auto",
                    marginRight: "10px",
                    padding: "8px 16px",

                    color: "#27ae60",
                    border: "1px solid #27ae60",
                    borderRadius: "4px",
                    cursor: "pointer",
                    outline: "none",
                  }}
                >
                  <option value="option1">2024</option>
                  <option value="option2">2023</option>
                  <option value="option3">2022</option>
                </select>
              </div>
              {/* Your other content */}
            </div>
          </div>
          <p style={{ padding: "10px 20px" }}>Over all: {totalBookings}</p>
          <div style={{ paddingTop: "20px" }}>
            <Image src={chartImg2} alt="Chart" layout="responsive" />
          </div>
        </div>

        <div
          style={{
            borderRadius: 10,
            backgroundColor: "#FFFFFF",
          }}
        >
          <div
            style={{ display: "flex", alignItems: "center", padding: "10px" }}
          >
            <div
              style={{
                backgroundColor: "#F4F7FF",
                padding: "0px 10px",

                display: "inline-block",
              }}
            >
              <MdHomeRepairService size={24} style={{ color: "#27ae60" }} />
            </div>
            <div style={{ padding: "15px 10px" }}>
              <p style={{ margin: 0 }}>Services</p>
              <h3 style={{ margin: 0 }}>{Services?.service}</h3>
            </div>
            <div>
              {/* Your other content */}
              <div style={{ padding: "5px 10px", position: "relative" }}>
                <select
                  style={{
                    marginLeft: "auto",
                    marginRight: "10px",
                    padding: "8px 16px",

                    color: "#27ae60",
                    border: "1px solid #27ae60",
                    borderRadius: "4px",
                    cursor: "pointer",
                    outline: "none",
                  }}
                >
                  <option value="option1">2024</option>
                  <option value="option2">2023</option>
                  <option value="option3">2022</option>
                </select>
              </div>
              {/* Your other content */}
            </div>
          </div>
          <p style={{ padding: "10px 20px" }}>Providers: {Services?.provider}</p>
          <div style={{ paddingTop: "20px" }}>
            <Image src={chartImg3} alt="Chart" layout="responsive" />
          </div>
        </div>

        <div
          style={{
            borderRadius: 10,
            backgroundColor: "#FFFFFF",
          }}
        >
          <div
            style={{ display: "flex", alignItems: "center", padding: "10px" }}
          >
            <div
              style={{
                backgroundColor: "#F4F7FF",
                padding: "0px 10px",

                display: "inline-block",
              }}
            >
              <FaMoneyBillTransfer size={24} style={{ color: "#27ae60" }} />
            </div>
            <div style={{ padding: "15px 10px" }}>
              <p style={{ margin: 0 }}>Earning</p>
              <h3 style={{ margin: 0 }}>{Earning?.amount}</h3>
            </div>
            <div>
              {/* Your other content */}
              <div style={{ padding: "5px 10px", position: "relative" }}>
                <select
                  style={{
                    marginLeft: "auto",
                    marginRight: "10px",
                    padding: "8px 16px",

                    color: "#27ae60",
                    border: "1px solid #27ae60",
                    borderRadius: "4px",
                    cursor: "pointer",
                    outline: "none",
                  }}
                >
                  <option value="option1">2024</option>
                  <option value="option2">2023</option>
                  <option value="option3">2022</option>
                </select>
              </div>
              {/* Your other content */}
            </div>
          </div>
          <p style={{ padding: "10px 20px" }}>Total Sales: {Earning?.totalPayment}</p>
          <div style={{ paddingTop: "20px" }}>
            <Image src={chartImg1} alt="Chart" layout="responsive" />
          </div>
        </div>
       
      </div>
      <Row gutter={16} style={{ marginTop: "20px" }}>
        <Col xs={24} sm={24} md={16}>
          <Card className="custom-card">
            <div className="card-content">
              <h3>Revenue Analytics <span style={{fontSize:'15px',fontWeight:300}}>(Last 7 Days)</span></h3>
              
              <div className="chart-container">
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={revenueData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    
                    <Area
                      type="monotone"
                      dataKey="earning"
                      stackId="1"
                      stroke="#82ca9d"
                      fill="#82ca9d"
                    />
                  
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={8}>
          <Card title="Category Distribution" className="card">
            <CustomPieChart categoryData={categoryData} />
          </Card>
        </Col>

        {/* <Col xs={24} sm={24} md={12}>
          <Card title="Product Sales" className="card">
            <Table dataSource={tableData}>
              <Table.Column title="Product" dataIndex="name" key="name" />
              <Table.Column
                title="Quantity"
                dataIndex="quantity"
                key="quantity"
              />
              <Table.Column title="Price" dataIndex="price" key="price" />
            </Table>
          </Card>
        </Col> */}
      </Row>
    </div>
  );
};

export default Dashboard;

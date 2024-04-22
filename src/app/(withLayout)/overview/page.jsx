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
import CustomPieChart from "../../../components/Dashboard/PieChart/CustomPieChart";
import {
  CalendarOutlined,
  SnippetsOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { FaMoneyBill } from "react-icons/fa";
import { HiCalendar } from "react-icons/hi";
import { MdHomeRepairService } from "react-icons/md";
import chartImg1 from "../../../assets/pro-chart-01.svg";
import chartImg2 from "../../../assets/pro-chart-02.svg";
import chartImg3 from "../../../assets/pro-chart-03.svg";
import chartImg4 from "../../../assets/pro-chart-04.svg";
import Image from "next/image";
const Dashboard = () => {
  // Sample data for LineChart
  const data = [
    { name: "Jan", sales: 4000 },
    { name: "Feb", sales: 3000 },
    { name: "Mar", sales: 6000 },
    { name: "Apr", sales: 4600 },
    { name: "May", sales: 7000 },
    { name: "Jun", sales: 6000 },
  ];

  // Sample data for Table
  const tableData = [
    { name: "Product A", quantity: 20, price: 100 },
    { name: "Product B", quantity: 30, price: 160 },
    { name: "Product C", quantity: 16, price: 200 },
    { name: "Product D", quantity: 26, price: 120 },
  ];

  // Colors for PieChart
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  // Data for the chart
  const revenueData = [
    { name: "Sun", books: 4000, clothes: 2400, electronic: 2400 },
    { name: "Mon", books: 3000, clothes: 1398, electronic: 2210 },
    { name: "Tue", books: 2000, clothes: 9800, electronic: 2290 },
    { name: "Wed", books: 2780, clothes: 3908, electronic: 2000 },
    { name: "Thu", books: 1890, clothes: 4800, electronic: 2181 },
    { name: "Fri", books: 2390, clothes: 3800, electronic: 2600 },
    { name: "Sat", books: 3490, clothes: 4300, electronic: 2100 },
  ];

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
              <FaMoneyBillTransfer size={24} style={{ color: "#27ae60" }} />
            </div>
            <div style={{ padding: "15px 10px" }}>
              <p style={{ margin: 0 }}>Earning</p>
              <h3 style={{ margin: 0 }}>$4000</h3>
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
          <p style={{ padding: "10px 20px" }}>Total Sales: 85</p>
          <div style={{ paddingTop: "20px" }}>
            <Image src={chartImg1} alt="Chart" layout="responsive" />
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
              <HiCalendar size={24} style={{ color: "#27ae60" }} />
            </div>
            <div style={{ padding: "15px 10px" }}>
              <p style={{ margin: 0 }}>Booking</p>
              <h3 style={{ margin: 0 }}>40</h3>
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
          <p style={{ padding: "10px 20px" }}>Over all: 85</p>
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
              <h3 style={{ margin: 0 }}>12</h3>
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
          <p style={{ padding: "10px 20px" }}>Providers: 10</p>
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
              <FaMoneyBill size={24} style={{ color: "#27ae60" }} />
            </div>
            <div style={{ padding: "15px 10px" }}>
              <p style={{ margin: 0 }}>Balance</p>
              <h3 style={{ margin: 0 }}>$4000</h3>
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
          <p style={{ padding: "10px 20px" }}>Total Sales: 85</p>
          <div style={{ paddingTop: "20px" }}>
            <Image src={chartImg1} alt="Chart" layout="responsive" />
          </div>
        </div>
      </div>
      <Row gutter={16} style={{ marginTop: "20px" }}>
        <Col xs={24} sm={24} md={16}>
          <Card className="custom-card">
            <div className="card-content">
              <h3>Revenue Analytics</h3>
              <div className="chart-container">
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={revenueData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="electronic"
                      stackId="1"
                      stroke="#8884d8"
                      fill="#8884d8"
                    />
                    <Area
                      type="monotone"
                      dataKey="clothes"
                      stackId="1"
                      stroke="#82ca9d"
                      fill="#82ca9d"
                    />
                    <Area
                      type="monotone"
                      dataKey="books"
                      stackId="1"
                      stroke="#ffc668"
                      fill="#ffc668"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={8}>
          <Card title="Category Distribution" className="card">
            <CustomPieChart />
          </Card>
        </Col>

        <Col xs={24} sm={24} md={12}>
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
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;

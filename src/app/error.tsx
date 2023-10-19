"use client";
import { Row } from "antd";
import Image from "next/image";
import ErrorImage from "../assets/Error 429-amico.png"
const ErrorPage = () => {
  return (
    <Row
      justify="center"
      align="middle"
      style={{
        height: "100vh",
        color: "red",
      }}
    >
      <h1>Something Went Wrong!</h1>
      <Image src={ErrorImage} width={500} alt="login image" />
    </Row>
  );
};

export default ErrorPage;

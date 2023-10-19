import { Row } from "antd";
import NotFoundImage from "../assets/404 error with a tired person-amico.png"
import Image from "next/image";

const NotFoundPage = () => {
  return (
    <Row
      justify="center"
      align="middle"
      style={{
        height: "100vh",
      }}
    >
      <h1>404!!! Page Not Found!</h1>
      <Image src={NotFoundImage} width={500} alt="login image" />
    </Row>
  );
};

export default NotFoundPage;

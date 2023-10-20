import { Button, Card, Col, Row } from 'antd';
import Image from 'next/image'; // Import the Image component
import hero from "../../assets/Construction worker-pana.png"
const AppHeader = () => {
  return (
   
    <Row style={{marginTop:'100px'}}>
    <Col md={12} sm={22} xs={23}>
          
           <div style={{marginLeft:'50px'}}>
            <Image alt="" src={hero} width={400} height={400} />
      </div>
         </Col>
    <Col md={8} sm={22}  xs={23} style={{marginTop:'30px'}}> 
        
          <div style={{ textAlign: 'center' }}>
             <h2>Renovation Renovation Service</h2>
             <p style={{marginTop:'10px',color:'gray'}}>
              We offer top-quality home construction services that turn your dreams into reality. Our experienced team ensures excellence and satisfaction.
            </p>
            <div style={{marginTop:'10px'}}>
            <Button type="primary">Book Now</Button>
            </div>
          </div>
       </Col>
  </Row>
  );
};

export default AppHeader;

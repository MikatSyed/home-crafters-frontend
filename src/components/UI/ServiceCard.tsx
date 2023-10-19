
import { Card, Col, Rate } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import serviceImage from "../../assets/Sign up-amico.png"
const { Meta } = Card;
const ServiceCard = ( service:any ) => {  
    console.log(service);
    let data = service?.service;
    console.log(data?.averageRating);
    
   
  return (

      <>
        <Link href={`/services/${data.id}`}>
          <Col xs={24} sm={24} md={8} lg={6} xl={5} className="card" key={data.id}>
            <Card
              style={{
                width: 300,
              }}
              cover={
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Image
                    alt={data.name}
                    src={serviceImage}
                    height={180} // Adjust the height of the image as needed
                    width={180}  // Adjust the width of the image as needed
                  />
                </div>
              }
              actions={[
                <span className="text" key="1">{data?.category?.title}</span>,
                <span className="text" key="3">${data.price}</span>,
                
              ]}
            >
           <Meta
  title={data.name}
  description={
    <div>
      <span style={{ marginRight: '10px' }}>
        <Rate allowHalf disabled defaultValue={data?.averageRating} />
      </span>
      <span>({data?.totalReviews} reviews)</span>
    </div>
  }
/>
            </Card>
          </Col>
        </Link>
      </>
   
  );
};

export default ServiceCard;

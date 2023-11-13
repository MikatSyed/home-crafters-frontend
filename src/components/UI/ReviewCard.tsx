// import { EnvironmentFilled } from '@ant-design/icons';
import { Col, Rate, Row } from 'antd';
import Image from 'next/image';

const ReviewCard = ({ review }:any) => {
  console.log(review);

    return (
      <div className="content mtop">
              <Row gutter={[16, 16]}> 
            
                {review?.map((val:any) => (
            <Col xs={24} sm={24} md={12} lg={8} xl={8} key={val?.id} >
                  <div className="box" key={val?.id}>
                    <div className="details">
                      <div className="img">
                        <Image src={val?.user?.profileImg[0]} alt="" height={100} width={100} />
                      </div>
                      <label>{val?.user?.address}</label>
                      <h4>{val?.user?.name}</h4>
                    
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Rate disabled allowHalf defaultValue={val?.rating} style={{ fontSize: 16 }} />
                      </div>
       
                      <label>{val.comment}</label>
                    </div>
                  </div>  
                </Col>
                ))}
           
            </Row>
              </div>
    );
  };

  export default ReviewCard;
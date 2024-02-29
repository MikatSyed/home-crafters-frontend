
import Image from "next/image"
import Link from "next/link";
import styles from "../../styles/category.module.css";
import { Row,Col } from "antd";


const FeaturedCard = (data:any) => {
  

  return (
    <>
     
          <Row gutter={16} className="mtop">
        {data?.data?.map((item:any) => (
          <Col key={item.id} xs={12} sm={12} md={6} lg={4}>
            <Link href={`/category/${item.id}`} key={item.id}>
              <div className={styles.box} key={item.id}>
                <Image src={item?.categoryImg} alt="" width={100} height={100} />
                <h4>{item.title}</h4>
              </div>
            </Link>
          </Col>
        ))}
    </Row>
     

    </>
  )
}

export default FeaturedCard

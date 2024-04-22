"use client"

import styles from "../../../styles/contact.module.css";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormTextArea from "@/components/Forms/FormTextArea";
import { Col, Row } from "antd";


const Contact = () => {
  
  const onSubmit = async (values: any) => {

   
    try {
    
    } catch (err: any) {
     
    }
  };

  return (
    <section>
      
      <div>
      <div className={styles.about}>
        <p className={styles.pageTitle}>Home Service / Contact Us</p>
        <div className={styles.container}>
          <div className={styles.start}>
            <h1 className={styles.heading}>Contact Us </h1>
          </div>
        </div> 
      </div>
      
    </div>
    <section className='recent padding-bottom'>
        <div className='container'>
      <div  className="content mtop">
   <div className={styles.main}>
  
    <div >
        <h2>Reach Out to Us</h2>
        <Form submitHandler={onSubmit} >
        <Row>
          
        <Col md={12}
                sm={11}
                xs={20} style={{ margin: "10px 0",marginRight:'10px' }}>
            <FormInput name="name" label="Name" placeholder="Enter Name*"  />
          </Col>

          <Col md={11}
                sm={12}
                xs={20} style={{ margin: "10px 0" }}>
            <FormInput name="email" label="Email" placeholder="Enter Email Address*" />
          </Col>
        </Row>

          <Col md={24}
                sm={12}
                xs={20} style={{ margin: "10px 0" }}>
            <FormInput name="phone" label="Phone" placeholder="Enter Phone Number*" />
          </Col>
          
          <Col  md={24}
                sm={12}
                xs={20} style={{ margin: "10px 0" }}>
                <FormTextArea name="message" label="Message" rows={8} placeholder="Type Message" />
              </Col>

           
            
          <button type="submit" className="btn">
            Post
          </button>
        </Form>
    </div>
   </div>
</div>
</div>
</section>
    </section>
  );
};

export default Contact;

"use client";

import CategoryField from "@/components/Forms/CategoryField";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormTextArea from "@/components/Forms/FormTextArea";
import BreadCrumb from "@/components/UI/BreadCrumb";
import { useServiceQuery, useUpdateServiceMutation } from "@/redux/api/servicesApi";
import { Button, Col, Row, message } from "antd";
import toast, { Toaster } from "react-hot-toast";

type IDProps = {
  params: any;
};
const EditPage = ({params}:IDProps) => {
  const {id} = params;
  const{data} = useServiceQuery(id)
  console.log(data);
  const [updateService] = useUpdateServiceMutation();
  
  

  


  const onSubmit = async (values: any) => {
    const obj = {...values}
    obj.role = "user"
   
   message.loading("Creating..")
   
    try {
     const res : any =  await updateService({id,body:values}).unwrap()
     
      toast(res?.message,
        {
          icon:  <span style={{color:"green"}}>✔</span>,
          style: {
            borderRadius: '10px',
            background: '#FFBF00',
            color: '#fff',
          }
        })
    } catch (err: any) {
      toast(err?.data,
        {
          icon:  <span style={{color:"white"}}>❌</span>,
          style: {
            borderRadius: '10px',
            background: 'red',
            color: '#fff',
          }
        })
    }
  };

  const defaultValues = {
    name: data?.data?.name || "",
    price: data?.data?.price || "",
    location: data?.data?.location|| "",
    duration: data?.data?.duration || "",
    description: data?.data?.description || "",
    categoryId: data?.data?.categoryId || "",
}
  

  return (
    <>
      <BreadCrumb
        items={[
          {
            label: "Admin",
            link: "/admin",
          },
          {
            label: "Available Service",
            link: "/admin/available-service",
          },
        ]}
      />
       <Toaster  position="top-right"
  reverseOrder={false} />
      <h1>Update User </h1>
      <div>
      <Form submitHandler={onSubmit} defaultValues={defaultValues} >
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              marginBottom: "10px",
            }}
          >
            <p
              style={{
                fontSize: "18px",
                marginBottom: "10px",
              }}
            >
             Available Service Information
            </p>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col
                className="gutter-row"
                 md={8}
                sm={12}
                xs={20}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput type="text" name="name" size="large" label="Service Name"  />
              </Col>

              <Col
                className="gutter-row"
                 md={8}
                sm={12}
                xs={20}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type="text"
                  name="price"
                  size="large"
                  label="Price"
                />
              </Col>

              <Col
          className="gutter-row"
          span={8}
          style={{
            marginBottom: "10px",
          }}
        >
          <CategoryField
            name="categoryId"
            label="Category"
          />
        </Col>

              <Col
                className="gutter-row"
                 md={8}
                sm={12}
                xs={20}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type="text"
                  name="location"
                  size="large"
                  label="Location"
                />
              </Col>

              <Col
                className="gutter-row"
                 md={8}
                sm={12}
                xs={20}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type="text"
                  name="duration"
                  size="large"
                  label="Duration"
                />
              </Col>

              <Col  md={10}
                sm={12}
                xs={20} style={{ margin: "10px 0" }}>
                <FormTextArea name="description" label="Description" rows={4} />
              </Col>

            
             
            </Row>
          </div>

          <Button htmlType="submit" type="primary">
            Update
          </Button>
        </Form>
      </div>
    </>
  );
};

export default EditPage;

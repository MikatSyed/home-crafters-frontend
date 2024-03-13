"use client";

import CategoryField from "@/components/Forms/CategoryField";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormTextArea from "@/components/Forms/FormTextArea";
import BreadCrumb from "@/components/UI/BreadCrumb";
import { useAddServiceMutation } from "@/redux/api/servicesApi";
import { Button, Col, Row, message } from "antd";
import Image from "next/image";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaPlus } from "react-icons/fa6";

interface ServiceImage {
  id: number;
  url: string;
}
const CreateServicePage = () => {
  const [images, setImages] = useState<ServiceImage[]>([]);
  // console.log(images);

  const [imagesPreview, setImagesPreview] = useState<string[]>([]);
  const [addService] = useAddServiceMutation();

  // const departments:IDepartment[]= data?.departments;

  const onSubmit = async (values: any) => {
    const obj = { ...values };
    obj.price = parseInt(obj.price)
    obj.availbility = "available"
    images.forEach((image) => {
      obj.serviceImg = image?.url;
    });
    message.loading("Creating..");
    console.log(obj);
    try {
      const res = await addService(obj).unwrap();
      console.log(res);
      setImages([]);
      setImagesPreview([]);
      const message = res?.message || "Service Created successfully."
      toast(message, {
        icon: <span style={{ color: "green" }}>✔</span>,
        style: {
          borderRadius: "10px",
          background: "#FFBF00",
          color: "#fff",
        },
      });
    } catch (err: any) {
      toast(err?.data, {
        icon: <span style={{ color: "white" }}>❌</span>,
        style: {
          borderRadius: "10px",
          background: "red",
          color: "#fff",
        },
      });
    }
  };
  let counter = 0;

  const uniqueId = (): number => {
    counter += 1;
    return counter;
  };
  //@ts-ignore
  const createServiceImagesChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    let files: File[] = Array.from(e.target.files || []);

    // Assuming images and imagesPreview are properly typed arrays
    setImages((oldImages: ServiceImage[]) => []);
    setImagesPreview((oldImages: string[]) => []);

    files.forEach((file: File) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((oldImages: string[]) => [
            ...oldImages,
            reader.result as string,
          ]);
          // Assuming you have a valid way to create a ProductImage from the reader result
          const newServiceImage: ServiceImage = {
            id: uniqueId(), // replace with a function to generate unique IDs
            url: reader.result as string,
          };
          setImages((oldImages: ServiceImage[]) => [
            ...oldImages,
            newServiceImage,
          ]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

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
      <Toaster position="top-right" reverseOrder={false} />
      <h1>Add Service </h1>
      <div>
        <Form submitHandler={onSubmit} >
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
              Service Information
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
                <FormInput type="text" name="name" size="large" label="Service Name" />
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

              <Col   md={9}
                sm={12}
                xs={20} style={{ margin: "30px 0" }}>
  <div style={{ display: "flex", flexDirection: "row" }}>
    <div style={{ position: "relative", width: "100px", height: "100px" }}>
      <input
        accept="image/*"
        multiple
        type="file"
        name="avatar"
        onChange={createServiceImagesChange}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: 0,
          cursor: "pointer",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100px",
          height: "100px",
          border: "1px dashed #27ae60",
          borderRadius: "5px",
          backgroundColor: "#f9f9f9",
          fontSize: "14px",
          fontWeight: "bold",
        }}
      >
        <p><FaPlus/></p>
        <p>Upload</p>
      </div>
    </div>
    <div style={{padding:'0 5px'}}>
  
      {imagesPreview.map((image, index) => (
        <div key={index}>
          <Image
            src={image}
            alt="product Preview"
            height={100}
            width={100}
          />
        </div>
      ))}
   
    </div>
  
  </div>
</Col>

             
            </Row>
          </div>

          <button type="submit" className="btn" >
            Add 
          </button>
        </Form>
      </div>
    </>
  );
};

export default CreateServicePage;

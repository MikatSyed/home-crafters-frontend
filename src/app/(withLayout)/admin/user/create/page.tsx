"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormTextArea from "@/components/Forms/FormTextArea";
import BreadCrumb from "@/components/UI/BreadCrumb";
import { useRegistrationMutation } from "@/redux/api/authApi";
import { adminSchema } from "@/schemas/admin";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Image, Row, message } from "antd";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaPlus } from "react-icons/fa6";

interface ProductImage {
  id: number;
  url: string;
}
const CreateUserPage = () => {
  const [images, setImages] = useState<ProductImage[]>([]);
  // console.log(images);

  const [imagesPreview, setImagesPreview] = useState<string[]>([]);
  const [registration] = useRegistrationMutation();

  // const departments:IDepartment[]= data?.departments;

  const onSubmit = async (values: any) => {
    const obj = { ...values };
    obj.role = "user";
    images.forEach((image) => {
      obj.profileImg = image?.url;
    });
    message.loading("Creating..");

    try {
      const res = await registration(obj).unwrap();
      setImages([]);
      setImagesPreview([]);
      toast(res?.message, {
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
  const createproductImagesChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    let files: File[] = Array.from(e.target.files || []);

    // Assuming images and imagesPreview are properly typed arrays
    setImages((oldImages: ProductImage[]) => []);
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
          const newProductImage: ProductImage = {
            id: uniqueId(), // replace with a function to generate unique IDs
            url: reader.result as string,
          };
          setImages((oldImages: ProductImage[]) => [
            ...oldImages,
            newProductImage,
          ]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  return (
    <>
    
      <Toaster position="top-right" reverseOrder={false} />
     
      <div>
        <Form submitHandler={onSubmit} resolver={yupResolver(adminSchema)}>
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
              User Information
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
                <FormInput type="text" name="name" size="large" label="Name" />
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
                  type="email"
                  name="email"
                  size="large"
                  label="Email address"
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
                  type="password"
                  name="password"
                  size="large"
                  label="Password"
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
                  type="number"
                  name="contactNo"
                  size="large"
                  label="Contact No."
                />
              </Col>

            


              <Col   md={9}
                sm={12}
                xs={20} style={{ margin: "10px 0" }}>
  <div style={{ display: "flex", flexDirection: "row" }}>
    <div style={{ position: "relative", width: "100px", height: "100px" }}>
      <input
        accept="image/*"
        multiple
        type="file"
        name="avatar"
        onChange={createproductImagesChange}
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

<Col  md={8}
                sm={20}
                xs={20} style={{ margin: "10px 0" }}>
                <FormTextArea name="address" label="Present address" rows={4} />
              </Col>

           
            </Row>
          </div>

          <Button htmlType="submit" type="primary">
            Add
          </Button>
        </Form>
      </div>
    </>
  );
};

export default CreateUserPage;

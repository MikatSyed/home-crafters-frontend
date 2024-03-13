"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormTextArea from "@/components/Forms/FormTextArea";
import BreadCrumb from "@/components/UI/BreadCrumb";
import { useAddBlogMutation } from "@/redux/api/blogApi";
import { Button, Col, message } from "antd";
import Image from "next/image";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaPlus } from "react-icons/fa6";

interface ProductImage {
  id: number;
  url: string;
}
const CreateUserPage = () => {
 
  const [images, setImages] = useState<ProductImage[]>([]);
  const [imagesPreview, setImagesPreview] = useState<string[]>([]);
  const [addBlog] = useAddBlogMutation()
  
  const onSubmit = async (values: any) => {
    const obj = { ...values };
    images.forEach((image) => {
      obj.blogImg = image?.url;
    });
    message.loading("Creating..");
   
    try {
     const res =  await addBlog(obj).unwrap();
     setImages([]);
     setImagesPreview([]);
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
      <BreadCrumb
        items={[
          {
            label: "admin",
            link: "/admin",
          },
          {
            label: "blog",
            link: "/admin/blog",
          },
        ]}
      />
       <Toaster  position="top-right"
  reverseOrder={false} />
      <div >
      <h1>Add Blog</h1>
        <Form submitHandler={onSubmit} >
        
          <Col md={20}
                sm={12}
                xs={20} style={{ margin: "10px 0" }}>
            <FormInput name="title" label="Title" />
          </Col>
          
          <Col  md={20}
                sm={12}
                xs={20} style={{ margin: "10px 0" }}>
                <FormTextArea name="content" label="Content" rows={8} />
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
           
            
          <button type="submit" className="btn">
           Add Blog
          </button>
        </Form>
      </div>
    </>
  );
};

export default CreateUserPage;

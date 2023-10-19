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
      <h1>Create Blog</h1>
      <div>
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

              <Col
                className="gutter-row"
                 md={8}
                sm={12}
                xs={20}
                style={{
                  marginBottom: "10px",
                  marginTop: "20px",
                }}
              >
                <input
                  accept="image/*"
                  multiple
                  type="file"
                  name="avatar"
                  onChange={createproductImagesChange}
                />
                   {imagesPreview.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt="product Preview"    
                  width={100}
                  height={100}
                />
              ))}
              </Col>
           
            
          <Button htmlType="submit" type="primary">
            Post
          </Button>
        </Form>
      </div>
    </>
  );
};

export default CreateUserPage;

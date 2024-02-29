"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import BreadCrumb from "@/components/UI/BreadCrumb";
import { useAddCategoryMutation } from "@/redux/api/categoryApi";
import { Button, Col, Row, message } from "antd";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";

interface CategoryImage {
  id: number;
  url: string;
}

const CreateCategoryPage = () => {
  const [images, setImages] = useState<CategoryImage[]>([]);
  const [imagesPreview, setImagesPreview] = useState<string[]>([]);
  const [addCategory] = useAddCategoryMutation();

  const onSubmit = async (values: any) => {
    const obj = { ...values };
    images.forEach((image) => {
      obj.categoryImg = image?.url;
    });
    message.loading("Creating..");

    try {
      const res = await addCategory(obj).unwrap();
      console.log(res);
      setImages([]);
      setImagesPreview([]);
      toast("Category created successfully", {
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
  const base = "admin";

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
    setImages((oldImages: CategoryImage[]) => []);
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
          const newProductImage: CategoryImage = {
            id: uniqueId(), // replace with a function to generate unique IDs
            url: reader.result as string,
          };
          setImages((oldImages: CategoryImage[]) => [
            ...oldImages,
            newProductImage,
          ]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  return (
    <div>
      <BreadCrumb
        items={[
          { label: `${base}`, link: `/${base}` },
          { label: "category", link: `/${base}/category` },
        ]}
      />
      <h1>Create Category</h1>
      <Form submitHandler={onSubmit}>
      
          <Col
            md={8}
            sm={12}
            xs={20}
            style={{
              marginBottom: "10px",
              marginTop: "20px",
            }}
          >
            <FormInput name="title" label="Title" />
          </Col>
          <Col
           
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
       
        <Button type="primary" htmlType="submit">
          add
        </Button>
      </Form>
    </div>
  );
};

export default CreateCategoryPage;

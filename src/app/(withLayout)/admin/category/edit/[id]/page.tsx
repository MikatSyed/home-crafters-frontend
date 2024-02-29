"use client"
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import ActionBar from "@/components/UI/ActionBar";
import BreadCrumb from "@/components/UI/BreadCrumb";
import { useCategoryQuery, useUpdateCategoryMutation } from "@/redux/api/categoryApi";
import { Button, Col, Row, message } from "antd";

type IDProps = {
    params: any;
  };

  
const EditPage = ({params}:IDProps) => {
    const {id} = params;
  
    const{data,isLoading}:any = useCategoryQuery(id)
    const[updateCategory] = useUpdateCategoryMutation();
   

    
    
    const onSubmit = async (values: { title: string }) =>{
        message.loading("Updating.....");
        try {
        await updateCategory({id,body:values});
        message.success("Category updated successfully");
        }catch (err: any) {
           
            message.error(err.message);
          }
    }

    const defaultValues  = {
        title: data?.data?.title || ""
    }

    return (
        <div>
                <BreadCrumb
        items={[
          {
            label: "admin",
            link: "/admin",
          },
          {
            label: "category",
            link: "/admin/category",
          },
        ]}
      />

      <ActionBar title="Edit Category"> </ActionBar>
      <Form submitHandler={onSubmit} defaultValues={defaultValues}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FormInput name="title" label="Title" />
          </Col>
        </Row>
        <Button type="primary" htmlType="submit">
          Edit
        </Button>
      </Form>
        </div>
    );
};

export default EditPage;
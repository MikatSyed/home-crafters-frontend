"use client"
import { roleOptions } from "@/app/constants/global";
import Form from "@/components/Forms/Form";
import FormSelectField from "@/components/Forms/FormSelectField";
import ActionBar from "@/components/UI/ActionBar";
import BreadCrumb from "@/components/UI/BreadCrumb";
import { useUpdateUserMutation } from "@/redux/api/userApi";
import { Button, Col, Row, message } from "antd";
import toast, { Toaster } from "react-hot-toast";

type IDProps = {
    params: any;
  };

const EditPage = ({params}:IDProps) => {
    const {id} = params;
    console.log(id);

    const[updateUser] = useUpdateUserMutation();
    
    const onSubmit = async (values: { role: string }) =>{
        message.loading("Updating.....");
        try {
        await updateUser({id,body:values});
        toast("Role Updated Successfully",
            {
              icon:  <span style={{color:"green"}}>✔</span>,
              style: {
                borderRadius: '10px',
                background: '#FFBF00',
                color: '#fff',
              }
            })
        }catch (err: any) {
           
            message.error(err.message);
          }
    }

    // const defaultValues = {
    //     title: data?.role || ""
    // }

    return (
        <div>
                <BreadCrumb
        items={[
          {
            label: "super_admin",
            link: "/super_admin",
          },
          {
            label: "user",
            link: "/super_admin/user/",
          },
        ]}
      />
       <Toaster  position="top-right"
  reverseOrder={false} />

      <ActionBar title="Update Role User"> </ActionBar>
      <Form submitHandler={onSubmit} >
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col  md={8}
                sm={12}
                xs={20} style={{ margin: "10px 0" }}>
          <FormSelectField
            size="large"
            name="role"
            options={roleOptions}
            label="Role"
            placeholder="Select"
          />
          </Col>
        </Row>
        <Button type="primary" htmlType="submit">
          Update
        </Button>
      </Form>
        </div>
    );
};

export default EditPage;
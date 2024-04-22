"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { useChangePasswordMutation } from "@/redux/api/authApi";
import { useLoggedUserQuery } from "@/redux/api/userApi";
import { Button } from "antd";
import toast, { Toaster } from "react-hot-toast";

const ChangePassPage = () => {
  const [changePassword] = useChangePasswordMutation()
  const { data } = useLoggedUserQuery(undefined);


  // Check if user data is available
  const user = data?.data;
  const id = user?.id;
  
  const onSubmit = async (values: any) => {
    console.log(values);
    try {
    const res = await changePassword({id,body:values}).unwrap();
    toast(res?.message, {
      icon: <span style={{ color: "green" }}>✔</span>,
      style: {
        borderRadius: "10px",
        background: "#FFBF00",
        color: "#fff",
      },
    });
    console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      style={{ margin: "100px 0", display: "flex", justifyContent: "center" }}
    >
       <Toaster position="bottom-right" reverseOrder={false} />
      <Form submitHandler={onSubmit}>
        <h3 style={{ marginBottom: "10px" }}>Reset Password</h3>
        <div style={{ margin: "5px 0" }}>
          <FormInput name="oldPassword" label="Old password" type="password"/>
        </div>
        <div style={{ margin: "5px 0" }}>
          <FormInput name="newPassword" label="New password" type="password" />
        </div>
        <Button type="primary" htmlType="submit">
          submit
        </Button>
      </Form>
    </div>
  );
};

export default ChangePassPage;

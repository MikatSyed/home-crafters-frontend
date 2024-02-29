"use client";
import { Button, Col, Row } from "antd";
import loginImage from "../../assets/Tablet login-bro.png";
import Image from "next/image";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { useRouter } from "next/navigation";
import { storeUserInfo } from "../../../services/auth.service";
import { authSchema } from "@/schemas/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import toast, { Toaster } from 'react-hot-toast';
import Link from "next/link";
import { signIn } from "next-auth/react";


type FormValues = {
  email: string;
  password: string;
};

const LoginPage = ({callbackUrl}:any) => {
  // const [userLogin] = useUserLoginMutation();
  // const {push} = useRouter();

  const onSubmit = async (data: any) => {
   
    try {
      // const res = await userLogin({ ...data }).unwrap();
      const res = await signIn("home-crafters", {
        ...data,   
        callbackUrl
      });
     
      // console.log(res)
      // if (res?.token) {  
          // push("/profile");
          // message.success(res?.message)
          //  toast(res?.message,
          // {
          //   icon:  <span style={{color:"green"}}>✔</span>,
          //   style: {
          //     borderRadius: '10px',
          //     background: '#FFBF00',
          //     color: '#fff'
          //   }
          // })
      // }
      // storeUserInfo({ accessToken: res?.token });
     
    } catch (err: any) {
      // console.log(err);
      toast(err?.data,
        {
          icon:  <span style={{color:"white"}}>❌</span>,
          style: {
            borderRadius: '10px',
            background: 'red',
            color: '#fff'
          }
        })
    }
  };

  // const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
  //   console.log(data);
  //   try {
  //     const res = await userLogin({ ...data }).unwrap();
  //     // console.log(res)
  //     if (res?.token) {  
  //         push("/profile");
  //         // message.success(res?.message)
  //          toast(res?.message,
  //         {
  //           icon:  <span style={{color:"green"}}>✔</span>,
  //           style: {
  //             borderRadius: '10px',
  //             background: '#FFBF00',
  //             color: '#fff'
  //           }
  //         })
  //     }
  //     storeUserInfo({ accessToken: res?.token });
     
  //   } catch (err: any) {
  //     // console.log(err);
  //     toast(err?.data,
  //       {
  //         icon:  <span style={{color:"white"}}>❌</span>,
  //         style: {
  //           borderRadius: '10px',
  //           background: 'red',
  //           color: '#fff'
  //         }
  //       })
  //   }
  // };

  return (
  <>
   <Toaster  position="top-right"
  reverseOrder={false} />
    <Row
      justify="center"
      align="middle"
      style={{
        minHeight: "100vh"
      }}
    >
      <Col sm={12} md={8} lg={8}>
        <h1
          style={{
            margin: "15px 0px"
          }}
        >
          First login your account
        </h1>
        <div>
          <Form submitHandler={onSubmit} resolver={yupResolver(authSchema)}>
            <div>
              <FormInput name="email" type="email" size="large" label="Email" />
            </div>
            <div
              style={{
                margin: "15px 0px",
              }}
            >
              <FormInput
                name="password"
                type="password"
                size="large"
                label="User Password"
              />
            </div>
            <Button  htmlType="submit">
              Login
            </Button>
          </Form>
        </div>
        <div
            style={{
              marginTop: "15px",
              textAlign: "center"
            }}
          >
            <Link href="/registration">
              <p>Donot have an account? Register here</p>
            </Link>
          </div>
      </Col>

      <Col xs={{ span: 0 }} sm={{ span: 0 }} md={{ span: 16 }} lg={{ span: 10 }}>
        <Image src={loginImage} width={500} alt="login image" />
      </Col>
    
    </Row>
  </>
  );
};

export default LoginPage;
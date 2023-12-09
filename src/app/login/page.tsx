
import LoginPage from '@/components/Login/Login';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "HC| Login",
  };

  
const Login = ({searchParams:{callbackUrl}}:any) => {

    return (
        <div>
            <LoginPage callbackUrl={callbackUrl || "/profile"}/>
           
        </div>
    );
};

export default Login;
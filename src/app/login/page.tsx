import LoginPage from '@/components/Login/Login';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "HC| Login",
  };

  
const Login = () => {

    return (
        <div>
            <LoginPage/>
        </div>
    );
};

export default Login;
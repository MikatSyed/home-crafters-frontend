"use client"
import { Button, Result } from 'antd';
import { ResultStatusType } from 'antd/es/result';
import { useRouter } from 'next/navigation';
import React from 'react';

const PaymentSuccess = ({ searchParams }: any) => {
    const { status } = searchParams;
  // console.log(searchParams);
  const resultTitle =
    status === "success" ? "Successfully Paid" : "Something Went Wrong...";
    const router = useRouter()
    return (
        <div>
            <Result
        status={status as ResultStatusType}
        title={resultTitle}
        extra={[
          <Button
            type="primary"
            key="console"
            onClick={() => {
              router.push("/user/booking");
            }}
          >
            View booking list
          </Button>,
        ]}
      />
        </div>
    );
};

export default PaymentSuccess;
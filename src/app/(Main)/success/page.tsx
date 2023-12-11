"use client";

import {Button, Result } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

function PaymentResultPage() {
  const router = useRouter();

  return (
    <>
      <Result
    
        status="success"
        title="Successfully Paid"
        extra={[
          <Button
          key="seeBookingButton" 
            onClick={() => {
              router.push("/user/booking");
            }}
          >
        See My Booking
          </Button>,
        ]}
      />
    </>
  );
}

export default PaymentResultPage;
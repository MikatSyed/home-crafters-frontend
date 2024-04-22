"use client";

import { scheduleOptions } from "@/app/constants/global";
import Form from "@/components/Forms/Form";
import FormSelectField from "@/components/Forms/FormSelectField";
import BreadCrumb from "@/components/UI/BreadCrumb";
import { useAddTimeSlotMutation } from "@/redux/api/timeSlot";
import { Button, Col, Row, message } from "antd";
import toast, { Toaster } from "react-hot-toast";

const CreateSchedulePage = () => {
  const [addTimeSlot] = useAddTimeSlotMutation();
  const onSubmit = async (data: any) => {
    message.loading("Creating.....");

    try {
const res = await addTimeSlot(data).unwrap()
toast(res?.message, {
  icon: <span style={{ color: "green" }}>✔</span>,
  style: {
    borderRadius: "10px",
    background: "#27ae60",
    color: "#fff",
  },
});
    } catch (err: any) {
      console.error(err.message);
      message.error(err.data);
    }
  };
  const base = "admin";
  return (
    <div>
      <BreadCrumb
        items={[
          { label: `${base}`, link: `/${base}` },
          { label: "schedule", link: `/${base}/schedule` },
        ]}
      />
         <Toaster  position="bottom-right"
  reverseOrder={false} />
      <h1>Create Schedule</h1>
      <Form submitHandler={onSubmit}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
        <Col
          className="gutter-row"
          span={8}
          style={{
            marginBottom: "10px",
          }}
        >
          <FormSelectField
            size="large"
            name="startTime"
            options={scheduleOptions}
            label="Schedule"
            placeholder="Select"
          />
        </Col>
        </Row>
        <Button type="primary" htmlType="submit">
          add
        </Button>
      </Form>
    </div>
  );
};

export default CreateSchedulePage;

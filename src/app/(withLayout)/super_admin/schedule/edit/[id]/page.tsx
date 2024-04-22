"use client";

import { scheduleOptions } from "@/app/constants/global";
import Form from "@/components/Forms/Form";
import FormSelectField from "@/components/Forms/FormSelectField";
import BreadCrumb from "@/components/UI/BreadCrumb";
import {  useUpdateTimeSlotMutation } from "@/redux/api/timeSlot";
import { Button, Col, Row, message } from "antd";

type IDProps = {
  params: any
}
const UpdateDepartmentPage = ({params}:IDProps) => {
  const {id} = params;
  const [updateTimeSlot] = useUpdateTimeSlotMutation();
  const onSubmit = async (data: any) => {
    message.loading("Updating.....");
    try {
    const res =  await updateTimeSlot({id,body:data}).unwrap()
     message.success(res?.message);
    } catch (err: any) {
      console.error(err.message);
      message.error(err.message);
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
      <h1>Edit Schedule</h1>
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

export default UpdateDepartmentPage;

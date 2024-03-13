import { Modal, Form, Input, Button } from "antd";
import { FormInstance } from "antd/lib/form";
import { ReactNode } from "react";

interface UserCreateModalProps {
  visible: boolean;
  onCancel: () => void;
  onCreate: (values: any) => void;
  children: ReactNode;
}

const UserCreateModal: React.FC<UserCreateModalProps> = ({
  visible,
  onCancel,
  onCreate,
  children,
}) => {
  const [form] = Form.useForm();

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields();
        onCreate(values);
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  return (
    <Modal
      title=""
      visible={visible}
      onCancel={onCancel}
      footer={[
        <Button key="back" onClick={onCancel}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" onClick={handleOk}>
          Create
        </Button>,
      ]}
    >
      <Form form={form} layout="vertical">
        {children}
      </Form>
    </Modal>
  );
};

export default UserCreateModal;

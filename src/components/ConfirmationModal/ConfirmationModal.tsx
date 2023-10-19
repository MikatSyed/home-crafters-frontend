import React from 'react';
import { Modal } from 'antd';
import { ExclamationCircleFilled } from '@ant-design/icons';

export interface ConfirmationModalProps {
  title: string;
  content: string;
  visible: boolean;
  onOk: () => Promise<void>;
  onCancel: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  title,
  content,
  visible,
  onOk,
  onCancel,
}) => {
  
  const handleOk = async () => {
   
    await onOk();
    // Close the modal after successful action
    onCancel();
  };

  return (
    <Modal
    
    title={
      <>
        <ExclamationCircleFilled style={{ marginRight: 8,color:'red' }} />
        {title}
      </>
    }
      visible={visible}
      onOk={handleOk}
      onCancel={onCancel}
      okText="OK"
      okType="danger"
      cancelText="Cancel"
      width={400}
    
    >
      <p>{content}</p>
    </Modal>
  );
};

export default ConfirmationModal;

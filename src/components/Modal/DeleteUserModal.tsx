import React from 'react';
import { Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const { confirm } = Modal;

const DeleteUserModal = ({ visible, onDelete, onCancel }:any) => {
  const showDeleteConfirm : any= () => {
    confirm({
      title: 'Do you Want to delete these items?',
      icon: <ExclamationCircleOutlined />,
      content: "You won't be able to revert this!",
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk: onDelete,
      onCancel,
    });
  };

  return (
    <Modal
      visible={visible}
      onCancel={onCancel}
      footer={null}
    >
      {showDeleteConfirm()}
    </Modal>
  );
};

export default DeleteUserModal;

"use client";
import BreadCrumb from "@/components/UI/BreadCrumb";
import UMTable from "@/components/UI/Table";
import { Button, message } from "antd";
import Link from "next/link";
import { useState } from "react";
import dayjs from "dayjs";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import ActionBar from "@/components/UI/ActionBar";
import Input from "antd/es/input/Input";
import {RedoOutlined} from "@ant-design/icons"
import { useDebounced } from "@/redux/hook";
import ConfirmationModal, { ConfirmationModalProps } from "@/components/ConfirmationModal/ConfirmationModal";
import { useDeleteTimeSlotsMutation, useTimeSlotsQuery } from "@/redux/api/timeSlot";
import { FaPlus } from "react-icons/fa6";

const ManageSchedulePage = () => {
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [id,setId] = useState<string>("")


  const [deleteDepartment] = useDeleteTimeSlotsMutation();

  const query: Record<string, any> = {};


  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;
  // query["searchTerm"] = searchTerm;

  const debouncedTerm = useDebounced({
    searchQuery : searchTerm,
    delay: 600
  })
 

  if(!!debouncedTerm){
      query["searchTerm"] = debouncedTerm;
  }

  const { data, isLoading } = useTimeSlotsQuery({ ...query });
  const departments = data?.data;
  console.log(departments);
  const meta = data?.meta;

  const showModal = () => {
    setIsModalVisible(true);
  };

  const deleteHandler = async (id: string) => {
    
    try {
      showModal()
      setId(id)
     
    
    } catch (err: any) {
      //   console.error(err.message);
      message.error(err.message);
    }
  };
  
  const handleOk = async () => {
    await deleteDepartment(id)
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  




  const columns = [
    {
      title: "Schedule",
      dataIndex: "startTime",
    },
    {
      title: "CreatedAt",
      dataIndex: "createdAt",
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      },
      sorter: true,
    },
    {
      title: "Action",
      render: function (data: any) {
        return (
          <>
            <Link href={`/admin/schedule/edit/${data?.id}`}>
              <Button
                style={{
                  margin: "0px 5px",
                }}
                type="primary"
              >
                <EditOutlined />
              </Button>
            </Link>
            <Button type="primary" danger
             onClick={() => deleteHandler(data?.id)} >
              <DeleteOutlined />
            </Button>
          </>
        );
      },
    },
  ];

  const onPaginationChange = (page: number, pageSize: number) => {
    setPage(page);
    setSize(pageSize);
  };

  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
    setSortBy(field);
    setSortOrder(order === "ascend" ? "asc" : "desc");
  };

  const resetFilters = () => {
    setSortBy("")
    setSortOrder("")
    setSearchTerm("")
  }
  const modalProps: ConfirmationModalProps = {
    title: 'Do you Want to delete these items?',
    content: "You won't be able to revert this!",
    onOk: handleOk,
    onCancel: handleCancel,
    visible: isModalVisible
  };


  return (
    <div>
      <BreadCrumb
        items={[
          {
            label: "admin",
            link: "/admin",
          },
        ]}
      />
        <ConfirmationModal {...modalProps} />

      <ActionBar title="Schedule List">
        <Input
          type="text"
          size="large"
          placeholder="Searching..."
          style={{ width: "20%" }}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div>
          <Link href="/admin/schedule/create">
            <button className="btn"><FaPlus/>Add Schedule</button>
          </Link>

        {(!!sortBy || !!sortOrder || !!searchTerm) && (
          <Button type="primary" style={{ margin: "0px 5px" }} onClick={resetFilters}><RedoOutlined/></Button>
        )}

        </div>
      </ActionBar>

      <UMTable
        dataSource={departments}
        columns={columns}
        loading={isLoading}
        onTableChange={onTableChange}
        onPaginationChange={onPaginationChange}
        pageSize={size}
        totalPages={meta?.total}
        showSizeChanger={true}
        showPagination={true}
        scroll={true}
      />
    </div>
  );
};

export default ManageSchedulePage;

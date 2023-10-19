"use client";

import { Button, Input } from "antd";
import Link from "next/link";
import {
  DeleteOutlined,
  EditOutlined,
  ReloadOutlined,

} from "@ant-design/icons";
import { useState } from "react";
import dayjs from "dayjs";
import BreadCrumb from "@/components/UI/BreadCrumb";
import ActionBar from "@/components/UI/ActionBar";
import UMTable from "@/components/UI/Table";
import ConfirmationModal, { ConfirmationModalProps } from "@/components/ConfirmationModal/ConfirmationModal";
import toast, { Toaster } from "react-hot-toast";
import { useDeleteServiceMutation, useServicesQuery } from "@/redux/api/servicesApi";
import { useBookingsQuery, useDeleteBookingMutation } from "@/redux/api/bookingApi";
import { useLoggedUserQuery } from "@/redux/api/userApi";



const AdminPage = () => {
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [id,setId] = useState<string>("");
  const { data: loginData } = useLoggedUserQuery(undefined);

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;

  const { data, isLoading } = useBookingsQuery(undefined)
  console.log(data);
  
  const [ deleteBooking] = useDeleteBookingMutation();
  const booking = data?.data;
  const res = data?.data?.filter((data:any)=> data.userId === loginData.data.id )
  console.log(res);
  const meta = data?.meta;


  const handleOk = async () => {
    console.log(id);
    const res = await deleteBooking(id).unwrap()
    setIsModalVisible(false);
    toast(res?.message,
    {
      icon:  <span style={{color:"green"}}>✔</span>,
      style: {
        borderRadius: '10px',
        background: '#FFBF00',
        color: '#fff',
      }
    })
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };


  const columns = [
  
    {
      title: "bookingDate",
      dataIndex: "bookingDate",
    },

    {
      title: "User Name",
      dataIndex: ["user", "name"], // Access user name through the "user" relation
    },
    {
      title: "Service Name",
      dataIndex: ["service", "name"], // Access service name through the "service" relation
    },
    {
      title: "Slot Title",
      dataIndex: ["slot", "startTime"], // Access slot title through the "slot" relation
    },
    {
      title: "Status",
      dataIndex: "status",
    },

    {
      title: "Created at",
      dataIndex: "createdAt",
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      },
      sorter: true,
    },
    {
      title: "Action",
      dataIndex: "id",
      render: function (data: any) {
        return (
          <>
            {/* <Link href={`/super_admin/admin/details/${data.id}`}>
              <Button onClick={() => console.log(data)} type="primary">
                <EyeOutlined />
              </Button>
            </Link> */}
          
            <Button
              onClick={() =>  {
                setIsModalVisible(true)
                setId(data)
              }
              }
              type="dashed"
              danger
            >
            
              Withdraw Booking
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
    setSortBy(field as string);
    setSortOrder(order === "ascend" ? "asc" : "desc");
  };

  const resetFilters = () => {
    setSortBy("");
    setSortOrder("");
  
  };

  const modalProps: ConfirmationModalProps = {
    title: 'Are you sure,you want to withdraw this booking ?',
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
            label: "Admin",
            link: "/admin",
          },
         
        ]}
      />
        <Toaster  position="top-right"
  reverseOrder={false} />
      <ActionBar title="Booking List">
      <ConfirmationModal {...modalProps} />

        {/* <Input
          size="large"
          placeholder="Search"
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: "20%",
          }}
        /> */}
        <div>
        
          {(!!sortBy || !!sortOrder ) && (
            <Button
              style={{ margin: "0px 5px" }}
              type="primary"
              onClick={resetFilters}
            >
              <ReloadOutlined />
            </Button>
          )}
        </div>
      </ActionBar>

      <UMTable
        loading={isLoading}
        columns={columns}
        dataSource={res}
        pageSize={size}
        totalPages={meta?.total}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
        scroll={true}
      />
    </div>
  );
};

export default AdminPage;

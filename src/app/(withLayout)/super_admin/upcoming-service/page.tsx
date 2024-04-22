"use client";

import { Button, Input, Select } from "antd";
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
import { useDeleteServiceMutation, useServicesQuery, useUpdateServiceMutation } from "@/redux/api/servicesApi";
import { FaPlus } from "react-icons/fa6";



const AdminPage = () => {
  const { Option } = Select;
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [id,setId] = useState<string>("");
  const [status,setStatus] = useState<string>("")
  

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;


  
  
  const { data, isLoading } = useServicesQuery({ ...query })
  console.log(data);
  const [ deleteService] = useDeleteServiceMutation();
  const services = data?.data;
  const res = services?.filter((data:any)=> data.availbility === "upcoming" )
  console.log(res);
  const meta = data?.meta;
  const [updateService] = useUpdateServiceMutation();


  const handleOk = async () => {
    console.log(id);
    const res = await deleteService(id).unwrap()
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

  
  const handleStatusChange = async (id: string) => {
    try {
      // Update only the availability field
      await updateService({ id, body: { availbility: 'available' } }).unwrap();
  
      // Show success toast
      toast("Service updated successfully from Upcoming to Available", {
        icon: <span style={{ color: "green" }}>✔</span>,
        style: {
          borderRadius: '10px',
          background: '#FFBF00',
          color: '#fff',
        }
      });
    } catch (error) {
      // Show error toast if update fails
      toast("Failed to update service", {
        icon: <span style={{ color: "red" }}>✖</span>,
        style: {
          borderRadius: '10px',
          background: '#FFBF00',
          color: '#fff',
        }
      });
    }
  };
  const columns = [
  
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "Location",
      dataIndex: "location",
    },
    {
      title: "Category",
      dataIndex: "category",
      render: (category:any) => category?.title
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
      title: "Status",
      dataIndex: "id",
      render: function (data: any) {
        return (
          <>        
             <Select value="Upcoming" style={{ width: 120 }}   onChange={()=>handleStatusChange(data)}>

      <Option value="available">Available</Option>
      {/* Add more options if needed */}
             </Select>   
          </>
        );
      },
    },
    {
      title: "Action",
      dataIndex: "id",
      render: function (data: any) {
        return (
          <>
       
            <Link href={`/admin/upcoming-service/edit/${data}`}>
              <Button 
                style={{
                  margin: "0px 3px",
                }}
                onClick={() => console.log(data)}
                
              >
                <EditOutlined />Edit
              </Button>
            </Link>
            <Button
              onClick={() =>  {
                setIsModalVisible(true)
                setId(data)
              }
              }
              type="dashed"
              danger
            >
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
    setSortBy(field as string);
    setSortOrder(order === "ascend" ? "asc" : "desc");
  };

  const resetFilters = () => {
    setSortBy("");
    setSortOrder("");
  
  };

  const modalProps: ConfirmationModalProps = {
    title: 'Do you Want to delete these items?',
    content: "You won't be able to revert this!",
    onOk: handleOk,
    onCancel: handleCancel,
    visible: isModalVisible
  };


  return (
    <>
     <ConfirmationModal {...modalProps} />
      <BreadCrumb
        items={[
          {
            label: "Upcoming Service",
            link: "/admin/upcoming-service",
          },
         
        ]}
      />
        
      <div style={{display:'flex', justifyContent:'space-between'}}>
  
  <div>
  <ActionBar title="Service List"/>
  </div>
  <div> 
 <Link href="/admin/upcoming-service/create">

 <button className="btn"
   >
   <FaPlus/>Add Service</button>
 </Link>
   
 
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
 </div>

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
    </>
  );
};

export default AdminPage;

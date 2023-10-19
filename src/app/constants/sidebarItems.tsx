import { MenuProps } from "antd"
import {
    ProfileOutlined,
    TableOutlined,
    AppstoreOutlined,
    ScheduleOutlined,
    ThunderboltOutlined,
    CreditCardOutlined,
    FileTextOutlined,
  } from "@ant-design/icons";
import Link from "next/link";
import { USER_ROLE } from "./role";

export const sidebarItems = (role:string)=>{

    const defaultSidebarItems: MenuProps["items"] = [
        {
            label: "Profile",
            key: "profile",
            icon: <ProfileOutlined/>,
            children: [
                {
                    label: <Link href={`/profile`}>Account Profile</Link>,
                    key: `/${role}/profile`,
                  },
                 
            ]
        }
    ]

    const commonAdminSidebarItems: MenuProps["items"] = [
        {
          label: <Link href={`/${role}/manage-student`}>Manage Students</Link>,
          icon: <TableOutlined />,
          key: `/${role}/manage-student`,
        },
        {
          label: <Link href={`/${role}/manage-faculty`}>Manage Faculty</Link>,
          icon: <TableOutlined />,
          key: `/${role}/manage-faculty`,
        },
      ];
    
      const adminSidebarItems: MenuProps["items"] = [
        
        // ...commonAdminSidebarItems,
        {
          label: <Link href={`/${role}/dashboard`}>Dashboard</Link>,
          icon: <TableOutlined />,
          key: `/${role}/dashboard`,
        },
        {
          label: <Link href={`/${role}/user`}>Manage User</Link>,
          icon: <TableOutlined />,
          key: `/${role}/user`,
        },
        ...defaultSidebarItems,
        {
          label: <Link href={`/${role}/booking`}>Manage Booking</Link>,
          icon: <TableOutlined />,
          key: `/${role}/booking`,
        },
        {
          label: <Link href={`/${role}/upcoming-service`}>Upcoming Services</Link>,
          icon: <TableOutlined />,
          key: `/${role}/upcoming-service`,
        },
        {
          label: <Link href={`/${role}/available-service`}>Available Services</Link>,
          icon: <TableOutlined />,
          key: `/${role}/available-service`,
        },
        {
          label: <Link href={`/${role}/blog`}>Manage Blog</Link>,
          icon: <TableOutlined />,
          key: `/${role}/blog`,
        },
        {
          label: <Link href={`/${role}/faq`}>Manage Faq</Link>,
          icon: <TableOutlined />,
          key: `/${role}/faq`,
        },
        {
          label: <Link href={`/${role}/schedule`}>Manage Schedule </Link>,
          icon: <TableOutlined />,
          key: `/${role}/schedule`,
        },
        {
          label: <Link href={`/${role}/category`}>Manage Category</Link>,
          icon: <TableOutlined />,
          key: `/${role}/category`,
        },
       
      ];
    
      const superAdminSidebarItems: MenuProps["items"] = [
        ...defaultSidebarItems,
        // ...commonAdminSidebarItems,
        {
          label: <Link href={`/${role}/admin`}>Manage Admin</Link>,
          icon: <TableOutlined />,
          key: `/${role}/admin`,
        },
        {
          label: <Link href={`/${role}/user`}>Manage User</Link>,
          icon: <TableOutlined />,
          key: `/${role}/user`,
        },
       
      ];
    
      const userSidebarItems: MenuProps["items"] = [
        ...defaultSidebarItems,
        {
          label: <Link href={`/${role}/booking`}>Booking</Link>,
          icon: <TableOutlined />,
          key: `/${role}/booking`,
        },
      ];
    
      const studentSidebarItems: MenuProps["items"] = [
        ...defaultSidebarItems,
        {
          label: <Link href={`/${role}/courses`}>Courses</Link>,
          icon: <TableOutlined />,
          key: `/${role}/courses`,
        },
        {
          label: <Link href={`/${role}/courses/schedule`}>Course schedules</Link>,
          icon: <ScheduleOutlined />,
          key: `/${role}/courses/schedule`,
        },
        {
          label: <Link href={`/${role}/registration`}>Registration</Link>,
          icon: <ThunderboltOutlined />,
          key: `/${role}/registration`,
        },
        {
          label: <Link href={`/${role}/payment`}>Payment</Link>,
          icon: <CreditCardOutlined />,
          key: `/${role}/payment`,
        },
        {
          label: <Link href={`/${role}/academic-report`}>Academic report</Link>,
          icon: <FileTextOutlined />,
          key: `/${role}/academic-report`,
        },
      ];

if(role === USER_ROLE.SUPER_ADMIN) return superAdminSidebarItems;
else if(role === USER_ROLE.ADMIN) return adminSidebarItems;
else if(role === USER_ROLE.USER) return userSidebarItems;

else {
    return defaultSidebarItems
}



}
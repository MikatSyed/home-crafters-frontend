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
import { FaUserFriends,FaUserCircle,FaCalendarAlt,FaTools ,FaFileAlt,FaMoneyCheck,FaClone    } from "react-icons/fa";
import { AiFillCalendar,AiFillAppstore,AiFillSchedule   } from "react-icons/ai";
import { MdCategory,MdAdminPanelSettings  } from "react-icons/md";
import React from "react";


export const sidebarItems = (role:string)=>{
  const setIconSize = (icon: React.ReactNode, size: string) =>
  React.cloneElement(icon as React.ReactElement, { style: { fontSize: size } });


    const defaultSidebarItems: MenuProps["items"] = [
      
        {
            label: "Profile",
            key: "profile",
            icon: setIconSize(<FaUserCircle />,"1.2rem"),
            children: [
                {
                    label: <Link href={`/profile`}>Account Profile</Link>,
                    key: `/${role}/profile`,
                  },
                 
            ]
        },
    
      
    ]

  
    
      const adminSidebarItems: MenuProps["items"] = [
     
        {
          label: <Link href={`/${role}/dashboard`}>Dashboard</Link>,
          icon: setIconSize(<AiFillAppstore />, "1.2rem"),
          key: `/${role}/dashboard`,
        },
        ...defaultSidebarItems,
        {
          label: <Link href={`/${role}/user`}>Manage User</Link>,
          icon: setIconSize(<FaUserFriends />,"1.2rem"),
          key: `/${role}/user`,
        },
       
        {
          label: "Manage Service",
          key: "service",
          icon: setIconSize(<FaClone/>,"1.2rem"),
          children: [
              {
                  label: <Link href={`/${role}/upcoming-service`}>Upcoming Services</Link>,
                  key: `/${role}/upcoming-service`,
                },
              {
                  label: <Link href={`/${role}/available-service`}>Available Services</Link>,
                  key: `/${role}/available-service`,
                },
               
          ]
      },
      {
        label: <Link href={`/${role}/booking`}>Manage Booking</Link>,
        icon: setIconSize(<AiFillCalendar />,"1.2rem"),
        key: `/${role}/booking`,
      },
        // {
        //   label: <Link href={`/${role}/upcoming-service`}>Upcoming Services</Link>,
        //   icon: <FaTools />,
        //   key: `/${role}/upcoming-service`,
        // },
        // {
        //   label: <Link href={`/${role}/available-service`}>Available Services</Link>,
        //   icon: <TableOutlined />,
        //   key: `/${role}/available-service`,
        // },
        {
          label: <Link href={`/${role}/blog`}>Manage Blog</Link>,
          icon: setIconSize(<FaFileAlt />,"1.2rem"),
          key: `/${role}/blog`,
        },
        {
          label: <Link href={`/${role}/faq`}>Manage Faq</Link>,
          icon: setIconSize(<FaMoneyCheck />,"1.2rem"),
          key: `/${role}/faq`,
        },
        {
          label: <Link href={`/${role}/schedule`}>Manage Schedule </Link>,
          icon: setIconSize(<AiFillSchedule />,"1.2rem"),
          key: `/${role}/schedule`,
        },
        {
          label: <Link href={`/${role}/category`}>Manage Category</Link>,
          icon: setIconSize(<MdCategory />,"1.2rem"),
          key: `/${role}/category`,
        },
       
      ];
    
      const superAdminSidebarItems: MenuProps["items"] = [
        ...defaultSidebarItems,
        // ...commonAdminSidebarItems,
        {
          label: <Link href={`/${role}/admin`}>Manage Admin</Link>,
          icon: setIconSize(<MdAdminPanelSettings />,"1.2rem"),
          key: `/${role}/admin`,
        },
        {
          label: <Link href={`/${role}/user`}>Manage User</Link>,
          icon: setIconSize(<FaUserFriends />,"1.2rem"),
          key: `/${role}/user`,
        },
       
      ];
    
      const userSidebarItems: MenuProps["items"] = [
        ...defaultSidebarItems,
        {
          label: <Link href={`/${role}/booking`}>Booking</Link>,
          icon: setIconSize(<AiFillCalendar />,"1.2rem"),
          key: `/${role}/booking`,
        },
      ];
    
   
if(role === USER_ROLE.SUPER_ADMIN) return superAdminSidebarItems;
else if(role === USER_ROLE.ADMIN) return adminSidebarItems;
else if(role === USER_ROLE.USER) return userSidebarItems;

else {
    return defaultSidebarItems
}



}
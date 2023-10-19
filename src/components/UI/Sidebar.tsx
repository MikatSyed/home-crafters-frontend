"use client";
import React, { useEffect, useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';
import { sidebarItems } from '@/app/constants/sidebarItems';
import { USER_ROLE } from '@/app/constants/role';
import { getUserInfo } from '../../../services/auth.service';
import logo from "../../assets/images.jpg"
import Image from 'next/image';
import Link from 'antd/es/typography/Link';
const { Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(true);  // Initially collapsed for small devices
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsMobile(screenWidth < 768);

      // If the device width is less than 768 pixels, keep the sidebar collapsed
      if (screenWidth < 768) {
        setCollapsed(true);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const { role } = getUserInfo() as any;
  const handleCollapse = (value: boolean) => {
    if (window.innerWidth >= 768) {
      setCollapsed(value);
    }
  };

  return (
    
    <Sider
    collapsible={!isMobile}  // Make collapsible only for devices with width >= 768
    collapsed={collapsed}
    onCollapse={handleCollapse}
    breakpoint="lg"
    collapsedWidth={80}
    width={280}
    style={{
      overflow: "auto",
      minHeight: "100vh",
      position: "sticky",
      left: 0,
      top: 0,
      bottom: 0,
      backgroundColor: "#fff",      
    }}
  >
   <Link href="/">
   <div
      style={{
        color: "white",
        fontSize: collapsed ? "0rem" : "2.2rem",
        textAlign: "center",
        fontWeight: "bold",
        marginBottom: "1rem",
      }}
    >
      {collapsed ? <Image src={logo} alt="logo" width="50"/> : <Image src={logo} alt="logo" width="100"/>}
    </div>
   </Link>
    <Menu
      theme="light"
      defaultSelectedKeys={["1"]}
      mode="inline"
      items={sidebarItems(role)}
    />
  </Sider>

    
  );
};

export default SideBar;
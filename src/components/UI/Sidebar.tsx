"use client"
import React, { useEffect, useState } from 'react';
import { Layout, Menu } from 'antd';
import { sidebarItems } from '@/app/constants/sidebarItems';
import Link from 'antd/es/typography/Link';
import { getSession } from 'next-auth/react';

const { Sider } = Layout;

const SideBar = async () => {
  const [collapsed, setCollapsed] = useState(true);
  const [isMobile, setIsMobile] = useState(false); // Initialize as false

  useEffect(() => {
    const handleResize = () => {
      // Check if window is defined before accessing its properties
      if (typeof window !== 'undefined') {
        const screenWidth = window.innerWidth;
        setIsMobile(screenWidth < 768);

        // If the device width is less than 768 pixels, keep the sidebar collapsed
        if (screenWidth < 768) {
          setCollapsed(true);
        }
      }
    };

    // Attach the event listener only on the client side
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
    }

    // Clean up the event listener when the component unmounts
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  const session: any = await getSession();

  const handleCollapse = (value: boolean) => {
    if (typeof window !== 'undefined' && window.innerWidth >= 768) {
      setCollapsed(value);
    }
  };

  return (
    <Sider
      collapsible={!isMobile}
      collapsed={collapsed}
      onCollapse={handleCollapse}
      breakpoint="lg"
      collapsedWidth={80}
      width={280}
      style={{
        overflow: 'auto',
        minHeight: '100vh',
        position: 'sticky',
        left: 0,
        top: 0,
        bottom: 0,
        backgroundColor: '#fff',
      }}
    >
      <Link href="/">
        <div></div>
      </Link>
      <Menu
        theme="light"
        defaultSelectedKeys={['1']}
        mode="inline"
        items={sidebarItems(session?.role)}
        style={{ fontSize: '1rem', fontWeight: '500' }}
      />
    </Sider>
  );
};

export default SideBar;

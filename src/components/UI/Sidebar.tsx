// SideBar.tsx
import React from 'react';
import { Button, Layout, Menu } from 'antd';
import { sidebarItems } from '@/app/constants/sidebarItems';
import Link from 'antd/es/typography/Link';
import { FaHouseChimneyWindow } from 'react-icons/fa6';
import { CgLogOut } from "react-icons/cg";
const { Sider } = Layout;

const SideBar = ({ collapsed, onCollapse }: { collapsed: boolean; onCollapse: () => void }) => {
  return (
    <div style={{ backgroundColor: '#27ae60' }}>
      <Sider
        // collapsible
        collapsed={collapsed}
        onCollapse={onCollapse} // Use onCollapse to toggle the collapsed state
        breakpoint="lg"
        collapsedWidth={80}
        width={280}
        style={{
          overflow: 'auto',
          maxHeight: '100vh',
          position: 'sticky',
          left: 0,
          top: 0,
          bottom: 0,
          backgroundColor: '#27ae60'
        }}
      >
        <Link href="/">
          <div style={{ backgroundColor: '#27ae60', padding: '15px 28px' }}>
            {collapsed ?  <h3 style={{ color: '#fff' }}><FaHouseChimneyWindow/></h3> :  <h3 style={{ color: '#fff' }}><FaHouseChimneyWindow/> Home Service</h3>}
           
          </div>
        </Link>
        <Menu
          defaultSelectedKeys={['1']}
          mode="inline"
          items={sidebarItems('admin')}
          style={{ fontSize: '1rem', fontWeight: '500', color: '#fff', backgroundColor: '#27ae60' }}
         // Set the theme to dark for the menu
        />
      </Sider>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems:'center',position:'fixed',padding:'12rem 6rem'}}>
         {!collapsed ? <Button type="primary" danger>Logout</Button> : <CgLogOut />} 
        </div>
    </div>
  );
};

export default SideBar;

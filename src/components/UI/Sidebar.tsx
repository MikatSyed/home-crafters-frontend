// SideBar.tsx
import React from 'react';
import { Button, Layout, Menu } from 'antd';
import { sidebarItems } from '@/app/constants/sidebarItems';
import Link from 'antd/es/typography/Link';
import { FaHouseChimneyWindow } from 'react-icons/fa6';
import { CgLogOut } from "react-icons/cg";
import { removeUserInfo } from '../../../services/auth.service';
import { useRouter } from 'next/navigation';
import { authKey } from '@/app/constants/storageKey';
import { signOut } from 'next-auth/react';
import { useLoggedUserQuery } from '@/redux/api/userApi';

const { Sider } = Layout;

const SideBar = ({ collapsed, onCollapse }: { collapsed: boolean; onCollapse: () => void }) => {
  const { data } = useLoggedUserQuery(undefined);

  // Check if user data is available
  const user = data?.data;
  let role = user?.role;
  const logout = () => {
    signOut();
}
  return (
    <div style={{ backgroundColor: '#27ae60' }}>
      <Sider
        // collapsible
        collapsed={collapsed}
        onCollapse={onCollapse} // Use onCollapse to toggle the collapsed state
        breakpoint="lg"
        collapsedWidth={80}
        width={260}
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
            {collapsed ?  <h3 style={{ color: '#fff' }}><FaHouseChimneyWindow/></h3> :  <h3 style={{ color: '#fff' }}><FaHouseChimneyWindow/> Home Crafter</h3>}
           
          </div>
        </Link>
        <Menu
          defaultSelectedKeys={['1']}
          mode="inline"
          items={sidebarItems(role)}
          style={{ fontSize: '1rem', fontWeight: '500', color: '#fff', backgroundColor: '#27ae60' }}
         // Set the theme to dark for the menu
        />
      </Sider>

{collapsed ? <>
  <div style={{ padding:'7rem 2rem',position:'fixed'}} onClick={logout}>  
       
         <p style={{ fontSize: '1.3rem', fontWeight: '500', color: '#fff' }}> 
         <CgLogOut/></p>
        </div>
</> : <>
<div style={{ padding:'7rem 2rem',position:'fixed'}} onClick={logout}>  
<p  style={{ fontSize: '1rem', fontWeight: '500', color: '#fff' }}><span style={{fontSize: '1.3rem',padding:'0px 5px'}}> </span>Logout</p> 
        </div>
</>}
     
    </div>
  );
};

export default SideBar;

import React, { useState } from 'react';

import logo from "../../assets/Home crafters f.png";
import Image from 'next/image';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import menu from "../../assets/menu.png"
import { FaHouseChimneyWindow } from "react-icons/fa6";
import { MdOutlineLegendToggle } from "react-icons/md";
import { useLoggedUserQuery } from '@/redux/api/userApi';
import { Avatar, Button, Dropdown, MenuProps } from 'antd';
const HeaderPage = ({ collapsed, onToggleSidebar }: { collapsed: boolean; onToggleSidebar: () => void }) => {
  const { data } = useLoggedUserQuery(undefined);
  console.log(data);
  const user = data?.data;
  const profileImg = user?.profileImg[0];
  const logout = () => {
    signOut();
  };

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          1st menu item
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          2nd menu item
        </a>
      ),
    },
    {
      key: '3',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          3rd menu item
        </a>
      ),
    },
  ];
  

  return (
    <header style={{ backgroundColor: '#fff', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ height: '40px', width: '40px', backgroundColor: '#27ae60', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {collapsed ? (
         
           <MdOutlineLegendToggle onClick={onToggleSidebar} style={{ cursor: 'pointer', color: '#fff' }} size={30} />
         
        ) : (
          <MdOutlineLegendToggle onClick={onToggleSidebar} style={{ cursor: 'pointer', color: '#fff' }} size={30} />
        )}
    </div>
      <div>
      
        <p> <span style={{padding:'0px 5px'}}>{user?.name}</span> <Avatar size={50} src={profileImg} /></p>

        {/* <Dropdown menu={{ items }} placement="topRight" arrow={{ pointAtCenter: true }}>
      <Button>topRight</Button>
    </Dropdown> */}
      </div>
    </header>
  );
};

export default HeaderPage;

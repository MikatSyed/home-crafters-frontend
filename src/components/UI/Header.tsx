"use client"
import React from 'react';

import logo from "../../assets/Home crafters f.png";
import Image from 'next/image';
import { signOut } from 'next-auth/react';
import Link from 'next/link';

const Header = () => {
  // const { push } = useRouter();

  const logout = () => {
    signOut()
  
  };

  return (
    <header style={{ backgroundColor: '#fff', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
      <Link href="/">
      <Image
          src={logo} // Replace with the actual path to your logo image
          alt="Logo"
          // style={{ height: 50, width: 'auto' }} // Adjust the height as needed
          // layout='responsive'
          height={50}
          width={100}
        />
      </Link>
      </div>
      <div>
        
        <button  onClick={logout}>Logout</button>
      </div>
    </header>
  );
};

export default Header;

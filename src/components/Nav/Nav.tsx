"use client"
import React, { useState } from "react"
import { nav } from "../../components/Nav/Data"
import Link from "next/link"
import { CloseOutlined, UnorderedListOutlined } from "@ant-design/icons"
import { useLoggedUserQuery } from "@/redux/api/userApi"
import { Avatar } from "antd"
import Image from "next/image"
import logo from "../../assets/Home crafters f.png"


const Nav = () => {
  const { data } = useLoggedUserQuery(undefined);
  const user = data?.data;
  const profileImg = user?.profileImg;
  const lastProfileImg = profileImg && profileImg.length > 0 ? profileImg[profileImg.length - 1] : null;

  const [navList, setNavList] = useState(false)

  return (
    <>
      <header>
        <div className='container flex'>
          <div className='logo'>
            <Image src={logo} alt='' height={44}  width={170}/>
          </div>
          <div className='nav'>
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link href={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='button flex'>
            <h4>
              <span>2</span> My List
            </h4>
           {
            user ?  <>
            
             <Link href="/profile">
                <Avatar size={50} src={lastProfileImg} />
              </Link> 
            
          </> : <> <button className='btn1'>
              <i className='fa fa-sign-out'></i> Sign In
            </button></>
           }
          </div>

          <div className='toggle'>
            <button onClick={() => setNavList(!navList)}>{navList ? <CloseOutlined  /> : <UnorderedListOutlined />}</button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Nav;

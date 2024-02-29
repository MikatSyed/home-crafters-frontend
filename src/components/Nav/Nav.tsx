"use client"
import React, { useState } from "react"
import { nav } from "../../components/Nav/Data"
import Link from "next/link"
import { CloseOutlined, UnorderedListOutlined,LoginOutlined } from "@ant-design/icons"
import { useLoggedUserQuery } from "@/redux/api/userApi"
import { Avatar } from "antd"
import Image from "next/image"
import logo from "../../assets/Home crafters f.png"
import styles from "../../styles/nav.module.css";
import { FaHouseChimneyWindow } from "react-icons/fa6";
const Nav = () => {
  const { data } = useLoggedUserQuery(undefined);
  const user = data?.data;
  const profileImg = user?.profileImg;
  const lastProfileImg = profileImg && profileImg.length > 0 ? profileImg[profileImg.length - 1] : null;

  const [navList, setNavList] = useState(false)

  return (
    <>
      <header className="header">
        <div className='container flex'>
          <div>
            {/* <Image src={logo} alt='' height={44}  width={170}/> */}
          <h2  style={{color:'#fff'}}> <FaHouseChimneyWindow />  Home Crafter </h2> 
          </div>
          <div className='nav'>
          <ul className={navList ? "small" : "flex"}>
              <li >
                <Link href="/"  className="link" >{nav[0].text}</Link>
              </li>
              <li >
                <Link href="/about"  className="link">{nav[1].text}</Link>
              </li>
              <li  >
                <Link href="/services"  className="link">{nav[2].text}</Link>
              </li>
              <li  >
                <Link href="/blog" className="link">{nav[3].text}</Link>
              </li>
              <li  >
                <Link href="/feedback" className="link">{nav[4].text}</Link>
              </li>
              <li  >
                <Link href="/contact" className="link">{nav[5].text}</Link>
              </li>
                
              {navList && (
                <li>
                  {user ? (
                    <Link href="/profile">
                      <Avatar size={50} src={lastProfileImg} />
                    </Link>
                  ) : (
                    <Link href="/login">{nav[6].text}</Link>
                  )}
                </li>
              )}
              
            </ul>
               
        
          </div>
          <div className='button flex'>
            <h4>
              
            </h4>
           {
            user ?  <>
            
             <Link href="/profile">
                <Avatar size={50} src={lastProfileImg} />
              </Link> 
            
          </> : <> 
          <Link href="/login">
          <button className='btn1'>
              Sign In
            </button>
          </Link>
          </>
           }
          </div>

          <div className='toggle'>
            <button onClick={() => setNavList(!navList)}>{navList ? <CloseOutlined  /> : <UnorderedListOutlined />}</button>
          </div>
        </div>
      </header>
      {/* <header>
        <div className="container">
          <div className={styles.logo}>
            <Image src={logo} alt="" height={44} width={170} />
          </div>
          <div className={styles.nav}>
            <ul className={navList ? styles.small : styles.flex}>
            <li>
                <Link href="/">{nav[0].text}</Link>
              </li>
              <li>
                <Link href="/about">{nav[1].text}</Link>
              </li>
              <li>
                <Link href="/services">{nav[2].text}</Link>
              </li>
              <li>
                <Link href="/blog">{nav[3].text}</Link>
              </li>
              <li>
                <Link href="/feedback">{nav[4].text}</Link>
              </li>
              <li>
                <Link href="/contact">{nav[5].text}</Link>
              </li>
                
              {navList && (
                <li>
                  {user ? (
                    <Link href="/profile">
                      <Avatar size={50} src={lastProfileImg} />
                    </Link>
                  ) : (
                    <Link href="/login">{nav[6].text}</Link>
                  )}
                </li>
              )}
            </ul>
          </div>
          <div className={styles.button}>
            <h4>
              <span>2</span> My List
            </h4>
            {
            user ?  <>
            
             <Link href="/profile">
                <Avatar size={50} src={lastProfileImg} />
              </Link> 
            
          </> : <> 
          <Link href="/login">
          <button className='btn1'>
              Sign In
            </button>
          </Link>
          </>
           }
          </div>

          <div className={styles.toggle}>
            <button onClick={() => setNavList(!navList)}>
              {navList ? <CloseOutlined /> : <UnorderedListOutlined />}
            </button>
          </div>
        </div>
      </header> */}
    </>
  )
}

export default Nav;

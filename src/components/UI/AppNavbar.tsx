// "use client"
// import { useState } from "react";
// import { Layout, Menu, Button, Drawer, Row, Col } from "antd";
// import { ContactsOutlined, FormOutlined, FundOutlined, HomeOutlined, MacCommandOutlined, MenuOutlined, PicRightOutlined } from "@ant-design/icons";
// import Link from "next/link";
// import { useLoggedUserQuery } from "@/redux/api/userApi";
// import { Avatar, Typography } from 'antd';
// import Image from "next/image";
// import home from "../../assets/images.jpg";

// const { Header } = Layout;
// const { Title } = Typography;

// interface MenuItem {
//   key: React.Key;
//   icon: React.ReactNode;
//   children?: MenuItem[];
//   label: React.ReactNode;
//   type: string;
//   path: string;
// }

// const AppNavbar: React.FC = () => {
//   const [visible, setVisible] = useState(false);
//   const { data } = useLoggedUserQuery(undefined);
//   const user = data?.data;
//   const profileImg = user?.profileImg;
//   const lastProfileImg = profileImg && profileImg.length > 0 ? profileImg[profileImg.length - 1] : null;

//   const showDrawer = () => {
//     setVisible(true);
//   };

//   const onClose = () => {
//     setVisible(false);
//   };

//   const menuItems: MenuItem[] = [
//     {
//       key: "1",
//       icon: <HomeOutlined />,
//       label: "Home",
//       type: "link",
//       path: "/",
//     },
//     {
//       key: "2",
//       icon: <MacCommandOutlined /> ,
//       label: "Services",
//       type: "link",
//       path: "/services",
//     },
//     {
//       key: "3",
//       icon: <PicRightOutlined />,
//       label: "Blog",
//       type: "link",
//       path: "/blog",
//     },
//     {
//       key: "4",
//       icon: <FundOutlined />,
//       label: "Feedback",
//       type: "link",
//       path: "/feedback",
//     },
//     {
//       key: "5",
//       icon: <ContactsOutlined />,
//       label: "About Us",
//       type: "link",
//       path: "/about",
//     },
//   ];

//   return (
//     <Layout className="layout">
//       <Header style={{ position: "fixed", width: "100%", zIndex: 100, backgroundColor: "#fff" }}>
//         <Row justify="space-between" align="middle">
//           <Col xs={20} sm={20} md={6}>
//             <div
//               className="logo"
//               style={{
//                 color: "white",
//                 paddingLeft: "20px",
//                 fontSize: "1.3rem",
//               }}
//             >
//               <div style={{ display: 'flex', alignItems: 'center' }}>
//               <Image src={home} alt="home_crafters" width={50} height={50} />
//       <span style={{ color: 'orange', height: '70px', marginLeft: '10px' }}>
//         Home Crafters
//       </span>
//     </div> 
             
//             </div>
//           </Col>

//           <Col xs={0} sm={0} md={14}>
//             <Menu theme="light" mode="horizontal" defaultSelectedKeys={["1"]}>
//               {menuItems.map((item) => (
//                 <Menu.Item key={item.key} icon={item.icon}>
//                   <Link href={item.path}>{item.label}</Link>
//                 </Menu.Item>
//               ))}
//               {user ? (
//                 <>
//                   <Menu.Item>
//                    <Link href="/profile">
//                       <Avatar size={50} src={lastProfileImg} />
//                     </Link> 
//                   </Menu.Item>
//                 </>
//               ) : (
//                 <>
//                   <Menu.Item>
//                     <Link href="/login">
//                       <Button style={{ marginRight: "10px" }}>Login</Button>
//                     </Link>
//                   </Menu.Item>
//                 </>
//               )}
//             </Menu>
//           </Col>

//           <Col xs={4} sm={4} md={0}>
//             <Button type="primary" onClick={showDrawer}>
//               <MenuOutlined />
//             </Button>
//           </Col>
//         </Row>
//         <Drawer
//           title="Menu"
//           placement="right"
//           onClose={onClose}
//           visible={visible}
//         >
//           <Menu
//             style={{
//               width: 256,
//             }}
//             defaultSelectedKeys={["1"]}
//             mode="inline"
//             onClick={onClose}
//           >
//             {menuItems.map((item) => (
//               <Menu.Item key={item.key} icon={item.icon}>
//                 {item.type === "link" ? (
//                   <Link href={item.path}>{item.label}</Link>
//                 ) : (
//                   item.label
//                 )}
//               </Menu.Item>
//             ))}
//             {user ? (
//               <Menu.Item>
//                 <Link href="/profile">
//                       <Avatar size={50} src={lastProfileImg} />
//                     </Link>
//               </Menu.Item>
//             ) : (
//               <Menu.Item>
//                 <Link href="/login">Login</Link>
//               </Menu.Item>
//             )}
//           </Menu>
//         </Drawer>
//       </Header>
//     </Layout>
//   );
// };

// export default AppNavbar;

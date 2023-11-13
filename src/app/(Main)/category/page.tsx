// "use client"
// import { useCategoriesQuery } from '@/redux/api/servicesApi';
// import React from 'react';
// import { Col, Row, Card } from "antd";
// import Link from 'next/link';

// const CategoryPage = () => {
//     const {data} = useCategoriesQuery(undefined)
//     const serviceData = data?.data;
//     return (

//        <>
//           <h1
//       style={{
//         textAlign: 'center',
//         fontSize: '30px',
//         margin: '60px 0px',
//       }}
//     >
//       Featured Category
//     </h1>
//        <div>
//           <Row
//   gutter={{ xs: 5, sm: 5, md: 5, lg: 5, xl: 5 }}
//   justify="center"
//   style={{ marginLeft: '10px', marginRight: '10px' }}
// >
//   {serviceData ? (
//     serviceData.map((service: any) => (
//       <Col
//         xs={24}
//         sm={12}
//         md={8}
//         lg={8}
//         xl={6}
//         style={{ marginBottom: '5px' }}
//         key={service.id}
//       >
//         <Link href={`/category/${service.id}`}>
//           <Card
//             style={{
//               width: '100%',
//               boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center',
//               justifyContent: 'center',
//               height: '100px',
//             }}
//             actions={[
//               <span className="text" key="1" style={{ color: 'orange', textAlign: 'center' }}>
//                 {service?.title}
//               </span>,
//             ]}
//           >
//             {/* Additional content */}
//           </Card>
//         </Link>
//       </Col>
//     ))
//   ) : (
//     <div>Loading...</div>
//   )}
// </Row>

//         </div>
       
//        </>
//     );
// };

// export default CategoryPage;
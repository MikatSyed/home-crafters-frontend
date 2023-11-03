"use client"
import {   theme } from 'antd';
import {  useServicesQuery } from "@/redux/api/servicesApi";
import {  Input} from "antd";
import { useDebounced } from '@/redux/hook';
import { useState } from 'react';
import Heading from '@/components/Hero/Heading';
import ServiceCard from '@/components/Services/ServiceCard';
import Loading from '@/app/loading';
type IDParams = {
    params : any
}


const ServicesPage = ({params}:IDParams) => {
    const {id} = params;
    
  const query: Record<string, any> = {};
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [searchTerm, setSearchTerm] = useState<string>("");


  query["searchTerm"] = searchTerm;
  


  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600
  })

  if (!!debouncedTerm) {
    query["searchTerm"] = debouncedTerm;
  }



  const { data } = useServicesQuery({
    ...query
  });

  let serviceData : any = data?.data.filter((data:any)=> data.categoryId === id);
  console.log(serviceData);

 

  return (
    <>

   {serviceData ?
   
   <section className='recent' style={{padding:'20px 0'}}>
   <div className='container'>
     <Heading title=' Category Services Listed' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' />
     
     <div
         style={{
           display: "flex",
           justifyContent: "center",
           alignItems: "center",
           marginBottom: "10px",
           marginTop:'30px'
         }}
       >
         <Input.Search placeholder="Search" style={{ width: 300 }} onChange={(e) => setSearchTerm(e.target.value)} />
       </div>
     <ServiceCard  data={serviceData} />
   </div>
 </section>
   : <>
    <section className='recent' style={{padding:'20px 0'}}>
   <div className='container'>
     <Heading title=' No Service Available For this category' subtitle='' />
     </div>
     </section>
   </>
   }
     
    </>
  );
};

export default ServicesPage;
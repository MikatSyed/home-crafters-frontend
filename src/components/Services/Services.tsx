
"use client"
import { useServicesQuery } from "@/redux/api/servicesApi";
import Heading from "../Hero/Heading"
import ServiceCard from "./ServiceCard"
import { getAllService } from "@/lib/fetch";

const Services = () => {
  const { data } = useServicesQuery(undefined);
  // const service = await getAllService()
  let serviceData: any = data?.data.filter(
    (data: any) => data.availbility === "available"
  );


  return (
    <>
      <section className='recent padding-bottom'>
        <div className='container'>
          <Heading title='Services Listed' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' />
          <ServiceCard  data={serviceData} />
        </div>
      </section>
    </>
  )
}

export default Services;

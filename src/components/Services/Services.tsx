"use client";
import { useServicesQuery } from "@/redux/api/servicesApi";
import Heading from "../Hero/Heading"
import ServiceCard from "./ServiceCard"

const Services = () => {
  const { data } = useServicesQuery(undefined);
  console.log(data);
  let serviceData: any = data?.data.filter(
    (data: any) => data.availbility === "available"
  );
console.log(serviceData);
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Services Listed' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' />
          <ServiceCard  data={serviceData} />
        </div>
      </section>
    </>
  )
}

export default Services;

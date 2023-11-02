"use client";
import { useServicesQuery } from "@/redux/api/servicesApi";
import Heading from "../Hero/Heading"
import RecentCard from "../Services/ServiceCard"

const UpcomingService = () => {
  const { data } = useServicesQuery(undefined);
  let serviceData: any = data?.data.filter(
    (data: any) => data.availbility === "upcoming"
  );

  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Our Upcoming Services Listed' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' />
          <RecentCard  data={serviceData} />
        </div>
      </section>
    </>
  )
}

export default UpcomingService;

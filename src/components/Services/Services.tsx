
import { useServicesQuery } from "@/redux/api/servicesApi";
import Heading from "../Hero/Heading"
import ServiceCard from "./ServiceCard"
import { getAllService } from "@/lib/fetch";

const Services = async() => {
  // const { data } = useServicesQuery(undefined);
  const service = await getAllService()
  console.log(service);
  let serviceData: any = service?.data.filter(
    (data: any) => data?.availbility === "available"
  );

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

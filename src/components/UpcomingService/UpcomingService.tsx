import Heading from "../Hero/Heading"
import RecentCard from "../Services/ServiceCard"
import { getAllService } from "@/lib/fetch";

const UpcomingService = async() => {
  const service = await getAllService()
  let serviceData: any = service?.data.filter(
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

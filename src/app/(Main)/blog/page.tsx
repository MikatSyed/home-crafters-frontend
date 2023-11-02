"use client";
import BlogCards from "@/components/Blog/BlogCards";
import Heading from "@/components/Hero/Heading";
import { useBlogsQuery } from "@/redux/api/blogApi";
import { useServicesQuery } from "@/redux/api/servicesApi";



const Blogs = () => {
  const { data } = useBlogsQuery(undefined);
  console.log(data);
  let blogData: any = data?.data;
console.log(blogData);  
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Our Blogs Listed' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' />
          <BlogCards data={blogData} />
        </div>
      </section>
    </>
  )
}

export default Blogs;

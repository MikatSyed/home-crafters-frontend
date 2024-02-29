"use client"
import BlogCards from "@/components/Blog/BlogCards";
import Heading from "@/components/Hero/Heading";
import { getAllBlog } from "@/lib/fetch";
import { useBlogsQuery } from "@/redux/api/blogApi";


const Blogs = () => {
  // const blogs = await getAllBlog()
  const {data} = useBlogsQuery(undefined)
  console.log(data);
  const blogData = data?.data;
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

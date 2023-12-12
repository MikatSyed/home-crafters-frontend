"use client";
import BlogCards from "@/components/Blog/BlogCards";
import Heading from "@/components/Hero/Heading";
import { getAllBlog } from "@/lib/fetch";
import { useBlogsQuery } from "@/redux/api/blogApi";




const Blogs = async() => {
  // const { data } = useBlogsQuery(undefined);
  // let blogData: any = data?.data;
  const blogs = await getAllBlog()
  console.log(blogs);
  const blogData = blogs?.data;
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

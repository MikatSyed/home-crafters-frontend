import BlogCards from "@/components/Blog/BlogCards";
import Heading from "@/components/Hero/Heading";
import { getAllBlog } from "@/lib/fetch";


const Blogs = async() => {
  const blogs = await getAllBlog()
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

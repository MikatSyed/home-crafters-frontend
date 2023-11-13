import Awards from '@/components/Awards/Awards';
import Client from '@/components/Client/Client';
import FaqSection from '@/components/FaqSection/FaqSection';
import FeaturedCategory from '@/components/FeaturedCategory/FeaturedCategory';
import Hero from '@/components/Hero/Hero';
import Review from '@/components/Review/Review';
import Services from '@/components/Services/Services';
import UpcomingService from '@/components/UpcomingService/UpcomingService';
import React from 'react';
import BlogCard from '../(Main)/blog/page';
import About from '@/components/About/About';
import Awrapper from '@/components/About/Awrapper';
import Testimonial from '@/components/Testtimonial/Testimonial';

const Home = () => {
    return (
        <>
        <Hero/>
        <FeaturedCategory/>
        <About/>
        <Services/>
        <Awards/>
        <UpcomingService/>
        <FaqSection/>
        <Testimonial />
        {/* <Awrapper /> */}
        <BlogCard/>
        <Client/>
        {/* <Review/> */}

    
        </>
    );
};

export default Home;
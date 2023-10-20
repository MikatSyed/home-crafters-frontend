
import AppFooter from "@/components/UI/AppFooter";
import AppNavbar from "@/components/UI/AppNavbar";
import CategoryPage from "./category/page";
import UpcomingService from "@/components/UpcomingService/UpcomingService";
import AvailableService from "@/components/AvailableService/AvailableService";
import AppHeader from "@/components/UI/AppHeader";
import BlogCard from "./(Main)/blog/page";
import AllReviewCard from "@/components/UI/AllReviewCard";
import FaqPage from "@/components/Faq/Faq";





const HomePage = () => {
  return (
    <>
    <AppNavbar/>
    <AppHeader/>
    <CategoryPage/>
    <UpcomingService/>
    <AvailableService/>
    <BlogCard/>
    <FaqPage/>
    <AllReviewCard/>
    <AppFooter/>

  
    
    </>
  )
};

export default HomePage;

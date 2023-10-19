
import AppFooter from "@/components/UI/AppFooter";
import AppNavbar from "@/components/UI/AppNavbar";
import CategoryPage from "./category/page";
import UpcomingService from "@/components/UpcomingService/UpcomingService";
import AvailableService from "@/components/AvailableService/AvailableService";
import AppHeader from "@/components/UI/AppHeader";





const HomePage = () => {
  return (
    <>
    <AppNavbar/>
    <AppHeader/>
    <CategoryPage/>
    <UpcomingService/>
    <AvailableService/>
    <AppFooter/>

  
    
    </>
  )
};

export default HomePage;

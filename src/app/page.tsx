
import Nav from "@/components/Nav/Nav";
import Home from "./home/page";
import Footer from "@/components/Footer/Footer";
import { authOptions } from "@/lib/AuthOptions";
import { getServerSession } from "next-auth/next";
import { useSession } from "next-auth/react";
const HomePage = async() => {
  // const session = await getServerSession(authOptions);
  // console.log({session});

  return (
    <>
    <Nav/>
    <Home/>
    <Footer/>
    </>
  )
};

export default HomePage;

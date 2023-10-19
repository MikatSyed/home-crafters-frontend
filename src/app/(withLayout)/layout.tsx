"use client";
import { Layout } from "antd";
import SideBar from "../../components/UI/Sidebar";
import Contents from "../../components/UI/Contents";
import { isLoggedIn } from "../../../services/auth.service";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Loading from "../loading";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const router  = useRouter()
  const userLoggedIn = isLoggedIn();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!userLoggedIn) {
      router.push("/login");
    }
    setIsLoading(true);
  }, [router, isLoading,userLoggedIn]);

  if(!isLoading){
    return <Loading/>
  }

  return (
    <Layout hasSider>
      <SideBar />
      <Contents>{children}</Contents>
    </Layout>
  );
};

export default DashboardLayout;

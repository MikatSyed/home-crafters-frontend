
import { Layout } from "antd";
import SideBar from "../../components/UI/Sidebar";
import Contents from "../../components/UI/Contents";


const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  

  return (
    <Layout hasSider>
      <SideBar />
      <Contents>{children}</Contents>
    </Layout>
  );
};

export default DashboardLayout;

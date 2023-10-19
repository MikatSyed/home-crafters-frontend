"use client"
import AppFooter from "@/components/UI/AppFooter";
import AppNavbar from "@/components/UI/AppNavbar";
import { Content } from "antd/es/layout/layout";


export default function MainLayout({ children }: React.PropsWithChildren) {
    return (
        <>
            <AppNavbar />
            <Content style={{
        
        minHeight: "100vh",
      }}>

            {children}
            </Content>
            <AppFooter/>
        </>
    );
}
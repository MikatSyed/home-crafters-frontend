"use client"
import Footer from "@/components/Footer/Footer";
import Nav from "@/components/Nav/Nav";
import { Content } from "antd/es/layout/layout";


export default function MainLayout({ children }: React.PropsWithChildren) {
    return (
        <>
            <Nav />
            <Content style={{
        
        minHeight: "100vh",
      }}>

            {children}
            </Content>
            <Footer/>
        </>
    );
}
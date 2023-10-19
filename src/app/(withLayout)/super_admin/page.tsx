import BreadCrumb from "@/components/UI/BreadCrumb";


const SuperAdminPage = () => {
  return (
    <div>
      <BreadCrumb
        items={[
          {
            label: "super_admin",
            link: "/super_admin",
          },
        ]} 
       />
      <h1>This page is for super admin</h1>
    </div>
  );
};

export default SuperAdminPage;

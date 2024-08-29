import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";

interface IChildrenProps {
  children: React.ReactNode;
}
const DashboardLayout: React.FC<IChildrenProps> = ({ children }) => {
  return (
    <div>
      <Sidebar />
      <div className="w-[100%] py-12 pl-[270px]">{children}</div>
    </div>
  );
};

export default DashboardLayout;

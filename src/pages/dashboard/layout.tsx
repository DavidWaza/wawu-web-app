import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";

interface IChildrenProps {
  children: React.ReactNode;
}
const DashboardLayout: React.FC<IChildrenProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-6 gap-5">
      <div className="col-span-1">
        <Sidebar />
      </div>
      <div className="col-span-5 py-10 pr-10">{children}</div>
    </div>
  );
};

export default DashboardLayout;

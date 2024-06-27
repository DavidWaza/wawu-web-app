import React from "react";
import DashboardLayout from "./layout";
import WelcomeUser from "./components/WelcomeUser/WelcomeUser";
import MainComponent from "./components/MainComponent/MainComponent";
// import { Button } from "@/components/ui/button"

const index = () => {
  return (
    <DashboardLayout>
      <WelcomeUser />
      <MainComponent />
    </DashboardLayout>
  );
};

export default index;

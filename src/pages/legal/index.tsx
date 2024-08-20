import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Header/Navbar/Navbar";
import MobileNavbar from "@/components/Header/Navbar/MobileNavbar";

const LagalPolicy = () => {
  return (
    <div>
      <div className="hidden xl:block">
        <Navbar id={0} link="" href="" isCaret />
      </div>
      <div className="block xl:hidden">
        <MobileNavbar />
      </div>
      <div className="h-screen lg:pt-[12rem] flex justify-center m-auto pt-[5rem]">
        <Tabs defaultValue="account">
          <TabsList>
            <TabsTrigger value="privacy">Privacy policy</TabsTrigger>
            <TabsTrigger value="terms">Terms of use</TabsTrigger>
          </TabsList>
          <TabsContent value="privacy" className="pt-[5rem]">
            Make changes to your account here.
          </TabsContent>
          <TabsContent value="terms" className="pt-[5rem]">Change your password here.</TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default LagalPolicy;

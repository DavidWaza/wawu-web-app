"use client";
import Image from "next/image";

import TabComponent from "../ui/Tabs/TabComponent";
import SelectComponent from "../ui/Select/SelectComponent";
import Barcharts from "../Charts/Barcharts";

const DataUserTable = () => {
  return (
    <div className="border rounded-lg">
      <div className="py-5 px-5 w-full">
        <div className="flex justify-between items-center">
          <p className="font-medium text-[16px] text-nowrap">
            Registered Users
          </p>
          <div className="w-full flex justify-end items-center gap-5">
            <TabComponent />
            <SelectComponent />
          </div>
        </div>
      </div>
      <div className="border-t py-2">
        <div className="px-5">
          <Barcharts />
        </div>
      </div>
    </div>
  );
};
export default DataUserTable;

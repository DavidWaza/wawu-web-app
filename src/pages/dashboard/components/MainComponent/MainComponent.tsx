import React from "react";
import DataUserTable from "../DataUserTable/DataUserTable";
import CardComponent from "../ui/Card/CardComponent";
import Demograph from "../Demographs/Demograph";
import DoughnutComponent from "../DoughnutChart/Doughnut";
import DataTable from "../DataTable/DataTable";

const MainComponent = () => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-10">
        <div className="col-span-2 w-full my-12">
          <DataUserTable />
        </div>
        <div className="col-span-1 w-full my-20">
          <CardComponent />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5">
        <CardComponent />
        <Demograph />
        <DoughnutComponent />
      </div>
      <div className="my-20">
        <DataTable />
      </div>
    </div>
  );
};

export default MainComponent;

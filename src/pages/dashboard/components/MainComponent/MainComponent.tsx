import React from "react";
import DataUserTable from "../DataUserTable/DataUserTable";
import CardComponent from "../ui/Card/CardComponent";
import Demograph from "../Demographs/Demograph";

const MainComponent = () => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-10">
        <div className="col-span-2 w-full">
          <p className=" text-transparent">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
            mollitia, ratione maiores harum veritatis doloremque adipisci fugit
            eius facilis! A quibusdam suscipit velit quaerat. Nisi modi nam sed
            molestias neque.
          </p>
          <DataUserTable />
        </div>
        <div className="col-span-1 w-full my-20">
          <CardComponent />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5">
        <CardComponent />
        <Demograph />
        <CardComponent />
      </div>
    </div>
  );
};

export default MainComponent;

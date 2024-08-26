import React from "react";
import { Chart as ChartJS, ArcElement, Legend, Tooltip } from "chart.js";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Doughnut } from "react-chartjs-2";

import RecentSales from "../RecentSales/RecentSales";
import DoughnutData from "./DoughnutData";
import { Ellipsis } from "lucide-react";

ChartJS.register(ArcElement, Legend, Tooltip);



const data = {
  labels: [],
  datasets: [
    {
      label: "Poll",
      data: [3, 5, 2],
      backgroundColor: ["#F37BB8", "#E2E4E3", "purple"],
    },
  ],
};
const options = {
  cutout: "70%",
  centerText: {
    display: true,
  },
};
const DoughnutComponent = () => {
  return (
    <div>
      <Card className="col-span-3 bg-transparent">
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            Your Wallet
            <Ellipsis />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[200px] m-auto flex justify-center">
            <Doughnut data={data} options={options}>
              <p className="text-mute">Total</p>
              <p className="text-black">$299</p>
            </Doughnut>
          </div>
          <DoughnutData />
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
};

export default DoughnutComponent;

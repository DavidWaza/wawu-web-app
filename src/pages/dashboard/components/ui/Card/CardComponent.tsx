import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import RecentSales from "../../RecentSales/RecentSales";
import { Ellipsis } from "lucide-react";

const CardComponent = () => {
  return (
    <div>
      <Card className="col-span-3 bg-transparent">
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            Chart
            <Ellipsis />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <RecentSales />
        </CardContent>
        <CardFooter>
          <button className="bg-[#9510C9] p-2 rounded-lg w-full text-white">
            View all
          </button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CardComponent;

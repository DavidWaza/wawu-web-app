import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import Image from "next/image";

const Demograph = () => {
  return (
    <div>
      <Card className="col-span-3 bg-transparent">
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            Demograph
            <HiOutlineDotsHorizontal />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Image
            src={"/assets/demograph.svg"}
            alt="map"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto object-contain object-center"
          />
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

export default Demograph;

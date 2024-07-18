import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { GoLinkExternal } from "react-icons/go";

import Image from "next/image";
import Link from "next/link";

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
            className="w-[600%] h-auto object-contain object-center"
          />
        </CardContent>
        <CardFooter>
          <Link href={""}>
            <div className="flex gap-2 items-center font-medium text-[#810FAF]">
              Open
              <GoLinkExternal />
            </div>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Demograph;

import React, { FC } from "react";
import Image from "next/image";
import { Text } from "@/components/ui/Typography/Typography";
import { GoArrowRight } from "react-icons/go";

interface PopularGigsprops {
  src: string;
  title: string;
}

const PopularGigs: FC<PopularGigsprops> = ({ src, title }) => {
  return (
      <div className="shadow-md rounded-md p-5 border border-slate-400">
        <div className="flex justify-between items-center gap-5">
          <div className=" border-slate-500">
            <Image
              src={src}
              alt="recent img"
              className="rounded-full w-10 "
              width={500}
              height={500}
            />
          </div>
          <Text variant="small" className="text-slate-500">
            {title}
          </Text>
          <GoArrowRight className="text-black" />
        </div>
      </div>
  );
};

export default PopularGigs;

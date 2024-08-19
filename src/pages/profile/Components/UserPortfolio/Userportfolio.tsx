import { PortfolioData } from "@/data/portfolioData";
import React from "react";
import Image from "next/image";
import { Text } from "@/components/ui/Typography/Typography";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
const Userportfolio = () => {
  return (
    <div>
      <div className="flex justify-between my-10 text-black">
        <p className="text-2xl font-semibold">My Portfolio</p>
        <div className="flex items-center gap-4">
          <Link href={"/portfolio"} className="!underline font-semibold text-[16px]">
            See All
          </Link>
          <GoArrowRight className="text-[#ED459A]" />
        </div>
      </div>
      <div className="grid grid-cols-1 2xl:grid-cols-3 xl:grid-cols-3 md:grid-cols-2 py-3 gap-3">
        {PortfolioData.slice(0, 3).map((data, index) => (
          <div className="border" key={index}>
            <Image
              src={data.imgSrc}
              alt="data img"
              width={400}
              height={400}
              className="w-full"
            />
            <div className="my-5 px-5">
              <h1 className="text-black font-bold text-xl">{data.title}</h1>
              <Text variant="small" className="my-2">
                {data.text}
              </Text>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Userportfolio;

import PortfolioLayout from "./layout";
import { IoArrowBackSharp } from "react-icons/io5";
import { BsShare } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import { Text } from "@/components/ui/Typography/Typography";
import { PortfolioData } from "../../data/portfolioData";
import Button from "@/components/ui/Button/Button";
import { MdArrowRightAlt } from "react-icons/md";

export default function PersonalPortfolio() {
  return (
    <PortfolioLayout>
      <div className="lg:px-[8.2rem]">
        <div className=" bg-img-1">
          <div className="flex justify-between px-7 py-10">
            <Link href={"#"}>
              <div className="flex gap-3 items-center text-white">
                <IoArrowBackSharp />
                <p>Back</p>
              </div>
            </Link>
            <Link href={"#"}>
              <div className="flex gap-3 items-center text-white">
                <BsShare />
                <p>Share Portfolio</p>
              </div>
            </Link>
          </div>
          <div className="flex justify-center items-center align-middle gap-5">
            <Image
              src="/assets/photo-girl.png"
              alt="photo girl"
              width={400}
              height={400}
              className="w-20"
            />
            <Text>Jane Doe Portfolio</Text>
          </div>
        </div>
        <div className="flex justify-end my-10">
          <Button size="large" suffix={<MdArrowRightAlt />} className="p-2">
            Create new Portfolio
          </Button>
        </div>
        <div className="my-10">
          <div className="grid lg:grid-cols-3 gap-5">
            {PortfolioData.map((data, index) => (
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
      </div>
    </PortfolioLayout>
  );
}

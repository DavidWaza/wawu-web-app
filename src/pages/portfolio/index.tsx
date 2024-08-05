"use client";
import { useEffect, useState } from "react";
import PortfolioLayout from "./layout";
import { IoArrowBackSharp } from "react-icons/io5";
import { BsShare } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import { Text } from "@/components/ui/Typography/Typography";
import Button from "@/components/ui/Button/Button";
import { MdArrowRightAlt } from "react-icons/md";
import "react-responsive-modal/styles.css";
import { fetch_portfolio } from "../api/endpoints";
import axiosInstance from "../api/axiosInstance";
import { toast } from "sonner";

interface PortfolioItem {
  file: string;
  link: string;
  name:string
  projectTitle: string;
  projectDescription: string;
}

export default function PersonalPortfolio() {
  const [open, setOpen] = useState(false);
  const [createUserPortfolio, setCreateUserPortfolio] = useState<
    PortfolioItem[]
  >([]);

  const onOpenModal = () => {
    setOpen(true);
  };
  const onCloseModal = () => {
    setOpen(false);
  };

  const fetchUserPortfolio = async () => {
    try {
      const response = await axiosInstance.get(fetch_portfolio);
      console.log("port", response.data?.data);
      setCreateUserPortfolio(response.data?.data);
    } catch (err: any) {
      if (err.response) {
        toast.error(err.response.data.message);
      }
    }
  };
  useEffect(() => {
    fetchUserPortfolio();
  }, []);
  return (
    <PortfolioLayout>
      <div className="lg:px-[8.2rem]">
        <div className=" bg-profile-seller">
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
          <Button
            size="medium"
            suffix={<MdArrowRightAlt />}
            className="p-2 text-nowrap"
            href="/portfolio/create-seller-portfolio"
          >
            Create new Portfolio
          </Button>
        </div>
        <div className="my-10">
          <div className="grid lg:grid-cols-3 gap-5">
            {createUserPortfolio.map((data, index) => (
              <div className="border" key={index}>
                {typeof data.file?.link === "string" && (
                  <Image
                    src={`${data.file.link}`} // Validate and use the link property within the file object
                    alt={data.projectDescription} // Use the name property for alt text, with a fallback
                    width={400}
                    height={400}
                    className="w-full"
                  />
                )}
                <div className="my-5 px-5">
                  <h1 className="text-black font-bold text-xl">
                    {data.projectTitle}
                  </h1>
                  <Text variant="small" className="my-2">
                    {data.projectDescription}
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

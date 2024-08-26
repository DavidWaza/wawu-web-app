"use client";
import { useEffect, useState } from "react";
import PortfolioLayout from "./layout";

import Link from "next/link";
import Image from "next/image";
import { Text } from "@/components/ui/Typography/Typography";
import Button from "@/components/ui/Button/Button";

import "react-responsive-modal/styles.css";
import { fetch_portfolio, fetch_user_profile } from "../api/endpoints";
import axiosInstance from "../api/axiosInstance";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { MoveLeft, MoveRight, Share2 } from "lucide-react";

interface PortfolioItem {
  file: {
    name: string;
    link: string;
  };
  projectTitle: string;
  projectDescription: string;
}

export default function PersonalPortfolio() {
  const [createUserPortfolio, setCreateUserPortfolio] = useState<
    PortfolioItem[]
  >([]);
  const [userProfileName, setUserProfileName] = useState<string>("");

  useEffect(() => {
    fetchUserProfile();
  });

  const fetchUserProfile = async () => {
    try {
      const response = await axiosInstance.get(fetch_user_profile);
      console.log("name", response.data.data.firstName);
      setUserProfileName(
        `${response.data.data.firstName} ${response.data.data.lastName}'s`
      );
    } catch (err: any) {
      if (err.response) {
        toast.error(err.response.data.message);
      }
    }
  };

  const router = useRouter();
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
            <div onClick={() => router.back()}>
              <div className="flex gap-3 items-center text-white">
              <MoveLeft />
                <p>Back</p>
              </div>
            </div>
            <Link href={"#"}>
              <div className="flex gap-3 items-center text-white">
              <Share2 />
                <p>Share Portfolio</p>
              </div>
            </Link>
          </div>
          <div className="lg:flex justify-center items-center align-middle gap-5">
            <Image
              src="/assets/photo-girl.png"
              alt="photo girl"
              width={400}
              height={400}
              className="w-20 flex justify-center"
            />
            <Text>{userProfileName} Portfolio</Text>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end my-10 px-5">
          <Button
            size="large"
            suffix={<MoveRight />}
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
                {data.file && data.file.link && (
                  <img
                    src={"/assets/analytics.png"}
                    alt={data.projectDescription || data.file.name}
                    className="w-full h-auto object-cover object-center"
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

import axiosInstance from "@/pages/api/axiosInstance";
import { fetch_user_profile } from "@/pages/api/endpoints";
import { ChevronRight, FileWarningIcon, TriangleAlert } from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect } from "react";

interface IPendingContractBannerProps {
  showLink?: boolean;
  text?: string;
}

const PendingContractBanner = ({ showLink, days }: any) => {
  const [userProfileName, setUserProfileName] = useState<string>("");

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    try {
      const response = await axiosInstance.get(fetch_user_profile);
      setUserProfileName(response.data.data.firstName);
    } catch (err: any) {
      if (err.response) {
        console.error(err.response.data.message);
      }
    }
  };

  return (
    <div className="md:flex flex-row space-y-3 items-center md:h-[44px] rounded-md border border-[#ddd] px-4 gap-1 justify-between bg-[#FFF7ED] my-5">
      <div className="flex flex-row items-center gap-1">
        <TriangleAlert className="w-[15px] h-[13.5px] hidden md:block" color="#EA580C" />
        <p className="text-sm text-[#352C76] font-medium py-2">
          {`Welcome, ${userProfileName}! To gain access to all features, please update and complete your profile.`}
        </p>
      </div>

      {showLink && (
        <Link
          href={"/profile/seller-profile-creation"}
          className="text-sm text-[#352C76] font-medium underline my-2"
        >
          Update Profile
        </Link>
      )}
    </div>
  );
};

export default PendingContractBanner;

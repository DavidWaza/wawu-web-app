import { Text } from "@/components/ui/Typography/Typography";
import React, { useEffect, useState } from "react";
import UserProfile from "../UserPorfile/Userprofile";
import UserAvatar from "../UserAvatar/UserAvatar";
import UserDetails from "../UserDetails/UserDetails";
import { IoLocationOutline } from "react-icons/io5";
import { LuBadgeCheck } from "react-icons/lu";
import { BiMessageSquareDetail } from "react-icons/bi";
import axiosInstance from "@/pages/api/axiosInstance";
import { fetch_user_profile } from "@/pages/api/endpoints";
import { toast } from "sonner";

const AboutSeller = () => {
  const [userProfileName, setUserProfileName] = useState<string>('');

  useEffect(() => {
    fetchUserProfile();
  });

  const fetchUserProfile = async () => {
    try {
      const response = await axiosInstance.get(fetch_user_profile);
      console.log("name", response.data.data.firstName);
      setUserProfileName(
        `${response.data.data.firstName} ${response.data.data.lastName}`
      );
    } catch (err: any) {
      if (err.response) {
        toast.error(err.response.data.message);
      }
    }
  };
  
  return (
    <React.Fragment>
      <div>
        <Text variant="small" textWeight="bold" textColor={"text-black"}>
          About Seller
        </Text>
      </div>
      <React.Fragment>
        <div className="my-3 lg:flex gap-5">
          <div>
            <UserAvatar userActive="offline" />
            <button className="p-3 text-black bg-[#EBEBEB] rounded-lg my-5">
              Contact me
            </button>
          </div>
          <div className="space-y-5">
            <Text variant="small" className="text-black" textWeight="bold">
              {userProfileName}
            </Text>
            <Text variant="small" className="text-black">
              passionate about design
            </Text>
            <div className="space-y-3">
              <UserDetails
                prefix={<IoLocationOutline className="text-black" size={20} />}
                suffix="Nigeria"
              />
              <UserDetails
                prefix={<LuBadgeCheck className="text-black" size={20} />}
                suffix="232 orders completed"
              />
              <UserDetails
                prefix={
                  <BiMessageSquareDetail className="text-black" size={20} />
                }
                suffix="I speak English, Igbo, Hausa"
              />
            </div>
          </div>
          <div className="space-y-5">
            {/* <Text
              variant="small"
              className="text-transparent"
              textWeight="bold"
            >
              Jane Doe
            </Text> */}
            <div className="border border-1 border-[#ED459A]  rounded-md my-5 lg:my-0 w-32 p-2">
              <p className="text-black text-center">online</p>
            </div>
            <div className="space-y-3">
              <UserDetails
                prefix={<IoLocationOutline className="text-black" size={20} />}
                suffix="Joined March, 2022"
              />
              <UserDetails
                prefix={<LuBadgeCheck className="text-black" size={20} />}
                suffix={`Pending orders: 4 orders`}
              />
              <UserDetails
                prefix={
                  <BiMessageSquareDetail className="text-black" size={20} />
                }
                suffix="Avg. response time: 1 hour"
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    </React.Fragment>
  );
};

export default AboutSeller;

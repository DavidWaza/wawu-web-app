import Image from "next/image";
import { Text } from "@/components/ui/Typography/Typography";
import UserDetails from "../UserDetails/UserDetails";
import { IoLocationOutline } from "react-icons/io5";
import { LuBadgeCheck } from "react-icons/lu";
import { BiMessageSquareDetail } from "react-icons/bi";
import UserAvatar from "../UserAvatar/UserAvatar";
import { useEffect, useState } from "react";
import axiosInstance from "@/pages/api/axiosInstance";
import { fetch_user_profile } from "@/pages/api/endpoints";
import { toast } from "sonner";


const UserProfile = () => {
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
    <div className="lg:flex gap-5 my-10 items-center">
      <UserAvatar userActive={"online"} />
      <div className="space-y-2">
        <Text variant="medium" className="text-black">
         {userProfileName}
        </Text>
        <div className="lg:flex gap-5 py-2 items-center">
          <UserDetails
            prefix={<IoLocationOutline className="text-black" size={20} />}
            suffix="Nigeria"
          />
          <UserDetails
            prefix={<LuBadgeCheck className="text-black" size={20} />}
            suffix="232 orders completed"
          />
          <UserDetails
            prefix={<BiMessageSquareDetail className="text-black" size={20} />}
            suffix="I speak English, Igbo, Hausa"
          />
        </div>
        <button className="p-3 text-black bg-[#EBEBEB] rounded-lg sora font-semibold">Contact me</button>
      </div>
    </div>
  );
};

export default UserProfile;

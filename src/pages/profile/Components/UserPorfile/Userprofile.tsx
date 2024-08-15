"use client";
import Image from "next/image";
import { Text } from "@/components/ui/Typography/Typography";
import UserDetails from "../UserDetails/UserDetails";
import { IoLocationOutline } from "react-icons/io5";
import { LuBadgeCheck } from "react-icons/lu";
import { BiMessageSquareDetail } from "react-icons/bi";
import UserAvatar from "../UserAvatar/UserAvatar";

import { useRouter } from "next/router";

const UserProfile = () => {

  const router = useRouter();
  const { name, last, about } = router.query;



  return (
    <div className="lg:flex gap-5 my-10 items-center">
      <UserAvatar userActive={"online"} />
      <div className="space-y-2">
        {name && last && about && (
          <>
            <Text
              variant="medium"
              className="text-black !font-semibold capitalize !sora"
            >
              {name} {last}
            </Text>
            <Text variant="small" className="text-black">
              {about}
            </Text>
          </>
        )}
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
        <button className="p-3 text-black bg-[#EBEBEB] rounded-lg sora font-semibold">
          Contact me
        </button>
      </div>
    </div>
  );
};

export default UserProfile;

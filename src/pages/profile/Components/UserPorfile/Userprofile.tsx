import Image from "next/image";
import { Text } from "@/components/ui/Typography/Typography";
import UserDetails from "../UserDetails/UserDetails";
import { IoLocationOutline } from "react-icons/io5";
import { LuBadgeCheck } from "react-icons/lu";
import { BiMessageSquareDetail } from "react-icons/bi";
import Button from "@/components/ui/Button/Button";

interface UserActiveProps {
  userActive: "online" | "offline" | "away";
}

const UserProfile: React.FC<UserActiveProps> = ({ userActive }) => {
  const UserActive = (active: "online" | "offline" | "away") => {
    if (active === "online") {
      return (
        <div className="animate-pulse bg-[#48d848] rounded-full size-4"></div>
      );
    } else if (active === "offline") {
      return (
        <div className="animate-pulse bg-red-500 rounded-full size-4"></div>
      );
    } else if (active === "away") {
      return (
        <div className="animate-pulse bg-gray-500 rounded-full size-4"></div>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="lg:flex gap-5 my-5 items-center">
      <div>
        <Image
          src="/assets/photo-girl.png"
          alt="img"
          width={400}
          height={400}
          className="rounded-full w-20 h-20 z-auto"
        />
        <div className="ml-[55px] -mt-[10px]">{UserActive(userActive)}</div>
      </div>
      <div className="">
        <Text variant="medium" className="text-black">
          Jane Doe
        </Text>
        <div className="lg:flex gap-5 my-5 items-center">
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
        <button className="p-3 text-black bg-[#EBEBEB] rounded-lg">Contact me</button>
      </div>
    </div>
  );
};

export default UserProfile;

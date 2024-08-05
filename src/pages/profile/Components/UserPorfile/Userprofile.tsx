import Image from "next/image";
import { Text } from "@/components/ui/Typography/Typography";
import UserDetails from "../UserDetails/UserDetails";
import { IoLocationOutline } from "react-icons/io5";
import { LuBadgeCheck } from "react-icons/lu";
import { BiMessageSquareDetail } from "react-icons/bi";
import UserAvatar from "../UserAvatar/UserAvatar";


const UserProfile = () => {
 

  return (
    <div className="lg:flex gap-5 my-5 items-center">
      <UserAvatar userActive={"online"} />
      <div className="">
        <Text variant="medium" className="text-black">
          Jane Doe
        </Text>
        <div className="lg:flex gap-5 py-5 items-center space-y-3">
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

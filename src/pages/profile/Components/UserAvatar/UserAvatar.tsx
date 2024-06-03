import React from "react";
import Image from "next/image";

interface UserActiveProps {
  userActive: "online" | "offline" | "away";
}

const UserAvatar: React.FC<UserActiveProps> = ({ userActive }) => {
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
  );
};

export default UserAvatar;

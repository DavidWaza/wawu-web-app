import React from "react";
import Link from "next/link";
import { IoHomeOutline } from "react-icons/io5";
import { GrBlog } from "react-icons/gr";
import { AiOutlineYoutube } from "react-icons/ai";
import { RiTeamLine } from "react-icons/ri";
import { IoDiceOutline } from "react-icons/io5";
import { TiMessages } from "react-icons/ti";
import Logo from "@/components/Header/Navbar/Logo/Logo";

const siderbarLinks = [
  {
    icon: <IoHomeOutline />,
    label: "Home",
    link: "/dashboard/home",
  },
  {
    icon: <GrBlog />,
    label: "Blog",
    link: "/dashboard/blog",
  },
  {
    icon: <AiOutlineYoutube />,
    label: "Advertisement",
    link: "/dashboard/ads",
  },
  {
    icon: <RiTeamLine />,
    label: "Team",
    link: "/dashboard/team",
  },
  {
    icon: <IoDiceOutline />,
    label: "Mentorship",
    link: "/dashboard/mentor",
  },
  {
    icon: <TiMessages />,
    label: "Messages",
    link: "/dashboard/message",
  },
  {
    icon: <AiOutlineYoutube />,
    label: "Youtube",
    link: "/dashboard/ads",
  },
];
const Sidebar = () => {
  return (
    <div className="bg-white h-screen fixed pt-4">
      <div>
        <Logo classname="w-full" />
      </div>
      {siderbarLinks.map((side, index) => (
        <div key={index} className="group">
          <Link href={side.link}>
            <div className="px-10 py-3">
              <div className="flex items-center gap-2 group-hover:bg-[#A812E3] rounded-lg transition-all ease-in-out px-5 py-2">
                <div className="group-hover:text-white">{side.icon}</div>
                <p className="font-semibold text-[16px] group-hover:text-white">
                  {side.label}
                </p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;

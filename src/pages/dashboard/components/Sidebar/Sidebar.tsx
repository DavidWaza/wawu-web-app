import React from "react";
import Link from "next/link";
import { IoHomeOutline } from "react-icons/io5";
import { GrBlog } from "react-icons/gr";
import { AiOutlineYoutube } from "react-icons/ai";
import { RiTeamLine } from "react-icons/ri";
import { IoDiceOutline } from "react-icons/io5";
import { TiMessages } from "react-icons/ti";
import Logo from "@/components/Header/Navbar/Logo/Logo";
import { usePathname } from "next/navigation";
import Image from "next/image";

const siderbarLinks = [
  {
    icon: <IoHomeOutline />,
    label: "Home",
    link: "/dashboard",
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
    link: "/dashboard/yt",
  },
];
const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="bg-white h-screen fixed">
      <div>
        {/* <Logo classname="w-full" /> */}
        <Image
          src={'/assets/WAWU-LOGO.svg'}
          width={0}
          height={0}
          alt="logo"
          sizes="100vw"
          className="w-full h-auto object-center object-contain"
        />
      </div>
      {siderbarLinks.map((side, index) => (
        <div key={index} className="group">
          <Link href={side.link}>
            <div className="px-10 py-3">
              <div
                className={`flex items-center gap-2 group-hover:bg-[#A812E3] rounded-lg transition-all ease-in-out px-5 py-2 ${
                  pathname === side.link ? "bg-[#A812E3] text-white" : ""
                }`}
              >
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

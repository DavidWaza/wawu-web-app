"use client";
import { useState } from "react";
import Link from "next/link";
import AuthLogo from "../../../../../../public/assets/WAWU-logo.svg";
import Button from "@/components/ui/Button/Button";
import Image from "next/image";

import FullDropDown from "@/components/Header/Navbar/WhyFullDropDown";
import Logo from "@/components/Header/Navbar/Logo/Logo";
import { ChevronDown } from "lucide-react";

interface linkProps {
  id: number;
  href: string;
  link: string;
  isCaret: boolean;
}
const links = [
  {
    id: 1,
    href: "/seller-landing",
    link: "Find Talent",
  },

  {
    id: 2,
    href: "buyer-landing",
    link: "Find Work",
  },
  {
    id: 3,
    href: "",
    link: "Why Wawu",
    isCaret: true,
  },
  {
    id: 4,
    href: "/mentorship",
    link: "Mentorship",
    isCaret: false,
  },
  {
    id: 5,
    href: "/about",
    link: "About Us",
    isCaret: false,
  },
];

const AuthNavbar: React.FC<linkProps> = () => {
  const [isToggle, setIsToggle] = useState(false);

  function toggleNav() {
    setIsToggle(!isToggle);
  }
  return (
    <>
      <nav
        className={` bg-[#290D43] w-full left-1/2 transform 2xl:flex items-center hidden`}
      >
        <div className="flex justify-between items-center w-full h-[5rem]">
          <div className=" flex justify-center items-center px-20 gap-10">
            <Logo classname="w-[70%]" />
            <div className="hidden gap-4 z-10 2xl:text-white 2xl:flex items-center">
              {links.map((link) => (
                <ul key={link.id}>
                  <Link href={link.href}>
                    <li className="flex justify-center items-center text-white">
                      {link.link}{" "}
                      <button onClick={toggleNav}>
                        {link.isCaret && <ChevronDown />}
                      </button>
                    </li>
                  </Link>
                </ul>
              ))}
              {isToggle && <FullDropDown />}
            </div>
          </div>
          <div className="flex justify-end space-x-4 px-20">
            <Link href={`/auth/sign-up`}>
              <button className="p-4 border-none bg-transparent text-[#ED459A]">
                Sign Up
              </button>
            </Link>
            <Button
              variant="primary"
              size="small"
              className="py-2 my-3"
              href="/auth/login"
            >
              Log in
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
};
export default AuthNavbar;

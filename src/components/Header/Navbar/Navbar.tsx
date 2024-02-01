"use client";
import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo/Logo";
import Caret from "@/components/Caret/Caret";
import Button from "@/components/ui/Button/Button";
import ExampleHeader from "./FullDropDown";
import FullDropDown from "./FullDropDown";

interface linkProps {
  id: number;
  href: string;
  link: string;
  isCaret: boolean;
}
const links = [
  {
    id: 1,
    href: "",
    link: "Find Talent",
    isCaret: true,
  },

  {
    id: 2,
    href: "",
    link: "Find Work",
    isCaret: true,
  },
  {
    id: 3,
    href: "",
    link: "Why Wawu",
    isCaret: true,
  },
  {
    id: 4,
    href: "",
    link: "Mentorship",
    isCaret: false,
  },
  {
    id: 5,
    href: "",
    link: "About Us",
    isCaret: false,
  },
];

const Navbar: React.FC<linkProps> = () => {
  const [isToggle, setIsToggle] = useState(false);

  function toggleNav() {
    setIsToggle(!isToggle);
  }
  return (
    <>
      <nav className="bg-white w-2/3 top-[4rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[50px] 2xl:fixed rounded-full flex items-center px-10 z-10">
        <div className="flex justify-between items-center w-full">
          <div className="flex">
            <Logo className="w-[7rem]"/>
            <div className="hidden gap-4 pt-[2.7rem] z-10 2xl:text-black 2xl:flex">
              {links.map((link) => (
                <ul key={link.id}>
                  <Link href={link.href}>
                    <li className="flex justify-center items-center">
                      {link.link}{" "}
                      <button onClick={toggleNav}>
                        {link.isCaret && <Caret />}
                      </button>
                    </li>
                  </Link>
                </ul>
              ))}
              {isToggle && <FullDropDown />}
            </div>
          </div>
          <div className="flex justify-end space-x-4">
            <button className="p-4 border-none bg-transparent text-[#ED459A]">
              Sign Up
            </button>
            <Button variant="primary" size="small" className="py-2 my-3">
              Log in
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;

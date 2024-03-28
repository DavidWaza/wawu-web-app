"use client";
import { useState } from "react";
import Link from "next/link";
import Logo from "@/components/Header/Navbar/Logo/Logo";
import Button from "@/components/ui/Button/Button";
import { RxCaretDown } from "react-icons/rx";
import FullDropDown from "@/components/Header/Navbar/FullDropDown";
import { useRouter } from "next/router";
import SkillsHeaderNav from "./Components/skills-nav-header";

interface linkProps {
  id: number;
  href: string;
  link: string;
  isCaret: boolean;
  children:React.ReactNode
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

const SkillsNavbarLayout: React.FC<linkProps> = ({children}) => {
  const [isToggle, setIsToggle] = useState(false);

  const router = useRouter();

  function toggleNav() {
    setIsToggle(!isToggle);
  }

  const handleSignUp = () => {
    router.push("/auth/sign-up");
  };

  const handleLogin = () => {
    router.push("/auth/login");
  };
  return (
    <>
      <nav className="px-[5rem]">
        <div className="flex justify-between items-center w-full">
          <div className="flex">
            <Logo className="w-[7rem]" />
            <div className="hidden gap-4 pt-[2.7rem] z-10 2xl:text-black 2xl:flex">
              {links.map((link) => (
                <ul key={link.id}>
                  <Link href={link.href}>
                    <li className="flex justify-center items-center">
                      {link.link}{" "}
                      <button onClick={toggleNav}>
                        {link.isCaret && <RxCaretDown className="text-black" />}
                      </button>
                    </li>
                  </Link>
                </ul>
              ))}
              {isToggle && <FullDropDown />}
            </div>
          </div>
          <div className="flex justify-end items-center space-x-4">
            <button
              className="p-4 border-none bg-transparent text-[#ED459A]"
              onClick={handleSignUp}
            >
              Sign Up
            </button>
            <Button
              variant="primary"
              size="small"
              className="py-2 my-3"
              onClick={handleLogin}
            >
              Log in
            </Button>
          </div>
        </div>
      </nav>
      <SkillsHeaderNav />
      {children}
    </>
  );
};
export default SkillsNavbarLayout;

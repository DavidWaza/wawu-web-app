"use client";
import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo/Logo";
import Button from "@/components/ui/Button/Button";
import { RxCaretDown } from "react-icons/rx";
import FullDropDown from "./FullDropDown";
import { useRouter } from "next/router";

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

const Navbar: React.FC<linkProps> = () => {
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
      <nav className="bg-white w-[80%] h-[75px] top-[4rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 2xl:fixed rounded-full 2xl:flex items-center px-10 z-10 hidden">
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
            <select
              className="px-4 py-3 border border-[#ED459A] bg-transparent text-black rounded-lg"
            >
              <option>English</option>
              <option>Arabic</option>
              <option>French</option>
              <option>Spanish</option>
            </select>
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
    </>
  );
};
export default Navbar;

"use client";
import { useState } from "react";
import Link from "next/link";

import { useRouter } from "next/router";
import WhyFullDropDown from "./WhyFullDropDown";
import FindFullNavigation from "./FindFullDropdown";
import WorkFullDropdown from "./WorkFullDropdown";
import HomeLogo from "./Logo/HomeLogo";
import { useTranslation } from 'react-i18next';
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
    href: "/buyer-landing",
    link: "Offer Services",
  },
  {
    id: 2,
    href: "/seller-landing",
    link: "Find Services",
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
  {
    id: 6,
    href: "/contact-us",
    link: "Contact Us",
    isCaret: false,
  },
  {
    id: 5,
    href: "/faq",
    link: "FAQ",
    isCaret: false,
  },
];

const Navbar: React.FC<linkProps> = () => {
  const [whyIsToggle, setWhyIsToggle] = useState(false);
  const [findIsToggle, setFindIsToggle] = useState(false);
  const [workIsToggle, setWorkIsToggle] = useState(false);

  const router = useRouter();

  function whyToggleNav() {
    setWhyIsToggle(!whyIsToggle);
    setFindIsToggle(false);
    setWorkIsToggle(false);
  }

  function findToggleNav() {
    setFindIsToggle(!findIsToggle);
    setWhyIsToggle(false);
    setWorkIsToggle(false);
  }

  function workToggleNav() {
    setWorkIsToggle(!workIsToggle);
    setFindIsToggle(false);
    setWhyIsToggle(false);
  }
  const handleSignUp = () => {
    router.push("/auth/sign-up");
  };

  const handleLogin = () => {
    router.push("/auth/login");
  };

  const { i18n } = useTranslation();

  const changeLanguage = (event: any) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <>
      <nav className="bg-white 2xl:w-[90%] h-[75px] 2xl:top-[4rem] 2xl:left-1/2 transform 2xl:-translate-x-1/2 2xl:-translate-y-1/2 2xl:fixed rounded-full flex items-center px-10 z-10">
        <div className="flex justify-between items-center w-full">
          <HomeLogo />
          <div className="flex gap-4 z-10 2xl:text-black 2xl:flex sora">
            {links.map((link) => (
              <ul key={link.id}>
                <Link href={link.href}>
                  <li className="flex justify-center items-center">
                    {link.link}{" "}
                    <button
                      onClick={
                        link.link === "Why Wawu"
                          ? whyToggleNav
                          : link.link === "Find Talent"
                          ? findToggleNav
                          : link.link === "Find Work"
                          ? workToggleNav
                          : undefined
                      }
                    >
                      {link.isCaret && <ChevronDown />}
                    </button>
                  </li>
                </Link>
              </ul>
            ))}
            {whyIsToggle && <WhyFullDropDown />}
            {findIsToggle && <FindFullNavigation />}
            {workIsToggle && <WorkFullDropdown />}
          </div>
          <div className="flex justify-end items-center space-x-4 sora">
            <select
              className="px-4 py-3 border border-[#ED459A] bg-transparent text-black rounded-lg"
              onChange={changeLanguage}
              defaultValue={i18n.language}
            >
              <option value="en">English</option>
              <option value="ar">Arabic</option>
              <option value="fr">French</option>
              <option value="es">Spanish</option>
            </select>
            <Link href={"/auth/sign-up"}>
              <button
                className="p-4 border-none bg-transparent text-[#ED459A]"
                onClick={handleSignUp}
              >
                Sign Up
              </button>
            </Link>
            <Link href={"/auth/login"}>
              <button
                className="py-2 px-10 my-3 bg-[#ED459A] rounded-lg text-white"
                onClick={handleLogin}
              >
                Log in
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;

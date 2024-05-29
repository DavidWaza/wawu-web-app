import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import { RiCloseLargeLine } from "react-icons/ri";

const MobileNavbar = () => {
  const [hamburgerClick, setHamburgerClick] = useState(false);

  const handleClickHamburger = () => {
    setHamburgerClick(!hamburgerClick);
  };
  const handleClose = () => {
    setHamburgerClick(false);
  };
  return (
    <nav className="bg-[#fefefe] h-[10.9375vh] shrink-0 flex justify-between items-center px-5 lg:px-20 relative">
      <Image
        src={"/assets/w-logo.svg"}
        width={0}
        height={0}
        sizes="100vw"
        alt="logo"
        className="w-full md:w-[50%] h-auto object-cover object-center"
      />
      <div>
        <button
          onClick={handleClickHamburger}
          className="transition-all ease-linear"
        >
          {hamburgerClick ? (
            <IoCloseOutline className="text-black" size={30} />
          ) : (
            <RxHamburgerMenu className="text-black" size={30} />
          )}
        </button>
      </div>
      {hamburgerClick && (
        <div className="fixed top-0 right-0 h-full w-[70%] bg-[#ffffff] flex flex-col items-right px-10 space-y-4 py-32 z-50 transition-all ease-in-out">
          <div onClick={handleClose} className="absolute right-[30px] top-7">
            <RiCloseLargeLine className="text-black" size={30}/>
          </div>
          <Link href="/" className="text-black text-lg">
            Home
          </Link>
          <Link href="/about" className="text-black text-lg">
            About
          </Link>
          <Link href="/mentorship" className="text-black text-lg">
            Mentorship
          </Link>
          <Link href="/contact-us" className="text-black text-lg">
            Contact us
          </Link>
          <Link href="/faq" className="text-black text-lg">
            FAQ
          </Link>
        </div>
      )}
    </nav>
  );
};

export default MobileNavbar;

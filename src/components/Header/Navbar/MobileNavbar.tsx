"use client";

import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";

const MobileNavbar = () => {
  const [hamburgerClick, setHamburgerClick] = useState(false);

  const handleClickHamburger = () => {
    setHamburgerClick(!hamburgerClick);
  };

  return (
    <nav className="bg-[#fefefe] h-[10.9375vh] shrink-0 flex justify-between items-center px-5 lg:px-20 relative">
      <Image
        src={"/assets/w-logo.svg"}
        width={0}
        height={0}
        sizes="100vw"
        alt="logo"
        className="w-full h-auto object-cover object-center"
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
        <div className="absolute top-full left-0 w-full bg-[#ffffff] flex flex-col items-center space-y-4 py-4 z-auto">
          <Link href="/" className="text-black text-lg">
            Home
          </Link>
          <Link href="/about" className="text-black text-lg">
            About
          </Link>
          <Link href="/faq" className="text-black text-lg">
            FAQ
          </Link>
          <Link href="/contact" className="text-black text-lg">
            Contact us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default MobileNavbar;

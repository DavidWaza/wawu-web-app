"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const MobileNavbar = () => {
  const [hamburgerClick, setHamburgerClick] = useState(false);
  const pathname = usePathname(); // Get the current path

  const handleClickHamburger = () => {
    setHamburgerClick(!hamburgerClick);
  };

  const handleClose = () => {
    setHamburgerClick(false);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/seller-landing", label: "Find Services" },
    { href: "/buyer-landing", label: "Offer Services" },
    { href: "/about", label: "About" },
    { href: "/mentorship", label: "Mentorship" },
    { href: "/contact-us", label: "Contact us" },
    { href: "/faq", label: "FAQ" },
    { href: "/auth/login", label: "Login", className: "pt-10" },
    { href: "/auth/sign-up", label: "Sign up", className: "text-red-600" },
  ];

  return (
    <nav className="bg-[#fefefe] py-[35px] shrink-0 flex justify-between items-center px-5 lg:px-20 relative">
      <Image
        src={
          "https://res.cloudinary.com/dgbl43ljm/image/upload/v1724197587/homelogo_r8tiaw.png"
        }
        width={0}
        height={0}
        sizes="100vw"
        alt="logo"
        className="lg:w-full md:w-full w-2/3 h-auto object-cover object-center"
      />

      <div>
        <button
          onClick={handleClickHamburger}
          className="transition-all ease-linear"
        >
          {hamburgerClick ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {hamburgerClick && (
        <div className="fixed top-0 right-0 h-full w-[70%] bg-[#ffffff] flex flex-col items-right px-10 space-y-4 py-14 z-50 transition-all ease-in-out">
          <div onClick={handleClose} className="absolute right-[30px] top-7">
            <X size={30} />
          </div>

          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={`text-lg font-semibold ${link.className || ""}`}
              onClick={handleClose}
            >
              <p className={`${pathname === link.href ? "!text-[#F52585]" : "text-black"}`}>
                {link.label}
              </p>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default MobileNavbar;

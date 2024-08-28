import Image from "next/image";
import { Text } from "../ui/Typography/Typography";
import Link from "next/link";
import { pageLinks } from "@/data/portfolioData";

import FooterLogo from "./FooterLogo";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

//facebook
// twitter
// tiktok
// instagram
const contactLinks = [
  {
    icon: <Mail className="lg:w-[20px] w-[15px]" />,
    contact: "support@wawuafrica.com",
  },
  {
    icon: <MapPin className="lg:w-[20px] w-[25px]" />,
    contact: ` 14 Ibiyinka Salvador, Off African Lane Lekki Phase 1, Lagos
      Nigeria.`,
  },
  {
    icon: <Phone className="lg:w-[20px] w-[15px]" />,
    contact: "+2348089925524",
  },
];
const Footer = () => {
  return (
    <footer className="bg-slate-50 pt-8 pb-6">
      <div className="lg:px-20 px-5 mx-auto">
        <div className="flex flex-col lg:flex-row text-left lg:text-left items-center">
          <div className="w-full lg:w-6/12">
            <FooterLogo classname="w-[40%]" />
            {contactLinks.map((contactLink, index) => (
              <div className="block px-4" key={index}>
                <div className="flex gap-3 align-middle items-center mt-3 py-1">
                  {contactLink.icon}
                  <Text variant="small">{contactLink.contact}</Text>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full lg:w-6/12 px-4 sora capitalize pt-6 lg:pt-0">
            <div className="flex flex-wrap items-top mb-6 lg:justify-end text-black">
              {pageLinks.map((pageLink, index) => (
                <div className="mx-2 lg:mx-4" key={index}>
                  <span className="block text-sm font-semibold mb-2">
                    <Link href={pageLink.link}>
                      <Text variant="small" textWeight="bold">
                        {pageLink.label}
                      </Text>
                    </Link>
                  </span>
                </div>
              ))}
            </div>
            <div className="flex justify-center lg:justify-end gap-4 lg:gap-5 mt-10">
              <Link href={"https://x.com/wawu_africa"}>
                <Twitter size={25} />
              </Link>
              <Link href={"https://www.instagram.com/wawu.africa/"}>
                <Instagram size={25} />
              </Link>
            </div>
          </div>
        </div>
        <hr className="my-6 border-blueGray-300" />
        <div className="flex flex-col md:flex-row justify-between items-center text-[#5F6D7E] w-full">
          <Text
            variant="small"
            className="w-full text-center md:text-left mb-4 md:mb-0"
          >
            2024 wawuafrica. All Rights Reserved
          </Text>
          <div className="flex flex-col md:flex-row gap-5 items-center md:items-start justify-center md:justify-start">
            <Link
              href={
                "https://drive.google.com/file/d/1wjfWmyRQwpq_agNSxHC9jGru63pM6_gR/view?usp=drive_link"
              }
            >
              <Text
                variant="small"
                className="w-full text-center md:text-left text-nowrap"
              >
                Privacy Policy
              </Text>
            </Link>
            <Link
              href={
                "https://drive.google.com/file/d/1kXL2hWiAz3L5zH_vR84AybGnpE8QlfGv/view?usp=drive_link"
              }
            >
              <Text
                variant="small"
                className="w-full text-center md:text-left text-nowrap"
              >
                Cookie Policy
              </Text>
            </Link>

            <Link
              href={
                "https://drive.google.com/file/d/1Uu6EAwJIWlH86USS1sjYNyYZTR-DGpii/view?usp=drive_link"
              }
            >
              <Text
                variant="small"
                className="w-full text-center md:text-left text-nowrap"
              >
                Terms & Condition
              </Text>
            </Link>
            <Link
              href={
                "https://drive.google.com/file/d/1zcZOLv4TbuSIIkN8MrSLbhrGMiltj4dr/view?usp=drive_link"
              }
            >
              <Text
                variant="small"
                className="w-full text-center md:text-left text-nowrap"
              >
                Disclaimer
              </Text>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import Image from "next/image";
import { Text } from "../ui/Typography/Typography";
import Link from "next/link";
import { pageLinks } from "@/data/portfolioData";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import FooterLogo from "./FooterLogo";
import { Mail, MapPin, Phone } from "lucide-react";

const contactLinks = [
  {
    icon: <Mail size={20} />,
    contact: "support@wawuafrica.com",
  },
  {
    icon: <MapPin  />,
    contact: ` 14 Ibiyinka Salvador, Off African Lane Lekki Phase 1, Lagos
      Nigeria.`,
  },
  {
    icon: <Phone size={20} />,
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
                <div className="flex gap-3 align-middle items-center mt-3 py-3">
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
            <div className="flex justify-center lg:justify-end gap-4 lg:gap-10 mt-10">
              <Link href={"#"}>
                <FaFacebook size={25} />
              </Link>
              <Link href={"#"}>
                <FaXTwitter size={25} />
              </Link>
              <Link href={"#"}>
                <FaTiktok size={25} />
              </Link>
              <Link href={"#"}>
                <RiInstagramFill size={25} />
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
            <Link href={"/legal"}>
              <Text
                variant="small"
                className="w-full text-center md:text-left text-nowrap"
              >
                Privacy Policy
              </Text>
            </Link>

            <Text
              variant="small"
              className="w-full text-center md:text-left text-nowrap"
            >
              Cookie Policy
            </Text>

            <Link href={"/legal"}>
              <Text
                variant="small"
                className="w-full text-center md:text-left text-nowrap"
              >
                Terms & Condition
              </Text>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import Logo from "../Header/Navbar/Logo/Logo";
import { Text } from "../ui/Typography/Typography";
import Link from "next/link";

const contactLinks = [
  {
    src: "/icons/mail.svg",
    contact: "help@wawutech.com",
  },
  {
    src: "/icons/link.svg",
    contact: ` 14 Ibiyinka Salvador, Off African Lane Lekki Phase 1, Lagos
    Nigeria.`,
  },
  {
    src: "/icons/link.svg",
    contact: "+2348089925524",
  },
];
const pageLinks = [
  {
    link: "",
    label: "About Us",
  },
  {
    link: "",
    label: `Expertise`,
  },
  {
    link: "",
    label: "Community",
  },
];
const socialLinks = [
  {
    link: "#",
    src: "/icons/ig.svg",
  },
  {
    link: "#",
    src: `/icons/fb.svg`,
  },
  {
    link: "#",
    src: "/icons/tiktok.svg",
  },
  {
    link: "#",
    src: "/icons/vector.svg",
  },
];
const Footer = () => {
  return (
    <div>
      <footer className="relative bg-slate-50 pt-8 pb-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-left lg:text-left items-center">
            <div className="w-full lg:w-6/12 px-4">
              <Logo className="w-[6.7rem]" />
              {contactLinks.map((contactLinks, index) => (
                <div className="block" key={index}>
                  <div className="flex gap-3 align-middle items-center mt-3">
                    <img src={contactLinks.src} alt="items-center" />
                    <Text variant="small">
                      {contactLinks.contact}
                    </Text>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full lg:w-6/12 px-4 sora capitalize pt-[3rem]">
              <div className="flex items-top mb-6 justify-end text-black">
                {pageLinks.map((pageLink, index) => (
                  <div className="mx-4" key={index}>
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
              <div className="flex justify-end gap-10 px-[3rem]  mt-20">
                {socialLinks.map((socialLink, index) => (
                  <Link href={socialLink.link} key={index}>
                    <img src={socialLink.src} alt="social-logo" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="flex justify-between text-[#5F6D7E] w-full">
            <div className="justify-start">
              <Text variant="small" className="w-full mx-auto">
                2023 wawutech. All Rights Reserved
              </Text>
            </div>
            <div className="flex justify-end items-center">
              <Text variant="small" className="w-full  mx-auto">
                Privacy Policy
              </Text>
              <Text variant="small" className="w-full mx-auto">
                Terms & Condition
              </Text>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;

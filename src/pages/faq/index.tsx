"use client";
import Accordion from "@/components/AccordionComponent/Accordion";
import MobileNavbar from "@/components/Header/Navbar/MobileNavbar";
import Navbar from "@/components/Header/Navbar/Navbar";
import { Heading, Text } from "@/components/ui/Typography/Typography";
import { usePathname } from "next/navigation";

const FAQ = () => {
  const pathname = usePathname();

  return (
    <>
      <div className="hidden lg:block">
        <Navbar id={0} link="" href="" isCaret />
      </div>
      <div className="block lg:hidden">
        <MobileNavbar />
      </div>
      <div className="bg-white lg:py-[12rem]">
        <div className="text-center py-10">
          <Heading variant="medium" fontColor="secondary">
            Frequently Asked Questions
          </Heading>
          <div className="px-10">
            <Text variant="small" className="pt-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been <br />
              the industrys standard dummy text ever since the 1500s,
            </Text>
          </div>
        </div>
        <div className="lg:px-32">
          <Accordion />
        </div>
      </div>
    </>
  );
};
export default FAQ;

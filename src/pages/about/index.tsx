import Hero from "@/components/Header/Hero/Hero";
import Section from "@/components/ui/Section/Section";
import { Heading, Text } from "@/components/ui/Typography/Typography";
import Navbar from "@/components/Header/Navbar/Navbar";
import AboutCompany from "./components/AboutCompany/AboutCompany";
import Container from "@/components/Container/Container";
import AboutCarousel from "./components/AboutCompany/AboutCarousel/AboutCarousel";
import GetInTouch from "./components/AboutCompany/GetInTouch/GetInTouch";
import MobileNavbar from "@/components/Header/Navbar/MobileNavbar";
import Image from "next/image";
import PricePackage from "@/components/PricePackage/PricePackage";
import ReactPlayer from "react-player";

const AboutUs = () => {
  return (
    <>
      <div className="hidden lg:block">
        <Navbar id={0} link="" href="" isCaret />
      </div>
      <div className="block lg:hidden">
        <MobileNavbar />
      </div>
      <Hero />
      <div className=" bg-white">
        <div className="lg:px-[7.5rem] md:px-[3rem] px-[1rem] ">
          <div className="py-20">
            <div className="grid lg:grid-cols-2 gap-4 lg:gap-10 items-center">
              <ReactPlayer
                url="https://youtu.be/L8c3PGSjMIs?si=0I-2FZVN_sEkaFgE"
                width={`100%`}
              />
              <div className="py-3">
                <AboutCompany />
              </div>
            </div>
          </div>
          <>
            <Heading variant="medium" fontColor="secondary" className="!py-10">
              Popular Services
            </Heading>
            <div className="py-5">
              <AboutCarousel />
            </div>
            <GetInTouch />
          </>
        </div>
      </div>
    </>
  );
};
export default AboutUs;

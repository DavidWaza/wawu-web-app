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

const AboutUs = () => {
  return (
    <>
      <div className="hidden md:block">
        <Navbar id={0} link="" href="" isCaret />
      </div>
      <div className="block md:hidden">
        <MobileNavbar />
      </div>
      <Hero />
      <div className="bg-white">
        <Section>
          <div className="grid lg:grid-cols-2 gap-4 lg:gap-0 items-center">
            <div className="flex lg:justify-center items-center">
              <Image
                src="/assets/ceo.png"
                alt="the ceo"
                className="lg:w-[70%] h-auto object-contain object-center"
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
            <AboutCompany />
          </div>
        </Section>
        <Container>
          <Section>
            <Heading variant="medium" fontColor="secondary">
              Popular Services
            </Heading>
          </Section>
          <AboutCarousel />
          <Section>
            <GetInTouch />
          </Section>
        </Container>
      </div>
    </>
  );
};
export default AboutUs;

import Hero from "@/components/Header/Hero/Hero";
import Section from "@/components/ui/Section/Section";
import { Heading, Text } from "@/components/ui/Typography/Typography";
import Navbar from "@/components/Header/Navbar/Navbar";
import AboutCompany from "./components/AboutCompany/AboutCompany";
import Container from "@/components/Container/Container";
import AboutCarousel from "./components/AboutCompany/AboutCarousel/AboutCarousel";
import GetInTouch from "./components/AboutCompany/GetInTouch/GetInTouch";

const AboutUs = () => {
  return (
    <>
      <Navbar id={0} link="" href="" isCaret />
      <Hero />
      <div className="bg-white">
        <Section>
          <div className="grid 2xl:grid-cols-2 gap-4 2xl:gap-0 items-center">
            <div className="flex justify-center items-center">
              <img src="/assets/ceo.png" alt="the ceo" className="" />
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

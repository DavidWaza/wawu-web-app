import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Header/Navbar/Navbar";
import Section from "@/components/ui/Section/Section";
import Hero from "@/components/Header/Hero/Hero";
import Testimonial from "@/components/Testimonial/Testimonial";
import { TypeWriter } from "@/components/Typewriter/Typewriter";
import { Text } from "@/components/ui/Typography/Typography";
import { WawuProps } from "@/components/WawuProps/WawuProps";
import WawuPlatforms from "@/components/WawuProps/WawuPlatforms/WawuPlatforms";
import Button from "@/components/ui/Button/Button";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar id={0} link="" href="" isCaret />
      <Hero />
      <div className="bg-white">
        <Section>
          <Testimonial />
        </Section>
      </div>
      <div className="bg-[#F7ABD1] px-20">
        <Section>
          <Text variant="medium" className="sora">
            {" "}
            Who is your Girl?
          </Text>
          <TypeWriter />
          <div className="flex mt-5">
            <Text>Start Here</Text>
          </div>
        </Section>
      </div>
      <div className="bg-[#fff]">
        <Section>
          <div className="grid 2xl:grid-cols-2">
            <div>
              <WawuProps />
              <WawuPlatforms />
            </div>
            <div>
              <img src="/assets/girl-with-earth.png" alt="girl-with-earth" />
            </div>
          </div>
          <Button variant="tertiary" className="mt-20" size="large">
            Get Started
          </Button>
        </Section>
      </div>
    </>
  );
}

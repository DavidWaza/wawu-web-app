import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Header/Navbar/Navbar";
import ExampleHeader from "@/components/Header/Navbar/FullDropDown";
import Section from "@/components/ui/Section/Section";
import Hero from "@/components/Header/Hero/Hero";
import Testimonial from "@/components/Testimonial/Testimonial";
import { Container } from "@/components/ui/Container/Container";
import { TypeWriter } from "@/components/Typewriter/Typewriter";
import { Text } from "@/components/ui/Typography/Typography";
import Typewriter from "typewriter-effect";

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
    </>
  );
}

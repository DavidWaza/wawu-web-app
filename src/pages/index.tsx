import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Header/Navbar/Navbar";
import ExampleHeader from "@/components/Header/Navbar/FullDropDown";
import Section from "@/components/ui/Section/Section";
import Hero from "@/components/Header/Hero/Hero";
import Testimonial from "@/components/Testimonial/Testimonial";
import { Container } from "@/components/ui/Container/Container";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar id={0} link="" href="" isCaret />
      <Hero />
      <Container backgroundColor="">
        <Section>
          <Testimonial />
        </Section>
      </Container>
    </>
  );
}

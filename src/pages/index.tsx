import Image from "next/image";
import { Inter } from "next/font/google";
import Section from "@/components/ui/Section/Section";
import Navbar from "@/components/Header/Navbar/Navbar";
import Hero from "@/components/Header/Hero/Hero";
import Testimonial from "@/components/Testimonial/Testimonial";
import { TypeWriter } from "@/components/Typewriter/Typewriter";
import { Text } from "@/components/ui/Typography/Typography";
import { WawuProps } from "@/components/WawuProps/WawuProps";
import WawuPlatforms from "@/components/WawuProps/WawuPlatforms/WawuPlatforms";
import Button from "@/components/ui/Button/Button";
import VideoCarousel from "@/components/VideoCarousel/VideoCarousel";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { useState } from "react";
import NextSlideVideoCarousel from "@/components/VideoCarousel/NextSlideVideoCarousel";
import next from "next";
import DigitalReality from "@/components/DigitalReality/DigitalReality";
import Adverts from "@/components/Adverts/Adverts";
import Footer from "@/components/Footer/Footer";
import Mentorship from "./mentorship";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [nextVideo, setNextVideo] = useState(false);

  // function NextVideoSlide() {
  //   setNextVideo(true)
  //   console.log('set new slide')
  // }
  const NextVideoSlider = () => {
    setNextVideo(!nextVideo);
    // console.log('server')
  };

  return (
    <>
      <Navbar id={0} link="" href="" isCaret />
      <Hero />
      <div className="bg-white">
        {/* <Section>
          <Testimonial />
        </Section> */}
      </div>
      <div className="bg-[#F7ABD1] 2xl:px-20 2xl:text-left text-center">
        <Section>
          <Text variant="medium" className="sora text-black">
            {" "}
            Who is your Girl?
          </Text>
          <TypeWriter />
          <div className="flex mt-5 2xl:justify-start justify-center">
            <Text className="text-black">Start Here</Text>
          </div>
        </Section>
      </div>
      <div className="bg-[#fff]">
        <Section>
          <div className="grid 2xl:grid-cols-2 2xl:px-16 ">
            <div>
              <WawuProps />
              <WawuPlatforms />
            </div>
            <div className="2xl:flex hidden">
              <img src="/assets/girl-with-earth.png" alt="girl-with-earth" />
            </div>
          </div>
          <div className="flex justify-start  px-16">
            <Button
              variant="tertiary"
              className="mt-20 py-2"
              size="large"
              // onClick={() => console.log("next video slide")}
            >
              Get Started
            </Button>
          </div>
        </Section>
      </div>
      <div className="bg-[#471471] py-10">
        <Section>
          <div className={`${!nextVideo ? "block" : "hidden"}`}>
            <VideoCarousel />
          </div>
          {nextVideo && (
            <div className="text-white text-lg  transition-all ease-in-out">
              <NextSlideVideoCarousel />
            </div>
          )}
        </Section>
        <div className={`flex px-10 2xl:justify-end justify-center`}>
          <Button
            size="large"
            className="flex justify-center items-center gap-2 py-2 border-none"
            onClick={NextVideoSlider}
          >
            {nextVideo ? "Previous Video" : "Next Video"}
            {!nextVideo ? (
              <IoIosArrowRoundForward className="w-7 h-auto" />
            ) : (
              <IoIosArrowRoundBack className="w-7 h-auto" />
            )}
          </Button>
        </div>
      </div>
      <div className="bg-white">
        <Section>
          <div className="flex justify-center items-center align-middle">
            {" "}
            blog posts
          </div>
        </Section>
      </div>
      <DigitalReality />
      <Adverts />
    </>
  );
}

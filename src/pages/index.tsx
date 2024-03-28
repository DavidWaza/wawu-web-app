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
import DigitalReality from "@/components/DigitalReality/DigitalReality";
import Adverts from "@/components/Adverts/Adverts";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [nextVideo, setNextVideo] = useState(false);

  const NextVideoSlider = () => {
    setNextVideo(!nextVideo);
  };

  const platforms = [
    {
      iconSrc: "/icons/paper-plane.svg",
      alt: "paper plain",
      title: "Stewards",
      desc: `   Leaving no one behind as we set out on this amazing journey building
          sustainable businesses, creating employment opportunities and becoming
          effective, efficient and transformative stewards.`,
    },
    {
      iconSrc: "/icons/light-bulb.svg",
      alt: "light bulb",
      title: "Mentorship",
      desc: `The NextGen community of stewards, incubators, builders, creators, and leaders`,
    },
    {
      iconSrc: "/icons/pie-chart.svg",
      alt: "pie chart",
      title: "Patrons",
      desc: `Savy Startups, Industry Leaders, Movers + Shakers, Innovators, Great Partnerships, Daring Disruptors, all Start here .`,
    },
  ];

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
          <div className="flex mt-5 gap-5 2xl:justify-start items-center justify-center">
            <Text className="text-black">Start Here </Text>
            <div className=" rounded-full p-1 w-1 mt-3 bg-[#730C99] text-transparent"></div>
          </div>
        </Section>
      </div>
      <div className="bg-[#fff]">
        <Section>
          <div className="grid lg:grid-cols-2 2xl:px-16 ">
            <div>
              <WawuProps />
              {platforms.map((platform, index) => (
                <div key={index}>
                  <WawuPlatforms
                    iconSrc={platform.iconSrc}
                    alt={platform.alt}
                    title={platform.title}
                    desc={platform.desc}
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-center items-center">
              <Image
                src="/assets/girl-with-earth.png"
                alt="girl-with-earth"
                width={500}
                height={500}
                className="w-1/2 lg:w-2/3"
              />
            </div>
          </div>
          <div className="flex 2xl:justify-start justify-center 2xl:px-16">
            <Button
              variant="tertiary"
              className="mt-20 py-2"
              size="medium"
              // onClick={() => console.log("next video slide")}
            >
              Get Started
            </Button>
          </div>
        </Section>
      </div>
      <div>
        <Adverts />
      </div>
      <div className="bg-[#471471] py-10 transition-all ease-linear">
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
            size="medium"
            className="flex justify-center items-center gap-2 py-2 border-none"
            onClick={NextVideoSlider}
          >
            {!nextVideo ? (
              <IoIosArrowRoundForward className="w-7 h-auto order-1" />
            ) : (
              <IoIosArrowRoundBack className="w-7 h-auto " />
            )}
            {nextVideo ? "Previous Video" : "Next Video"}
          </Button>
        </div>
      </div>
      <div className="bg-white">
        <Section>
          <div className="flex justify-center items-center align-middle">
            {" "}
            <p className="text-black text-center">Blogs</p>
          </div>
        </Section>
      </div>
      <DigitalReality
        backgroundColor="bg-[#290D43]"
        submitText="Submit"
        placeholder="Enter your email"
      />
      <Adverts />
    </>
  );
}

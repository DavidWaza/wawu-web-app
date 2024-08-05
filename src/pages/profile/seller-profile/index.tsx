import TextHeader from "../Components/TextHeaderComponent/TextHeader";

import Rating from "../Components/Rating/Rating";
import UserProfile from "../Components/UserPorfile/Userprofile";
import AboutSection from "../Components/AboutSellerProfile/AboutSection";
import SkillsSection from "../Components/SkillsSection/SkillsSection";
import AboutTheGig from "../Components/AboutTheGig/AboutTheGig";
import AboutSeller from "../Components/AboutSeller/AboutSeller";
import Userportfolio from "../Components/UserPortfolio/Userportfolio";
import Card from "@/components/Cards/Card";
import Header from "@/pages/sellers/Components/Header/Header";
import GigPortfolio from "@/pages/sellers/Components/GigPortfolio/GigPortfolio";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function SellerProfile() {
  return (
    <>
      <Header />
      <GigPortfolio />
      <div className="grid lg:grid-cols-3">
        <div className="px-10 lg:px-[8.4rem] py-4 col-span-2">
          <TextHeader />
          <Rating />
          <UserProfile />
          <AboutSection />
          <SkillsSection />
          <AboutTheGig />
          <AboutSeller />
          <AboutSection />
          <Userportfolio />
          <div className="my-20">
            <span className="text-black font-semibold text-2xl">FAQ</span>
            <Accordion
              type="single"
              collapsible
              className="text-black px-5 py-10"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-black">
                  Is it accessible?
                </AccordionTrigger>
                <AccordionContent className="text-black">
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <div>{/* Review Section */}</div>
      </div>
      <div className="px-10 lg:px-[8.4rem]">
        <span className="text-black font-semibold text-2xl ">
          Recommended for you.
        </span>
        <div className=" grid md:grid-cols-3 lg:grid-cols-5 gap-5 py-5">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div className="px-10 lg:px-[8.4rem] my-20">
        <span className="text-black font-semibold text-2xl ">
          browsing history.
        </span>
        <div className=" grid md:grid-cols-3 lg:grid-cols-5 gap-5 py-5">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}

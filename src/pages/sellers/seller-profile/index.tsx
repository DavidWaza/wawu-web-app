import Card from "@/components/Cards/Card";
import Header from "@/pages/sellers/Components/Header/Header";
import GigPortfolio from "@/pages/sellers/Components/GigPortfolio/GigPortfolio";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import TextHeader from "@/pages/profile/Components/TextHeaderComponent/TextHeader";
import Rating from "@/pages/profile/Components/Rating/Rating";
import UserProfile from "@/pages/profile/Components/UserPorfile/Userprofile";
import AboutSection from "@/pages/profile/Components/AboutSellerProfile/AboutSection";
import SkillsSection from "@/pages/profile/Components/SkillsSection/SkillsSection";
import AboutTheGig from "@/pages/profile/Components/AboutTheGig/AboutTheGig";
import AboutSeller from "@/pages/profile/Components/AboutSeller/AboutSeller";
import Userportfolio from "@/pages/profile/Components/UserPortfolio/Userportfolio";

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
          <Card name={""} />
          <Card name={""} />
          <Card name={""} />
          <Card name={""} />
          <Card name={""} />
        </div>
      </div>
      <div className="px-10 lg:px-[8.4rem] my-20">
        <span className="text-black font-semibold text-2xl ">
          browsing history.
        </span>
        <div className=" grid md:grid-cols-3 lg:grid-cols-5 gap-5 py-5">
          <Card name={""} />
          <Card name={""} />
          <Card name={""} />
          <Card name={""} />
          <Card name={""} />
        </div>
      </div>
    </>
  );
}

import TextHeader from "../Components/TextHeaderComponent/TextHeader";
import Header from "../../buyers/Components/Header/Header";
import GigPortfolio from "../../buyers/Components/GigPortfolio/GigPortfolio";
import Rating from "../Components/Rating/Rating";
import UserProfile from "../Components/UserPorfile/Userprofile";
import AboutSection from "../Components/AboutSellerProfile/AboutSection";
import SkillsSection from "../Components/SkillsSection/SkillsSection";
import AboutTheGig from "../Components/AboutTheGig/AboutTheGig";
import AboutSeller from "../Components/AboutSeller/AboutSeller";
import PricePackage from "@/components/PricePackage/PricePackage";
import Userportfolio from "../Components/UserPortfolio/Userportfolio";
import Accordion from "@/components/AccordionComponent/Accordion";
import Card from "@/components/Cards/Card";

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
          <PricePackage />
          <AboutSeller />
          <AboutSection />
          <Userportfolio />
          <div className="my-20">
            <span className="text-black font-semibold text-2xl">FAQ</span>
            <Accordion />
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

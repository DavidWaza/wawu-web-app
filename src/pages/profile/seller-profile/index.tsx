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
        </div>
      </div>
    </>
  );
}

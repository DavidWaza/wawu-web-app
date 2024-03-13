import TextHeader from "../Components/TextHeaderComponent/TextHeader";
import Header from "../../buyers/Components/Header/Header";
import GigPortfolio from "../../buyers/Components/GigPortfolio/GigPortfolio";
import Rating from "../Components/Rating/Rating";
import UserProfile from "../Components/UserPorfile/Userprofile";
import AboutSection from "../Components/AboutSellerProfile/AboutSection";
import SkillsSection from "../Components/SkillsSection/SkillsSection";
import AboutTheGig from "../Components/AboutTheGig/AboutTheGig";
export default function SellerProfile() {
  return (
    <>
      <Header />
      <GigPortfolio />
      <div className="grid lg:grid-cols-3">
        <div className="px-[8.4rem] py-4 col-span-2">
          <TextHeader />
          <Rating />
          <UserProfile userActive={"online"} />
          <AboutSection />
          <SkillsSection />
          <AboutTheGig />
        </div>
      </div>
    </>
  );
}

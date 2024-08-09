import Navbar from "@/components/Header/Navbar/Navbar";
import Hero from "@/components/Header/Hero/Hero";
import DigitalReality from "@/components/DigitalReality/DigitalReality";
import Adverts from "@/components/Adverts/Adverts";
import Type from "@/components/Type/Type";
import VideoComponent from "@/components/VideoComponent/VideoComponent";
import WawuPropsComponent from "@/components/WawuProps/WawuProps";
import MobileNavbar from "@/components/Header/Navbar/MobileNavbar";

const Home = () => {
  return (
    <div>
      <div className="hidden xl:block">
        <Navbar id={0} link="" href="" isCaret />
      </div>
      <div className="block xl:hidden">
        <MobileNavbar />
      </div>
      <Hero />
      <Type />
      <WawuPropsComponent />
      <Adverts />
      <VideoComponent />
      <DigitalReality
        backgroundColor="bg-[#290D43]"
        submitText="Submit"
        placeholder="Enter your email"
      />
    </div>
  );
};
export default Home;

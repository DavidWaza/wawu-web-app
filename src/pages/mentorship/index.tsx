import Section from "@/components/ui/Section/Section";
import Navbar from "@/components/Header/Navbar/Navbar";
import HeroComponent from "@/components/HeroComponent/HeroComponent";
import MobileNavbar from "@/components/Header/Navbar/MobileNavbar";
import MentorComponent from "./components/ToggleButton/ToggleButton";

export default function Mentorship() {
  return (
    <>
      <div className=" hidden lg:block">
        <Navbar id={0} link="" href="" isCaret />
      </div>
      <div className="block lg:hidden">
        <MobileNavbar />
      </div>
      <HeroComponent
        backgroundColor="bg-[#471471]"
        header="Mentorship"
        secondaryText="The NextGen Community of Stewards, Incubators, Builders,
                Creators, and Leaders."
        subText={`Show me a good steward, and i will show you a mentor who truly made
        a difference in her life. Whatever your line of work, we are
        confident a mentor has been encouraging you or pointing the way
        if you do it effectively.`}
       
        imgSrc={"/assets/life-mentor.svg"}
      />
      <div className="bg-white">
        <div className=" px-10 md:px-20 lg:px-[5rem] xl:px-[12rem] py-20">
          <MentorComponent />
        </div>
      </div>
    </>
  );
}

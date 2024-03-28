import PopularGigs from "../Components/PopularGigs";
import SkillsHero from "../Components/SkillsHero";
import SkillsPopularHeader from "../Components/SkillsPopularHeader";
import ExploreCard from "../Components/ExploreCard";
import { Text } from "@/components/ui/Typography/Typography";
import RelatedArticles from "../Components/RelatedArticles";
import Accordion from "@/components/AccordionComponent/Accordion";
import Card from "@/components/Cards/Card";
import DigitalReality from "@/components/DigitalReality/DigitalReality";
import SkillsNavbarLayout from "../layout";

const graphicsSkills = [
  {
    src: "/assets/logo-brand-identity.png",
    title: "Python Developers",
  },
  {
    src: "/assets/visual-design.png",
    title: "HTML & CSS Developers",
  },
  {
    src: "/assets/web-app-design.png",
    title: "Website Platforms",
  },
  {
    src: "/assets/Art_illustration.png",
    title: "Cloud Computing",
  },
  {
    src: "/assets/marketing-design.png",
    title: "Cybersecurity",
  },
  {
    src: "/assets/marketing-design.png",
    title: "Javascript",
  },
];

const softwareDevment = [
  "Web Applications",
  "Desktop Applications",
  "APIs & Integrations",
  "Scripting",
  "Browser Extensions",
];

const softwareDevs = [
  "Python Developers",
  "HTML & CSS Developer",
  "Javascript Developers",
  "Java Developers",
  "PHP Developers",
];

const websitePlatforms = [
  "Wordpress",
  "Shopify",
  "Wix",
  "Custom Websites",
  "Go Daddy",
];

const mobileAppsDev = [
  "Andriod Developers",
  "Cross-Platform Apps",
  "Apps Customization",
  "Bug Fixes",
];
const gameDev = [
  "PC Games",
  "Mobile Games",
  "Console Games",
  "VR Games",
  "Game Mods",
];
export default function ProgrammingTech() {
  return (
    <SkillsNavbarLayout id={0} href={""} link={""} isCaret={false}>
      <SkillsHero
        bgColor="bg-[#290D43]"
        leadingText="Programming & Tech"
        text="Who is your girl?"
        buttonPresent
        imgSrc="/assets/tech.png"
      />
      <div className="px-10 lg:px-[5rem]">
        <SkillsPopularHeader
          prefixText="Most popular in"
          skillsText="Programming & Tech"
          textColor="!text-[#A2A2A2]"
        />
        <div className="lg:flex gap-5 w-full flex-wrap pb-5">
          {graphicsSkills.map((skill, index) => (
            <PopularGigs key={index} src={skill.src} title={skill.title} />
          ))}
        </div>
        <SkillsPopularHeader
          prefixText="Explore"
          skillsText="Programming & Tech"
        />
        <div className="grid lg:grid-cols-3 gap-10">
          <ExploreCard
            cardImg="/assets/sw-dm.png"
            title="Software Development"
            fontColor="primary"
          >
            {softwareDevment.map((skill, index) => (
              <Text variant="small" key={index} className="py-2">
                {skill}
              </Text>
            ))}
          </ExploreCard>
          <ExploreCard
            cardImg="/assets/sw-dps.png"
            title="Software Developers"
            fontColor="primary"
          >
            {softwareDevs.map((skill, index) => (
              <Text variant="small" key={index} className="py-2">
                {skill}
              </Text>
            ))}
          </ExploreCard>
          <ExploreCard
            cardImg="/assets/ws-pfs.png"
            title="Website Platforms"
            fontColor="primary"
          >
            {websitePlatforms.map((skill, index) => (
              <Text variant="small" key={index} className="py-2">
                {skill}
              </Text>
            ))}
          </ExploreCard>
          <ExploreCard
            cardImg="/assets/ma-dm.png"
            title="Website Platforms"
            fontColor="primary"
          >
            {mobileAppsDev.map((skill, index) => (
              <Text variant="small" key={index} className="py-2">
                {skill}
              </Text>
            ))}
          </ExploreCard>
          <ExploreCard
            cardImg="/assets/g-dm.png"
            title="Website Platforms"
            fontColor="primary"
          >
            {gameDev.map((skill, index) => (
              <Text variant="small" key={index} className="py-2">
                {skill}
              </Text>
            ))}
          </ExploreCard>
        </div>
      </div>
      <div className="py-20">
        <RelatedArticles />
      </div>
      <div>
        <div className="text-center">
          <Text className="text-black">Graphics & Design FAQs</Text>
        </div>
        <Accordion />
      </div>
      <div className="px-[5rem] py-20 bg-white">
        <Text className="text-black">Recommended for you</Text>
        <div className="grid grid-cols-4 gap-5 py-5">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div>
        <DigitalReality backgroundColor="bg-[#290D43]" placeholder={""} />
      </div>
    </SkillsNavbarLayout>
  );
}

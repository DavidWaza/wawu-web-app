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
    title: "Logo & Brand identity",
  },
  {
    src: "/assets/visual-design.png",
    title: "Visual Design",
  },
  {
    src: "/assets/web-app-design.png",
    title: "Web & App Design",
  },
  //   {
  //     src: "/assets/Art_illustration.png",
  //     title: "Art Illustration",
  //   },
  {
    src: "/assets/marketing-design.png",
    title: "Marketing Design",
  },
];

const visualSkills = [
  "Image Editing",
  "Presentation Design",
  "Background Removal",
  "Infographic Design",
  "Resume Design",
];

const artSkills = [
  "Illustrations",
  "AI Artists",
  "Childrens Book Illustrations",
  "Portraits & Caricature",
  "Cartoons & Comics",
  "Pattern Design",
  "Tatoo Design",
];

const marketing = [
  "Social Media Design",
  "Social Posts & Banners",
  "Email Design",
  "Web Design",
  "Web Banners",
  "Signage Design",
];
export default function GraphicsAndDesign() {
  return (
    <SkillsNavbarLayout id={0} href={""} link={""} isCaret={false}>
      <SkillsHero
        bgColor="bg-[#290D43]"
        leadingText="Graphics & Design"
        text="Who is your girl?"
        buttonPresent
        imgSrc="/assets/graphics-girl.png"
      />
      <div className="px-10 lg:px-[5rem]">
        <SkillsPopularHeader
          prefixText="Most popular in"
          skillsText="Graphics & Design"
          textColor="!text-[#A2A2A2]"
        />
        <div className="lg:flex gap-5 w-full flex-wrap pb-5">
          {graphicsSkills.map((skill, index) => (
            <PopularGigs key={index} src={skill.src} title={skill.title} />
          ))}
        </div>
        <SkillsPopularHeader
          prefixText="Explore"
          skillsText="Graphics & Design"
        />
        <div className="grid lg:grid-cols-3 gap-10">
          <ExploreCard
            cardImg="/assets/design-card-1.png"
            title="Visual Design"
            fontColor="primary"
          >
            {visualSkills.map((skill, index) => (
              <Text variant="small" key={index} className="py-2">
                {skill}
              </Text>
            ))}
          </ExploreCard>
          <ExploreCard
            cardImg="/assets/design-card-3.png"
            title="Art & Illustration"
            fontColor="primary"
          >
            {artSkills.map((skill, index) => (
              <Text variant="small" key={index} className="py-2">
                {skill}
              </Text>
            ))}
          </ExploreCard>
          <ExploreCard
            cardImg="/assets/design-card-2.png"
            title="Marketing Design"
            fontColor="primary"
          >
            {marketing.map((skill, index) => (
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
          <Card name="your name"/>
          <Card name="your name"/>
          <Card name="your name"/>
          <Card name="your name"/>
        </div>
      </div>
      <div>
        <DigitalReality backgroundColor="bg-[#290D43]" placeholder={""} />
      </div>
    </SkillsNavbarLayout>
  );
}

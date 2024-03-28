import SkillsNavbarLayout from "../layout";
import SkillsHero from "../Components/SkillsHero";
import SkillsPopularHeader from "../Components/SkillsPopularHeader";
import ExploreCard from "../Components/ExploreCard";
import RelatedArticles from "../Components/RelatedArticles";
import Accordion from "@/components/AccordionComponent/Accordion";
import Card from "@/components/Cards/Card";
import DigitalReality from "@/components/DigitalReality/DigitalReality";
import { Text } from "@/components/ui/Typography/Typography";
import PopularGigs from "../Components/PopularGigs";

export default function DigitalMarketing() {
  const marketSkills = [
    {
      src: "/assets/logo-brand-identity.png",
      title: "SEO optimization",
    },
    {
      src: "/assets/visual-design.png",
      title: "Social Media",
    },
    {
      src: "/assets/web-app-design.png",
      title: "Analytics Strategy",
    },
    {
      src: "/assets/Art_illustration.png",
      title: "Web Analytics",
    },
    {
      src: "/assets/marketing-design.png",
      title: "Music Promotions",
    },
  ];

  const search = [
    "Search Engine Optimization (SEOs)",
    "Search Engine Marketing",
    "Local SEOs",
    "E-Commerce SEOs",
    "Video SEOs",
  ];

  const industryPurpose = [
    "Music Promotion",
    "Podcast Marketing",
    "Book & eBook Marketing",
    "Mobile Marketing",
  ];

  const social = [
    "Social Media Marketing",
    "Paid Social Media",
    "Influencer Marketing",
    "Community Management",
  ];

  const analytics = ["Marketing Strategy", "Marketing Advice", "Web Analytics"];
  const methodTechniques = [
    "Video marketing",
    "E-Commerce Marketing",
    "Email Marketing",
    "Guest Post",
    "Affiliate Marketing",
    "Display Advertisment",
    "Public Relations",
    "Text Message Marketing",
  ];

  const miscellanous = ["Crowdfunding", "Other"];

  return (
    <div>
      <SkillsNavbarLayout id={0} href={""} link={""} isCaret={false}>
        <SkillsHero
          bgColor="bg-[#A812E3]"
          leadingText="Digital Marketing"
          text="Who is your girl?"
          buttonPresent
          imgSrc="/assets/digital.png"
        />
        <div className="px-10 lg:px-[5rem]">
          <SkillsPopularHeader
            prefixText="Most popular in"
            skillsText="Digital Marketing"
            textColor="!text-[#A2A2A2]"
          />
          <div className="lg:flex gap-5 w-full flex-wrap pb-5">
            {marketSkills.map((skill, index) => (
              <PopularGigs key={index} src={skill.src} title={skill.title} />
            ))}
          </div>
          <SkillsPopularHeader
            prefixText="Explore"
            skillsText="Digital Marketing"
          />
          <div className="grid lg:grid-cols-3 gap-10">
            <ExploreCard
              cardImg="/assets/search.png"
              title="Search"
              fontColor="primary"
            >
              {search.map((skill, index) => (
                <Text variant="small" key={index} className="py-2">
                  {skill}
                </Text>
              ))}
            </ExploreCard>
            <ExploreCard
              cardImg="/assets/industry.png"
              title="Industry & Purpose-Specific"
              fontColor="primary"
            >
              {industryPurpose.map((skill, index) => (
                <Text variant="small" key={index} className="py-2">
                  {skill}
                </Text>
              ))}
            </ExploreCard>
            <ExploreCard
              cardImg="/assets/social.png"
              title="Social"
              fontColor="primary"
            >
              {social.map((skill, index) => (
                <Text variant="small" key={index} className="py-2">
                  {skill}
                </Text>
              ))}
            </ExploreCard>
            <ExploreCard
              cardImg="/assets/analytics.png"
              title="Analytics & Strategy"
              fontColor="primary"
            >
              {analytics.map((skill, index) => (
                <Text variant="small" key={index} className="py-2">
                  {skill}
                </Text>
              ))}
            </ExploreCard>
            <ExploreCard
              cardImg="/assets/method.png"
              title="Method & Techniques"
              fontColor="primary"
            >
              {methodTechniques.map((skill, index) => (
                <Text variant="small" key={index} className="py-2">
                  {skill}
                </Text>
              ))}
            </ExploreCard>
            <ExploreCard
              cardImg="/assets/misc.png"
              title="Miscellanous"
              fontColor="primary"
            >
              {miscellanous.map((skill, index) => (
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
            <Text className="text-black">Digital marketing FAQs</Text>
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
    </div>
  );
}

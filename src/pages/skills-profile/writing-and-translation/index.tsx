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

export default function WritingAndTranslation() {
  const writingSkills = [
    {
      src: "/assets/logo-brand-identity.png",
      title: "Content Writing",
    },
    {
      src: "/assets/visual-design.png",
      title: "Editing Critique",
    },
    {
      src: "/assets/web-app-design.png",
      title: "Career Writing",
    },
    {
      src: "/assets/Art_illustration.png",
      title: "Marketing Copy",
    },
    {
      src: "/assets/marketing-design.png",
      title: "Transcription",
    },
  ];

  const contentWriting = [
    "Article & Blog Posts",
    "Content Strategy",
    "Book and eBook Writing",
    "Website Content",
    "Scripting",
    "Creative Writing",
    "Podcast Writing",
    "Speechwriting",
    "Research & Summaries",
    "Custom Writing Prompts",
  ];

  const businessCopy = [
    "Brand Voice & Tone",
    "Business names and slogan",
    "Case Studies",
    "White Papers",
    "Product description",
    "ad copy",
    "sales copy",
    "email copy",
    "social media copy",
    "press release",
    "UX writing",
  ];

  const editingCritque = [
    "proofreading & editing",
    "AI content editing",
    "book editing",
    "beta editing",
    "writing advice",
  ];

  const careerWriting = [
    "resume writing",
    "cover letters",
    "linkedin profiles",
    "job descriptions",
  ];
  const translations = ["translation", "localization", "transcription"];

  const miscellanous = [
    "e-learning content development",
    "technical writing",
    "grant writing",
    "other",
  ];

  return (
    <div>
      <SkillsNavbarLayout id={0} href={""} link={""} isCaret={false}>
        <SkillsHero
          bgColor="bg-[#F497C6]"
          leadingText="Writing and Translation"
          text="Who is your girl?"
          buttonPresent
          imgSrc="/assets/writing-girl.png"
        />
        <div className="px-10 lg:px-[5rem]">
          <SkillsPopularHeader
            prefixText="Most popular in"
            skillsText="Writing and Translation"
            textColor="!text-[#A2A2A2]"
          />
          <div className="lg:flex gap-5 w-full flex-wrap pb-5">
            {writingSkills.map((skill, index) => (
              <PopularGigs key={index} src={skill.src} title={skill.title} />
            ))}
          </div>
          <SkillsPopularHeader
            prefixText="Explore"
            skillsText="Writing and Translation"
          />
          <div className="grid lg:grid-cols-3 gap-10">
            <ExploreCard
              cardImg="/assets/search.png"
              title="Content Writing"
              fontColor="primary"
            >
              {contentWriting.map((skill, index) => (
                <Text variant="small" key={index} className="py-2 capitalize">
                  {skill}
                </Text>
              ))}
            </ExploreCard>
            <ExploreCard
              cardImg="/assets/industry.png"
              title="Business & Marketing Copy"
              fontColor="primary"
            >
              {businessCopy.map((skill, index) => (
                <Text variant="small" key={index} className="py-2 capitalize">
                  {skill}
                </Text>
              ))}
            </ExploreCard>
            <ExploreCard
              cardImg="/assets/social.png"
              title="Editing & critique"
              fontColor="primary"
            >
              {editingCritque.map((skill, index) => (
                <Text variant="small" key={index} className="py-2 capitalize">
                  {skill}
                </Text>
              ))}
            </ExploreCard>
            <ExploreCard
              cardImg="/assets/analytics.png"
              title="career writing"
              fontColor="primary"
            >
              {careerWriting.map((skill, index) => (
                <Text variant="small" key={index} className="py-2 capitalize">
                  {skill}
                </Text>
              ))}
            </ExploreCard>
            <ExploreCard
              cardImg="/assets/method.png"
              title="translation 7 transcription"
              fontColor="primary"
            >
              {translations.map((skill, index) => (
                <Text variant="small" key={index} className="py-2 capitalize">
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
                <Text variant="small" key={index} className="py-2 capitalize">
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

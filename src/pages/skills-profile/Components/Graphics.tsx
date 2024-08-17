import React from "react";
import PopularGigs from "../Components/PopularGigs";
import SkillsHero from "../Components/SkillsHero";
import SkillsPopularHeader from "../Components/SkillsPopularHeader";
import ExploreCard from "../Components/ExploreCard";
import {
  artSkills,
  graphicsSkills,
  marketing,
  visualSkills,
} from "@/pages/categories/Data/Data";
import { Text } from "@/components/ui/Typography/Typography";

const Graphics = () => {
  return (
    <div>
      <div className="">
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
    </div>
  );
};

export default Graphics;

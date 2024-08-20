import React from "react";
import SkillsPopularHeader from "../Components/SkillsPopularHeader";
import ExploreCard from "../Components/ExploreCard";
import PopularGigs from "../Components/PopularGigs";
import {
  gameDev,
  graphicsSkills,
  mobileAppsDev,
  softwareDevment,
  softwareDevs,
  websitePlatforms,
} from "../../../../utilities/Data/Data";
import { Text } from "@/components/ui/Typography/Typography";

const Programing = () => {
  return (
    <div>
      <div>
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
    </div>
  );
};

export default Programing;

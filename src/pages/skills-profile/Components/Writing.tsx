import React from "react";
import SkillsPopularHeader from "../Components/SkillsPopularHeader";
import ExploreCard from "../Components/ExploreCard";
import { Text } from "@/components/ui/Typography/Typography";
import PopularGigs from "../Components/PopularGigs";
import {
  businessCopy,
  careerWriting,
  contentWriting,
  editingCritque,
  miscellanous,
  translations,
  writingSkills,
} from "@/pages/categories/Data/Data";

const Writing = () => {
  return (
    <div>
      <div>
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
    </div>
  );
};

export default Writing;

import React from 'react'
import SkillsPopularHeader from "../Components/SkillsPopularHeader";
import ExploreCard from "../Components/ExploreCard";
import PopularGigs from "../Components/PopularGigs";
import { analytics, industryPurpose, marketSkills, methodTechniques, search, social } from '@/pages/categories/Data/Data';
import { Text } from "@/components/ui/Typography/Typography";


const DigitalMarket = () => {
  return (
    <div>
        <div className="">
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
          
          </div>
        </div>
    </div>
  )
}

export default DigitalMarket
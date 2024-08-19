import axiosInstance from "@/pages/api/axiosInstance";
import { fetch_buyers_feed } from "@/pages/api/endpoints";
import React, { useEffect, useState } from "react";

interface Skill {
  name: string;
  bgColor: string;
}

interface CategorySkills {
  [category: string]: Skill[];
}

const SkillsSection: React.FC = () => {
  const [userSkills, setUserSkills] = useState<CategorySkills>({});

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    try {
      const response = await axiosInstance.get(fetch_buyers_feed);
      const fetchedCategories = response.data.data || [];

      const randomColor = (): string => {
        const colors = [
          "bg-[#F7ABD1]",
          "bg-[#D66FFF]",
          "bg-[#FFDF8E]",
          "bg-[#8EFFA7]",
          "bg-[#FF8E8E]",
          "bg-[#8EDDFF]",
          "bg-[#000]",
        ];
        return colors[Math.floor(Math.random() * colors.length)];
      };

      // Map categories to their respective skills
      const mappedSkills = fetchedCategories.reduce(
        (acc: CategorySkills, category: Record<string, any>) => {
          const categoryKey = Object.keys(category)[0];
          const skills = category[categoryKey];
          console.log('shh', skills)

          if (skills && skills.length > 0) {
            const mappedCategorySkills = skills.map((skill: { name: string }) => ({
              name: skill.name,
              bgColor: randomColor(),
            }));
            acc[categoryKey] = mappedCategorySkills;
          }

          return acc;
        },
        {}
      );

      setUserSkills(mappedSkills);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="w-full">
      <p className="text-black text-lg py-10">Skills</p>
      {Object.keys(userSkills).map((category, idx) => (
        <div key={idx}>
          <h2 className="text-xl font-bold py-3">{category}</h2>
          <div className="grid grid-cols-1 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 gap-3">
            {userSkills[category].map((skill, index) => (
              <div
                key={index}
                className={`rounded-xl p-3 ${skill.bgColor} text-sm whitespace-normal ${
                  skill.bgColor === "bg-[#000]" ? "text-white" : "text-black"
                }`}
              >
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsSection;

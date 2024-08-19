import React, { useEffect, useState, useCallback } from "react";
import axiosInstance from "@/pages/api/axiosInstance";
import { fetch_buyers_feed } from "@/pages/api/endpoints";

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

  const fetchSkills = useCallback(async () => {
    try {
      const response = await axiosInstance.get(fetch_buyers_feed);
      const categories = response.data.data;

      const skillsByCategory: CategorySkills = {};

      Object.entries(categories).forEach(([category, items]) => {
        if (Array.isArray(items) && items.length > 0) {
          const { additionalInfo } = items[0];
          
          if (additionalInfo?.skills) {
            skillsByCategory[category] = additionalInfo.skills.map((skill: any) => ({
              name: skill.name,
              bgColor: getRandomBgColor(),
            }));
          }
        }
      });

      setUserSkills(skillsByCategory);
    } catch (err) {
      console.error("Error fetching skills:", err);
    }
  }, []);

  const getRandomBgColor = useCallback((): string => {
    const colors = [
      "bg-red-500", "bg-green-500", "bg-blue-500", "bg-yellow-500",
      "bg-purple-500", "bg-pink-500", "bg-indigo-500", "bg-teal-500",
      "bg-orange-500", "bg-cyan-500", "bg-lime-500", "bg-amber-500",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }, []);

  return (
    <div className="w-full">
      <p className="text-black text-lg pt-10">Skills</p>
      {Object.entries(userSkills).map(([category, skills], idx) => (
        <div key={idx}>
          <div className="grid grid-cols-1 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 py-3 gap-3">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`rounded-xl p-3 ${skill.bgColor} text-lg whitespace-normal ${
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

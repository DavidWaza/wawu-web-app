import axiosInstance from "@/pages/api/axiosInstance";
import { fetch_user_profile } from "@/pages/api/endpoints";
import React, { useEffect, useState } from "react";

interface Skill {
  bgColor: string;
  label: string;
  name:string;
}

const SkillsSection = () => {
  const [userSkills, setUserSkills] = useState<Skill[]>([]);

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    try {
      const response = await axiosInstance.get(fetch_user_profile);
      console.log("skills", response.data.data.skills || []);
      const fetchedSkills = response.data.data.skills || [];

      const randomColor = () => {
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

      const mappedSkills = fetchedSkills.map((skill: { label: string }) => ({
        label: skill.label,
        bgColor: randomColor(),
      }));

      setUserSkills(mappedSkills);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="space-x-4 space-y-4 flex flex-wrap items-center w-full">
      <p className="text-black text-lg py-10">Skills</p>
      {userSkills.map((skill, index) => (
        <div
          className={`rounded-xl p-3 ${
            skill.bgColor
          } text-black text-sm whitespace-normal ${
            skill.bgColor === "bg-[#000]" ? "text-white" : "text-black"
          }`}
          key={index}
        >
          {skill.name}
        </div>
      ))}
    </div>
  );
};

export default SkillsSection;

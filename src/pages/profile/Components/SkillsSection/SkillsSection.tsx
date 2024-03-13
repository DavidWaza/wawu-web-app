import React from "react";

const skills = [
  {
    bgColor: "bg-[#F7ABD1]",
    label: "Typing",
  },
  {
    bgColor: "bg-[#D66FFF]",
    label: "Graphic Designer",
  },
  {
    bgColor: "bg-[#FFDF8E]",
    label: "Blog",
  },
  {
    bgColor: "bg-[#8EFFA7]",
    label: "UI/UX",
  },
  {
    bgColor: "bg-[#FF8E8E]",
    label: "SEO",
  },
  {
    bgColor: "bg-[#8EDDFF]",
    label: "Bootstrap",
  },
  {
    bgColor: "bg-[#D66FFF]",
    label: "Chrome extension designer",
  },
  {
    bgColor: "bg-[#000]",
    label: "Artificial Intelligence",
  },
  {
    bgColor: "bg-[#FFDF8E]",
    label: "Blog",
  },
  {
    bgColor: "bg-[#8EFFA7]",
    label: "UI/UX",
  },
  {
    bgColor: "bg-[#FF8E8E]",
    label: "SEO",
  },
  {
    bgColor: "bg-[#EDEDED]",
    label: "10+",
  },
];
const SkillsSection = () => {
  return (
    <div className="space-x-4 space-y-4 flex flex-wrap items-center w-full">
      {skills.map((skill, index) => (
        <div
          className={`rounded-xl p-3 ${
            skill.bgColor
          } text-black text-sm whitespace-normal ${
            skill.bgColor === "bg-[#000]" ? "text-white" : "text-black"
          }`}
          key={index}
        >
          {skill.label}
        </div>
      ))}
    </div>
  );
};

export default SkillsSection;

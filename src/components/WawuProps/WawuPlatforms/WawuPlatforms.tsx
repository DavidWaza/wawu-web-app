import React from "react";
import { Text } from "@/components/ui/Typography/Typography";

const platforms = [
  {
    iconSrc: "/icons/paper-plane.svg",
    alt: "paper plain",
    title: "Stewards",
    desc: `   Leaving no one behind as we set out on this amazing journey building
        sustainable businesses, creating employment opportunities and becoming
        effective, efficient and transformative stewards.`,
  },
  {
    iconSrc: "/icons/light-bulb.svg",
    alt: "light bulb",
    title: "Mentorship",
    desc: `The NextGen community of stewards, incubators, builders, creators, and leaders`,
  },
  {
    iconSrc: "/icons/pie-chart.svg",
    alt: "pie chart",
    title: "Patrons",
    desc: `Savy Startups, Industry Leaders, Movers + Shakers, Innovators, Great Partnerships, Daring Disruptors, all Start here .`,
  },
];

const WawuPlatforms = () => {
  return (
    <>
      {platforms.map((platform) => (
        <>
          <div className="2xl:flex gap-5 mt-10">
            <img
              src={platform.iconSrc}
              alt={platform.alt}
              className="w-10 h-auto mb-2 -mt-5 "
            />
            <div>
              <Text variant="small" textWeight="semi-bold">
                {platform.title}
              </Text>
              <Text variant="small">{platform.desc}</Text>
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default WawuPlatforms;

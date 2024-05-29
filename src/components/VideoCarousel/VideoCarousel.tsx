import React from "react";
import { Heading, Text } from "../ui/Typography/Typography";
import { IoCheckmark } from "react-icons/io5";
import ReactPlayer from "react-player";

const perks = [
  {
    icon: <IoCheckmark />,
    perk: "Enterprise-grade security",
  },
  {
    icon: <IoCheckmark />,
    perk: "99.9% guaranteed uptime SLA",
  },
  {
    icon: <IoCheckmark />,
    perk: "Designated customer success team",
  },
];
const VideoCarousel = () => {
  return (
    <div className="grid 2xl:grid-cols-2 lg:px-[5rem]">
      <div className="bg-[#471471]">
        <ReactPlayer url="https://youtu.be/L8c3PGSjMIs?si=0I-2FZVN_sEkaFgE" />
      </div>
      <div className="flex py-20 2xl:gap-5 flex-col">
        <Heading variant="medium" fontColor="primary">
          Video Title
        </Heading>
        <div className="flex-col mt-5">
          <Text variant="small" className="text-[#F7ABD1]">
            Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna
            vulputate pellentesque a diam tincidunt. Aenean malesuada tellus
            tellus faucibus mauris quisque mauris in.
          </Text>
          <ul className="mt-3">
            {perks.map(({ icon, perk }) => (
              <li
                className="flex gap-2 items-center text-white mb-2 mt-2"
                key={perk}
              >
                {icon}
                <p className="text-[#F7ABD1] mb-0">{perk}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VideoCarousel;

"use client";
import React from "react";
import { Heading, Text } from "../ui/Typography/Typography";
import ReactPlayer from "react-player";
import { Check } from "lucide-react";

const perks = [
  {
    perk: "Excellence, Integrity, Equity, Scalability & Sustainability",
  },
  {
    perk: "Women Inclusion & Empowerment",
  },
  {
    perk: "99.9% service delivery guaranteed",
  },
];
const NextSlideVideoCarousel = () => {
  return (
    <div className="grid 2xl:grid-cols-2 gap-10 lg:px-[5rem]">
      <div className="bg-[#471471]">
        <ReactPlayer
          url="https://youtu.be/JZagrGUUEM0?si=ZGTW9-mNFu0CtJQp"
          width={`100%`}
        />
      </div>
      <div className="flex 2xl:gap-5 flex-col">
        <Heading variant="medium" fontColor="primary">
          Wawu Jingle
        </Heading>
        <div className="flex-col mt-5">
          <Text variant="small" className="text-[#F7ABD1] !leading-[24px]">
            By nature, we are incubators, creators, caretakers, protectors &
            preservers. We are everything that’s required to serve enterprises
            through cutting-edge digital solutions & experiences. Stewards who
            observe ongoing trends and analyze upcoming technologies to
            transform the digital persona of clients with our unbeatable
            performance. Wawu Technology believes in a world where access to
            knowledge, innovation and business opportunities are based on
            interest and ability, not gender. We do everything to make women
            feel included, seen and compensated no matter where we call home, so
            they can live decently, live their dreams and support their
            families back home.
          </Text>
          <div className="mt-3">
            {perks.map(({ perk }) => (
              <div
                className="flex gap-2 items-center text-white "
                key={perk}
              >
                <Check size={15} />
                <p className="text-[#F7ABD1] !text-[16px] leading-[21px] mb-0">{perk}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextSlideVideoCarousel;

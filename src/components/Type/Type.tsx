import React from "react";
import Section from "../ui/Section/Section";
import { TypeWriter } from "../Typewriter/Typewriter";
import { Text } from "../ui/Typography/Typography";

const Type = () => {
  return (
    <div className="bg-[#F7ABD1]">
      <Section>
        <Text variant="medium" className="sora text-black">
          {" "}
          Who is your Girl?
        </Text>
        <TypeWriter />
        <div className="flex mt-5 gap-5">
          <Text className="text-black">Start Here </Text>
          <div className=" rounded-full p-1 w-1 mt-3 bg-[#730C99] text-transparent"></div>
        </div>
      </Section>
    </div>
  );
};

export default Type;

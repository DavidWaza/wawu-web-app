import React from "react";
import { TypeWriter } from "../Typewriter/Typewriter";
import { Text } from "../ui/Typography/Typography";

const Type = () => {
  return (
    <div className="bg-[#F7ABD1] py-20 lg:px-[6rem] px-5">
      <Text variant="medium" className="sora text-black !font-semibold">
        {" "}
        Who is your Girl?
      </Text>
      <TypeWriter />
      <div className="flex pt-6 gap-1">
        <Text className="text-black">Start Here</Text>
        <div className="rounded-full w-2 h-2 mt-3 bg-[#730C99] text-transparent"></div>
      </div>
    </div>
  );
};

export default Type;

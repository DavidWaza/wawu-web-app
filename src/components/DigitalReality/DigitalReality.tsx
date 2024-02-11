import React from "react";
import Section from "../ui/Section/Section";
import { Text } from "../ui/Typography/Typography";
import Button from "../ui/Button/Button";

interface DigitalProps {
  backgrondColor: string,
  textColor?:string
}
const DigitalReality = (props:DigitalProps) => {
  return (
    <div className={`${props.backgrondColor}`}>
      <Section>
        <div className="grid 2xl:grid-cols-2">
          <div className="block">
            <Text variant="medium" className={`2xl:text-left text-center ${props.textColor}`}>
              Welcome to your new digital reality that will <br /> rock your
              world.
            </Text>
            <Text variant="small" className="text-[#ED459A] mt-8 2xl:text-left text-center">
              Welcome to a digital solution that improves women&aposs life and
              means of subsistence through formal and informal
              income-generating opportunities.
            </Text>
          </div>
          <div>
            <div className=" flex justify-center items-center mt-[3rem]">
              <input
                placeholder="Search for anything"
                className="py-2 px-3 rounded-r-none rounded-md w-1/2 border"
              />
              <Button
                variant="primary"
                className="rounded-l-none p-2 border-none"
              >
                {" "}
                Search
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default DigitalReality;

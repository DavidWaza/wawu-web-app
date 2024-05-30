import React from "react";
import Section from "../ui/Section/Section";
import { Text } from "../ui/Typography/Typography";
import Button from "../ui/Button/Button";

interface DigitalProps {
  backgroundColor: string,
  textColor?:string,
  borderColor?:string,
  submitText?:string,
  placeholder:string,
}
const DigitalReality = (props:DigitalProps) => {
  return (
    <div className={`${props.backgroundColor} py-10`}>
      <Section>
        <div className="grid 2xl:grid-cols-2">
          <div className="block">
            <Text variant="medium" className={`${props.textColor}`}>
              Welcome to your new digital reality that will rock your
              world.
            </Text>
            <Text variant="small" className="text-[#ED459A] mt-8 ">
              Welcome to a digital solution that improves women&apos;s lives and
              means of subsistence through formal and informal
              income-generating opportunities.
            </Text>
          </div>
          <div>
            <div className=" flex justify-center items-center lg:mt-[3rem] mt-10">
              <input
                placeholder={props.placeholder}
                className={`py-2 px-3 rounded-r-none rounded-md w-1/2 border text-black ${props.borderColor}`}
              />
              <Button
                variant="primary"
                className="rounded-l-none p-[10px] border-none"
              >
                {" "}
               {props.submitText}
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default DigitalReality;

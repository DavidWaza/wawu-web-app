import React from "react";
import Section from "../ui/Section/Section";
import { Text } from "../ui/Typography/Typography";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
interface DigitalProps {
  backgroundColor: string;
  textColor?: string;
  borderColor?: string;
  submitText?: string;
  placeholder: string;
}
const DigitalReality = (props: DigitalProps) => {
  return (
    <div className={`${props.backgroundColor} py-[7rem] px-10 lg:px-[5rem] sora`}>
      <div className="grid 2xl:grid-cols-2 gap-5 lg:gap-10">
        <div className="block">
          <Text variant="medium" className={`${props.textColor}`}>
            Welcome to your new digital reality that will rock your world.
          </Text>
          <Text variant="small" className="text-[#ED459A] mt-8 ">
            Welcome to a digital solution that improves women&apos;s lives and
            means of subsistence through formal and informal
            income-generating opportunities.
          </Text>
        </div>
        <div>
          <div className=" lg:mt-[3rem] mt-10">
            <div className="flex w-full items-center space-x-2">
              <Input type="email" placeholder="Enter your email" />
              <Button type="submit" className="bg-[#ED459A]">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalReality;

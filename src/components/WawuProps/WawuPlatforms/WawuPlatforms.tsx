import React from "react";
import { Text } from "@/components/ui/Typography/Typography";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

interface PlatFormProps {
  iconSrc: string;
  alt: string;
  title: string;
  desc: string;
  link?: string;
}

const WawuPlatforms = (props: PlatFormProps) => {
  return (
    <>
      <div className="2xl:flex gap-5 mt-10">
        <img
          src={props.iconSrc}
          alt={props.alt}
          className="w-10 h-auto mb-2 -mt-5 "
        />
        <div>
          <Text variant="small" textWeight="semi-bold">
            {props.title}
          </Text>
          <Text variant="small">{props.desc}</Text>
          {props.link && (
            <div className="flex gap-4 items-center mt-5">
              <Text variant="small">
                <Link href={""} className="!text-[#ED459A]">{props.link}</Link>
              </Text>
              <GoArrowRight className="text-[#ED459A]" />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default WawuPlatforms;

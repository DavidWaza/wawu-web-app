import React from "react";
import { Text } from "@/components/ui/Typography/Typography";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import Image from "next/image";

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
      <div className="lg:flex items-start gap-5 mt-10 space-y-2">
        <Image
          src={props.iconSrc}
          alt={props.alt}
          width={0}
          height={0}
          sizes="100vw"
          className="w-10 h-auto"
        />
        <div>
          <Text variant="small" textWeight="semi-bold">
            {props.title}
          </Text>
          <Text variant="small" className="leading-[30px]">
            {props.desc}
          </Text>
          {props.link && (
            <div className="flex gap-2 items-center mt-1 leading-[22px]">
              <Text variant="small">
                <Link href={""} className="!text-[#ED459A]">
                  {props.link}
                </Link>
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

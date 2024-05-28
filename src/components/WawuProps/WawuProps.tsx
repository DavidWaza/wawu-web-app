import React from "react";
import { Heading, Text } from "../ui/Typography/Typography";
import Image from "next/image";
import Button from "../ui/Button/Button";
import Section from "../ui/Section/Section";
import { platforms } from "@/data/portfolioData";
import WawuPlatforms from "./WawuPlatforms/WawuPlatforms";

const WawuPropsComponent = () => {
  return (
    <>
      <Section>
        <Heading variant="medium" fontColor="secondary">
          Wawu Props
        </Heading>
        <Text variant="small" className="mt-3 leading-[30px]">
          Aggregating a diverse pool of women spearheads, professionals for
          patrons or businesses so they <br />
          can find the right stewards for their projects or digital assignments
          on a single trusted platform.
        </Text>
        <div className="py-10">
          <div className="grid lg:grid-cols-2">
            <div>
              {platforms.map((platform, index) => (
                <div key={index}>
                  <WawuPlatforms
                    iconSrc={platform.iconSrc}
                    alt={platform.alt}
                    title={platform.title}
                    desc={platform.desc}
                  />
                </div>
              ))}
              <div className="flex 2xl:justify-start justify-center">
                <Button variant="tertiary" className="mt-20 py-2" size="medium">
                  Get Started
                </Button>
              </div>
            </div>
            <div className="flex justify-center items-center py-10 md:py-0">
              <Image
                src="/assets/globe-girl.svg"
                alt="girl-with-earth"
                width={0}
                height={0}
                sizes="10vw"
                className="w-full md:w-[70%] h-auto object-contain object-center"
              />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};
export default WawuPropsComponent;

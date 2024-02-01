import React from "react";
import { Heading, Text } from "../ui/Typography/Typography";
import Image from "next/image";

export const WawuProps = () => {
  return (
    <>
      <div className="2xl:text-justify">
        <Heading variant="medium" fontColor="secondary">
          Wawu Props
        </Heading>
        <Text variant="small">
          Aggregating a diverse pool of women spearheads, professionals for
          patrons or businesses so they can find the right stewards for their
          projects or digital assignments on a single trusted platform.
        </Text>
      </div>
    </>
  );
};

import React, { FC } from "react";

interface sectionProps {
  children: React.ReactNode;
  className?: string;
}

const Section = ({ children }: sectionProps) => {
  return (
    <>
      <section className="py-[4rem] px-[3rem]">{children}</section>
    </>
  );
};
export default Section;

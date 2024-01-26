import React, { FC } from "react";

interface sectionProps {
  children: React.ReactNode;
  className?: string;
}

const Section = ({ children }: sectionProps) => {
  return (
    <>
      <div className="py-[4rem]">{children}</div>
    </>
  );
};
export default Section;

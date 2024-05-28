import React, { FC } from "react";

interface sectionProps {
  children: React.ReactNode;
  className?: string;
}

const Section = ({ children }: sectionProps) => {
  return (
    <>
      <section className="lg:px-[13rem] md:px-[9rem] px-10 py-10 md:py-20">
        {children}
      </section>
    </>
  );
};
export default Section;

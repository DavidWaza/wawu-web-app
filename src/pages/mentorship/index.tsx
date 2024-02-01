import React from "react";
import Section from "@/components/ui/Section/Section";
import HeroComponent from "@/components/HeroComponent/HeroComponent";


export default function Mentorship() {
  return (
    <>
      <HeroComponent
        backgroundColor="bg-[#471471]"
        header="Mentorship"
        secondaryText="The NextGen community of stewards, incubators, builders,
                creators, and leaders."
        subText={`Show me a good steward, and Ill show you a mentor who truly made
        a difference in her life. Whatever your line of work, were
        confident a mentor has been encouraging you or pointing the way
        if you do it effectively.`}
        buttonText="Sign In"
      />
      <div className="bg-white">
        <Section>
          <div></div>
        </Section>
      </div>
    </>
  );
}

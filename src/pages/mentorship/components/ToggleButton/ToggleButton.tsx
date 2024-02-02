import { MouseEventHandler } from "react";
import React, { useState } from "react";
import { Text } from "@/components/ui/Typography/Typography";
import Section from "@/components/ui/Section/Section";
import Forms from "@/components/Forms/Forms";

interface toggleButtonProps {
  label: string;
  active: boolean;
  onToggle: () => void;
}

const ToggleButton = ({ label, active, onToggle }: toggleButtonProps) => {
  return (
    <button
      className={`${active ? "bg-[#ED459A]" : "bg-[#290D43]"} py-2 px-10 `}
      onClick={onToggle}
    >
      {label}
    </button>
  );
};

const ButtonComponent = () => {
  const [mentor, setMentor] = useState({ toggle: false, active: true });
  const [mentee, setMentee] = useState({ toggle: false, active: false });

  const handleToggle = (type: string) => {
    if (type === "mentor") {
      setMentor({
        toggle: !mentor.toggle,
        active: !mentor.active,
      });
      setMentee({
        toggle: false,
        active: false,
      });
    } else if (type === "mentee") {
      setMentee({
        toggle: !mentee.toggle,
        active: !mentee.active,
      });
      setMentor({
        toggle: false,
        active: false,
      });
    }
  };

  return (
    <div>
      <Text variant="medium" className="text-black my-2 sora">
        {!mentee.active ? "Mentor" : "Mentee"}
      </Text>
      <Text variant="small" className="text-black my-2 sora">
        interested to be a {!mentee.active ? "mentor" : "mentee"}
      </Text>
      <ToggleButton
        label="Mentor"
        active={mentor.active}
        onToggle={() => handleToggle("mentor")}
      />
      <ToggleButton
        label="Mentee"
        active={mentee.active}
        onToggle={() => handleToggle("mentee")}
      />
      <div className="mt-20">
        {mentor.active ? (
          <Text variant="medium" className="text-black">
            Mentor Application Form - {mentor.active ? "Mentor" : "Mentee"}
          </Text>
        ) : (
          <Text variant="medium" className="text-black">
            Mentee Application Form - {mentor.active ? "Mentor" : "Mentee"}
          </Text>
        )}
        <Text variant="small" className="text-black mt-4">
          {mentor.active
            ? `Thank you for applying to be a mentor. Please see the mentoring guideline document for further information. The information contained on the completed form is confidential and will not be shared with any persons other than the Mentorship Committee. We request that you complete this form as fully as possible. The information you provide will help us to match you with a mentee that has development/learning needs that most closely meet your experience and skills`
            : `Thank you for applying to be on the WAWU mentoring scheme. This form will help us match you with a mentor that has the experience and skills that match your interests, career goals and developmental needs.
If you have any questions regarding the mentoring programme or the application process please do not hesitate to contact Laura Puiggalí (puiggali@wawu.ngo).`}
        </Text>
      </div>
      <Section>
        <div className="grid 2xl:grid-cols-2 justify-center">
          {mentor.active ? <Forms /> : <div>Hello</div>}
        </div>
      </Section>
    </div>
  );
};
export default ButtonComponent;

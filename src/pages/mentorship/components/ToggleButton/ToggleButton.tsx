import { MouseEventHandler } from "react";
import React, { useState } from "react";
import { Text } from "@/components/ui/Typography/Typography";
import Section from "@/components/ui/Section/Section";
import Forms from "@/components/Forms/MentorForms/Forms";
import MenteeForms from "@/components/Forms/MenteeForms/Forms";

interface toggleButtonProps {
  label: string;
  active: boolean;
  onToggle: () => void;
  className?: string;
}

const ToggleButton = ({ label, active, onToggle }: toggleButtonProps) => {
  return (
    <button
      className={`${
        active ? "bg-[#ED459A]" : "bg-[#290D43]"
      } py-2 px-10  text-white`}
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
        toggle: true,
        active: !mentor.active,
      });
      setMentee({
        toggle: false,
        active: false,
      });
    } else if (type === "mentee") {
      setMentee({
        toggle: true,
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
        {!mentee.active
          ? "Interested in being a Mentor?"
          : "Do you want to be mentored?"}
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
If you have any questions regarding the mentoring programme or the application process please do not hesitate to contact wawu customer support`}
        </Text>
      </div>
      <div className="grid 2xl:grid-cols-2">
        {mentor.active ? (
          <Forms />
        ) : (
          <div>
            <MenteeForms />
          </div>
        )}
      </div>
    </div>
  );
};
export default ButtonComponent;

import React from "react";
import { Text } from "@/components/ui/Typography/Typography";
import { FC, ReactNode } from "react";

interface SkillsPopularheaderprops {
  prefixText?: string;
  skillsText: string;
  suffixText?: string;
  textColor?: string;
}
const SkillsPopularHeader: FC<SkillsPopularheaderprops> = ({
  prefixText,
  skillsText,
  suffixText,
  textColor = 'text-black'
}) => {
  return (
    <div className="my-12">
      <Text variant="medium" className={`${textColor}`}>
        {prefixText} {skillsText} {suffixText}
      </Text>
    </div>
  );
};

export default SkillsPopularHeader;

import { FC, ReactNode } from "react";
import Button from "@/components/ui/Button/Button";
import { Text } from "@/components/ui/Typography/Typography";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface SkillsHeroProps {
  bgColor: string;
  leadingText: string;
  text: string;
  buttonPresent: boolean;
  imgSrc: string;
  //   children: ReactNode;
}
const SkillsHero: FC<SkillsHeroProps> = ({
  bgColor,
  leadingText,
  text,
  buttonPresent,
  imgSrc,
}) => {

  const pathname = usePathname()
  return (
    <div className="px-0 lg:px-[5rem]">
      <div
        className={`${bgColor} px-20 rounded-none lg:rounded-md  lg:flex justify-between items-center`}
      >
        <div className="space-y-4">
          <Text variant="medium">{leadingText}</Text>
          <Text variant="small" className="text-white">
            {text}
          </Text>
          {buttonPresent && (
            <Button
              size="small"
              suffix={<FaArrowRightLong />}
              className="border-none p-2 my-4"
              
              // {pathname.includes('/skills-profile/digital-marketing') ? variant}
            >
              Start now
            </Button>
          )}
        </div>
        <div>
          <Image
            src={imgSrc}
            alt=""
            width={500}
            height={500}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};
export default SkillsHero;

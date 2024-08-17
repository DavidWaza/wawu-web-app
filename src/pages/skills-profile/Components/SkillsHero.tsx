import { FC } from "react";
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
}

const SkillsHero: FC<SkillsHeroProps> = ({
  bgColor,
  leadingText,
  text,
  buttonPresent,
  imgSrc,
}) => {
  const pathname = usePathname();
  return (
    <div className="px-0 lg:px-[5rem]">
      <div
        className={`${bgColor} px-20 rounded-none lg:rounded-md lg:flex justify-between items-center`}
      >
        <div className="space-y-4 flex flex-col justify-center items-center lg:items-start text-center lg:text-left py-[28px]">
          <p className="text-[35px] lg:text-[40px] text-white font-bold sora">
            {leadingText}
          </p>
          <Text variant="small" className="text-white !text-[24px]">
            {text}
          </Text>
          {buttonPresent && (
            <div className="py-5 flex justify-center lg:justify-end">
              <Button
                size="small"
                suffix={<FaArrowRightLong />}
                className="border-none p-2 my-4"
              >
                Start now
              </Button>
            </div>
          )}
        </div>
        <div className="mt-5 lg:mt-0">
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

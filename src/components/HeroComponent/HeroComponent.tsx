import { Heading, Text } from "@/components/ui/Typography/Typography";
import Button from "@/components/ui/Button/Button";
import Image from "next/image";

interface HeroComponentProps {
  header: string;
  secondaryText?: string;
  subText: string;
  buttonText: string;
  backgroundColor: string;
  imgSrc: any;
  link?: string;
}

const HeroComponent = (props: HeroComponentProps) => {
  return (
    <>
      <div className={`${props.backgroundColor}`}>
        <div className="grid md:grid-cols-2 px-5 md:px-20 lg:px-[5rem] xl:px-[12rem] h-1/2">
          <div className="flex flex-col justify-center mb-5 py-10">
            <p className="text-[30px] lg:text-[52px] font-bold text-white lg:leading-[50px] lg:w-[85%]">
              {props.header}
            </p>
            <Text
              variant="largeText"
              className=" text-[#FF0084] mt-[20px] md:leading-[45px] lg:leading-[30px]"
            >
              {props.secondaryText}
            </Text>
            <Text variant="small" className="text-[#fff]  my-4 leading-[20px]">
              {props.subText}
            </Text>
            <div className="pt-5">
              <Button
                size="medium"
                className="p-2 border-none gap-1 w-1/2 text-sm font-normal"
                href={props.link}
              >
                {props.buttonText}
              </Button>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Image
              className="w-full d-block h-auto"
              width={0}
              height={0}
              sizes="100vw"
              src={props.imgSrc}
              alt="slide 2"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default HeroComponent;

import { Heading, Text } from "@/components/ui/Typography/Typography";
import Button from "@/components/ui/Button/Button";
import Section from "../ui/Section/Section";
import Container from "../Container/Container";
import { FaAngleRight } from "react-icons/fa";
import Image from "next/image";

interface HeroComponentProps {
  header: string;
  secondaryText?: string;
  subText: string;
  buttonText: string;
  backgroundColor: string;
  imgSrc: any;
}

const HeroComponent = (props: HeroComponentProps) => {
  return (
    <>
      <div className={`${props.backgroundColor}`}>
        <div className="grid md:grid-cols-2 px-5 md:px-20 lg:px-[5rem] xl:px-[12rem]">
          <div className=" lg:mt-[23%] pt-20 md:py-20 mb-5">
            <Heading variant="large" fontColor="primary">
              {props.header}
            </Heading>
            <Text
              variant="largeText"
              className=" text-[#FF0084] mt-[20px] md:leading-[45px] lg:leading-[30px]"
            >
              {props.secondaryText}
            </Text>
            <Text variant="small" className="text-[#fff]  my-4 leading-[30px]">
              {props.subText}
            </Text>
            <Button
              size="large"
              className="p-2 border-none flex items-center justify-center gap-1 text-center"
            >
              {props.buttonText}
              {<FaAngleRight /> && <FaAngleRight />}
            </Button>
          </div>
          <div className="flex justify-center items-center">
            <Image
              className="w-full mt-24 md:mt-[10rem] lg:mt-[14rem] d-block h-auto"
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

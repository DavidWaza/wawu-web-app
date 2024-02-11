import { Heading, Text } from "@/components/ui/Typography/Typography";
import Button from "@/components/ui/Button/Button";
import Section from "../ui/Section/Section";
import Container from "../Container/Container";
import { FaAngleRight } from "react-icons/fa";

interface HeroComponentProps {
  header: string;
  secondaryText?: string;
  subText: string;
  buttonText: string;
  backgroundColor: string;
  src: string;
}

const HeroComponent = (props: HeroComponentProps) => {
  return (
    <div className={`${props.backgroundColor}`}>
      <Container>
        <div className="grid 2xl:grid-cols-2 ">
          <div className=" 2xl:mt-[23%] w-full  2xl:py-0">
            <Heading variant="large" fontColor="primary">
              {props.header}
            </Heading>
            <Text
              variant="largeText"
              className=" text-[#FF0084] 2xl:leading-[45px] capitalize "
            >
              {props.secondaryText}
            </Text>
            <Text
              variant="extrasmall"
              className="text-[#fff] leading-6 my-4 lowercase"
            >
              {props.subText}
            </Text>
            <Button
              size="large"
              className="p-2 border-none my-5 flex items-center justify-center gap-1 text-center"
            >
              {props.buttonText}
              {<FaAngleRight /> && <FaAngleRight />}
            </Button>
          </div>
          <div className="hidden 2xl:flex justify-center items-center mt-[60px]">
            <img
              className="d-block w-[70%] h-auto p-5"
              src={`/assets/${props.src}`}
              alt="slide 2"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};
export default HeroComponent;

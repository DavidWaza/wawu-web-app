import Button from "@/components/ui/Button/Button";
import { Heading, Text } from "@/components/ui/Typography/Typography";
import Header from "../buyers/Components/Header/Header";
import AddAccordion from "@/components/AccordionComponent/AddAccordion";

const FaqEdit = () => {
  return (
    <div>
      <Header />
      <div className="p-20">
        <div className="">
          <Button size="large" className="p-3" icon="left">
            Back to profile
          </Button>
        </div>
        <div className="">
          <div className=" justify-start text-center">
            <Heading fontColor="secondary" variant="medium" className="w-full">
              Frequently Asked Question
            </Heading>
            <Text className="text-black my-5" variant="base">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
              repellendus praesentium quae pariatur reiciendis veritatis quas et
              quis voluptates rem dolores totam exercitationem ullam, suscipit
              vel! Fuga ducimus id architecto!
            </Text>
          </div>
        </div>
        <div>
          <div className="my-10">
            <AddAccordion />
          </div>
          <div className="flex justify-center my-10">
            <Button className="p-2 lg:w-[30rem]">Save</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FaqEdit;

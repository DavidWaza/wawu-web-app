
import { Heading, Text } from "@/components/ui/Typography/Typography";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import LayoutProfile from "../profile/layout";

const FAQ = () => {
  return (
    <LayoutProfile>
      <div className="bg-white">
        <div className="text-center py-10">
          <Heading variant="medium" fontColor="secondary">
            Frequently Asked Questions
          </Heading>
          <div className="px-10">
            <Text variant="small" className="pt-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been <br />
              the industrys standard dummy text ever since the 1500s,
            </Text>
          </div>
        </div>
        <div className="lg:px-32">
          <Accordion type="single" collapsible className="bg-[#290D43] rounded-lg px-5">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-white">Is it accessible?</AccordionTrigger>
              <AccordionContent className="text-white">
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </LayoutProfile>
  );
};
export default FAQ;

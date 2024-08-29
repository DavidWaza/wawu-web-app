"use client";
import { Heading, Text } from "@/components/ui/Typography/Typography";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import LayoutProfile from "../profile/layout";
import { faqInfo } from "@/data/faqData";

const FAQ = () => {
  return (
    <LayoutProfile>
      <div className="bg-white">
        <div className="text-center py-10">
          <Heading variant="medium" fontColor="secondary">
            Frequently Asked Questions
          </Heading>
        </div>
        <div className="lg:px-32">
          <Accordion type="single" collapsible className="bg-[#290D43] rounded-lg px-5">
            {faqInfo.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-white">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-white">
                  <Text className="whitespace-pre-line !font-normal !text-sm" >
                    {item.answer.split("\n").map((line, idx) => (
                      <div key={idx}>
                        {idx > 0 && <br />} {/* Add a line break between lines */}
                        {line.startsWith("1.") || line.startsWith("2.") || line.startsWith("3.") || line.startsWith("4.") ? (
                          <span className="block">{line}</span>
                        ) : (
                          <span>{line}</span>
                        )}
                      </div>
                    ))}
                  </Text>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </LayoutProfile>
  );
};

export default FAQ;

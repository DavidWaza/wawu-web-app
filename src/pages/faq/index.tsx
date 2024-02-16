"use client";
import Accordion from "@/components/AccordionComponent/Accordion";
import AnitaCard from "@/components/Cards/AnitaCard";
import { Heading, Text } from "@/components/ui/Typography/Typography";
import { usePathname } from "next/navigation";


const FAQ = () => {
  const pathname = usePathname();

  return (
    <div className="bg-white py-4">
      <div className="text-center py-10">
        <Heading variant="medium" fontColor="secondary">
          Frequently Asked Questions
        </Heading>
        {/* <Text variant="small" className="text-black">current path: {pathname}</Text> */}
        <Text variant="small" className="pt-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been <br />
          the industrys standard dummy text ever since the 1500s,
        </Text>
      </div>
      <div>
        <Accordion />
      </div>

     
    </div>
  );
};
export default FAQ;

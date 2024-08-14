import { Text } from "@/components/ui/Typography/Typography";
import Link from "next/link";
import React from "react";

const AboutSection = () => {
  return (
    <div className="py-4">
      <Text className="text-black !sora !text-[16px]" variant="small">
        Hi, I&apos;m a certified Shopify Developer and Partner having 6 years+
        experience! I&apos;m on the mission to empower 10,000 entrepreneurs to
        become successful with their ecommerce business. Designing and
        Development of Shopify Dropshipping Stores is my passion and I do my
        work with full dedication making my clients satisfied over years.
      </Text>
      {/* <Link href={"#"}>
        <span className="flex gap-3 text-[#FF0084] items-center group my-4">
          Read more <FaArrowRight className="group-hover:animate-bounce" />
        </span>
      </Link> */}
    </div>
  );
};

export default AboutSection;

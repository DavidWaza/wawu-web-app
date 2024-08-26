import { Heading, Text } from "@/components/ui/Typography/Typography";
const AboutCompany = () => {
  return (
    <>
      <div className="w-full text-left">
        <Heading variant="medium" fontColor="secondary">
          Welcome to Wawu Technology Home of the Best Girl Tech Spearheads
        </Heading>
        <Text
          variant="small"
          className="text-black 2xl:w-full mt-3 leading-[25px] md:leading-[30px] sora"
        >
          Wawu Africa, inspired by the exclamation WOW aspires to be the premier
          global work platform for female professionals, artisans, and
          exceptional female technology leaders. Recognizing women&apos;s
          inherent qualities as nurturers, innovators, and protectors, our
          mission is to create economic opportunities that empower women to
          build brighter futures. We facilitate connections between businesses
          and talented individuals, fostering an environment where women can
          realize their full potential.
        </Text>
      </div>
    </>
  );
};
export default AboutCompany;

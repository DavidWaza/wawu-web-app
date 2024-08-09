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
          Wawu Africa from the word (Wow) is an offspring of Kudimata is working
          to become the world&apos;s work marketplace for women professionals,
          artisans and the Best Girl Tech Spearheads connecting businesses and
          talent to unlock their potential. By nature, women are stewards,
          incubators, creators, caretakers, Protectors & Preservers. Our mission
          is to create economic opportunities for women to have brighter
          futures. As a result, we are working to be the marketplace where any
          woman from around the globe meets to accomplish incredible things.
        </Text>
      </div>
    </>
  );
};
export default AboutCompany;

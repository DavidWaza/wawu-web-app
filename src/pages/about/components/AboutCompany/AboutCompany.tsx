import { Heading, Text } from "@/components/ui/Typography/Typography";
const AboutCompany = () => {
  return (
    <>
      <div className="w-full text-center 2xl:text-left">
        <Heading variant="medium" fontColor="secondary">
          Welcome to Wawu Technology Home of the Best Girl Tech Spearheads
        </Heading>
        <Text variant="small" className="text-black 2xl:w-3/4 mt-3">
          By nature, we are incubators, creators, caretakers, Protectors &
          Preservers. We are everything that’s required to serve enterprises
          through cutting edge digital solutions & experiences. Stewards that
          observe ongoing trends and analyze upcoming technologies to transform
          the digital persona of clients with our unbeatable performance. Wawu
          Technology believes in a world where access to knowledge, innovation
          and business opportunities are based on interest and ability, not
          gender. We do everything to make them feel included, seen and
          compensated, no matter where we call home so they can live decently
          live their dreams and support their families back home.
        </Text>
      </div>
    </>
  );
};
export default AboutCompany;

import { Heading, Text } from "@/components/ui/Typography/Typography";
const AboutCompany = () => {
  return (
    <>
      <div className="w-full text-center 2xl:text-left">
        <Heading variant="medium" fontColor="secondary">
          Welcome to Wawu Technology Home of the Best Girl Tech Spearheads
        </Heading>
        <Text variant="small" className="text-black 2xl:w-full mt-3 leading-8 text-xl tracking-wider">
          By nature, we are incubators, creators, caretakers, protectors &
          preservers. We are everything that’s required to serve enterprises
          through cutting edge digital solutions & experiences. <br />Stewards that
          observe ongoing trends and analyze upcoming technologies to transform
          the digital persona of clients with our unbeatable performance. <br />Wawu
          Technology believes in a world where access to knowledge, innovation
          and business opportunities are based on interest and ability, not
          gender. <br />We do everything to make women feel included, seen and
          compensated no matter where we call home, so they can live decently,
          live their dreams and support their families back home.
        </Text>
      </div>
    </>
  );
};
export default AboutCompany;

import Hero from "@/components/Header/Hero/Hero";
import Section from "@/components/ui/Section/Section";
import { Heading, Text } from "@/components/ui/Typography/Typography";

const AboutUs = () => {
  return (
    <>
      <Hero />
      <div className="bg-white">
        <Section>
          <div className="grid 2xl:grid-cols-2 gap-4 2xl:gap-0 items-center">
            <div className="flex justify-center items-center">
              <img src="/assets/ceo.png" alt="the ceo" className="" />
            </div>
            <div className="w-full">
              <Heading variant="medium" fontColor="secondary">
                Welcome to Wawu Technology Home of the Best Girl Tech Spearheads
              </Heading>
              <Text variant="small" className="text-black 2xl:w-3/4">
                By nature, we are incubators, creators, caretakers, Protectors &
                Preservers. We are everything that’s required to serve
                enterprises through cutting edge digital solutions &
                experiences. Stewards that observe ongoing trends and analyze
                upcoming technologies to transform the digital persona of
                clients with our unbeatable performance. Wawu Technology
                believes in a world where access to knowledge, innovation and
                business opportunities are based on interest and ability, not
                gender. We do everything to make them feel included, seen and
                compensated, no matter where we call home so they can live
                decently live their dreams and support their families back home.
              </Text>
            </div>
          </div>
        </Section>
      </div>
    </>
  );
};
export default AboutUs;

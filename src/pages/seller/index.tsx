import Adverts from "@/components/Adverts/Adverts";
import Navbar from "@/components/Header/Navbar/Navbar";
import HeroComponent from "@/components/HeroComponent/HeroComponent";
import WawuPlatforms from "@/components/WawuProps/WawuPlatforms/WawuPlatforms";
import Section from "@/components/ui/Section/Section";
import { Heading, Text } from "@/components/ui/Typography/Typography";
import Button from "@/components/ui/Button/Button";
import Accordion from "@/components/AccordionComponent/Accordion";
import DigitalReality from "@/components/DigitalReality/DigitalReality";
import Image from "next/image";

const professions = [
  "I am a developer",
  "I am a designer",
  "I am a Virtual Artist",
  "I am into Web3",
];

const ProductFeatures = [
  {
    iconSrc: "/icons/paper-plane.svg",
    alt: "paper plain",
    title: "FreeLancers",
    desc: `Engage audience segments finally create actionable insights. Amplify vertical integration.`,
  },
  {
    iconSrc: "/icons/light-bulb.svg",
    alt: "light bulb",
    title: "Institution",
    desc: `Engage audience segments finally create actionable insights. Amplify vertical integration.`,
  },
  {
    iconSrc: "/icons/pie-chart.svg",
    alt: "pie chart",
    title: "Client",
    desc: `Engage audience segments finally create actionable insights. Amplify vertical integration.`,
  },
];
const Seller = () => {
  return (
    <div>
      <Navbar id={0} href={""} link={""} isCaret={false} />
      <HeroComponent
        header="Showcase your Skills. Get a Patron"
        subText="Give us this day, our daily food. We bring the food: You use your spoon"
        buttonText="Become a seller"
        backgroundColor="bg-[#A812E3]"
        src="/artisan.png"
      />
      <div className="bg-white">
        <div className="py-10">
          <Text variant="medium" className="text-center text-black">
            Join our growing steward’s community
          </Text>
          <div className="flex justify-center gap-4 mt-10">
            {professions.map((profession, index) => (
              <div key={index} className="block">
                <img src={"/assets/photo-girl.png"} alt="photo-girl" />
                <Text
                  variant="small"
                  textWeight="bold"
                  className="text-black text-center my-2 capitalize"
                >
                  {profession}
                </Text>
              </div>
            ))}
          </div>
          <div className="bg-white">
            <Adverts />
            <Section>
              <Heading variant="medium" fontColor="secondary">
                Redefining Product Features
              </Heading>
              <Text variant="small" className="leading-6 mt-5">
                Keeping your eye on the ball while performing a deep dive on the
                start-up mentality to drive <br /> convergence
              </Text>
              <div className="grid lg:grid-cols-2">
                <div className="block">
                  {ProductFeatures.map((product, index) => (
                    <>
                      <div key={index}>
                        <WawuPlatforms
                          iconSrc={product.iconSrc}
                          alt={product.alt}
                          title={product.title}
                          desc={product.desc}
                          link="Learn more"
                        />
                      </div>
                    </>
                  ))}
                  <Button size="large" variant="tertiary">
                    Get Started
                  </Button>
                </div>
                <div className="flex justify-center items-center">
                  <Image
                    src="/assets/additional-service.png"
                    alt="right girl"
                    className="lg:w-3/4"
                    width={400}
                    height={400}
                  />
                </div>
              </div>
            </Section>
            <div className="bg-[#ECECEC] py-10">
              <Text variant="large" className="text-black text-center pt-7">
                Seller FAQs
              </Text>
              <Accordion />
            </div>
            <div className="bg-[#290D43] py-10">
              <Section>
                <Text variant="small" className="text-center text-white">
                  blog
                </Text>
              </Section>
            </div>
            <div className="">
              <Section>
                <DigitalReality
                  backgroundColor="bg-white"
                  textColor="text-black"
                  borderColor="border-[#ED459A]"
                />
              </Section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Seller;

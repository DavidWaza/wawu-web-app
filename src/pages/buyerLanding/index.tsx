import Adverts from "@/components/Adverts/Adverts";
import Navbar from "@/components/Header/Navbar/Navbar";
import HeroComponent from "@/components/HeroComponent/HeroComponent";
import WawuPlatforms from "@/components/WawuProps/WawuPlatforms/WawuPlatforms";
import Section from "@/components/ui/Section/Section";
import { Heading, Text } from "@/components/ui/Typography/Typography";
import Button from "@/components/ui/Button/Button";
import Accordion from "@/components/AccordionComponent/Accordion";
import DigitalReality from "@/components/DigitalReality/DigitalReality";
import MobileNavbar from "@/components/Header/Navbar/MobileNavbar";
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
const BuyerLandingComponent = () => {
  return (
    <div>
      <div className="hidden lg:block">
        <Navbar id={0} link="" href="" isCaret />
      </div>
      <div className="block lg:hidden">
        <MobileNavbar />
      </div>
      <HeroComponent
        header="We bring the work to you"
        subText="Give us this day, our daily food. We bring the food: You use your spoon"
        buttonText="Become a buyer"
        backgroundColor="bg-[#A812E3]"
        imgSrc="/assets/hanger-girl.png"
      />
      <div className="bg-white">
        <div className="py-10">
          <Text variant="medium" className="text-center text-black">
            Join our growing steward’s community
          </Text>
          <div className="grid grid-cols-2 md:grid-cols-4 mt-10 px-10 justify-center">
            {professions.map((profession, index) => (
              <div key={index} className="block">
                <Image
                  src={`/assets/photo-girl.png`}
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-[80%] m-auto h-auto object-contain object-center"
                />
                <Text
                  variant="small"
                  textWeight="semi-bold"
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
                start-up mentality to drive convergence
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
                  <img
                    src="/assets/laptop-girl.png"
                    alt="right girl"
                    className="lg:w-3/4"
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
                  placeholder={""}
                  submitText="Get Started"
                />
              </Section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BuyerLandingComponent;

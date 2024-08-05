import Adverts from "@/components/Adverts/Adverts";
import Navbar from "@/components/Header/Navbar/Navbar";
import HeroComponent from "@/components/HeroComponent/HeroComponent";
import WawuPlatforms from "@/components/WawuProps/WawuPlatforms/WawuPlatforms";
import Section from "@/components/ui/Section/Section";
import { Heading, Text } from "@/components/ui/Typography/Typography";
import Button from "@/components/ui/Button/Button";
// import Accordion from "@/components/AccordionComponent/Accordion";
import DigitalReality from "@/components/DigitalReality/DigitalReality";
import Image from "next/image";
import MobileNavbar from "@/components/Header/Navbar/MobileNavbar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
      <div className="hidden md:block">
        <Navbar id={0} href={""} link={""} isCaret={false} />
      </div>
      <div className="block md:hidden">
        <MobileNavbar />
      </div>
      <HeroComponent
        header="Showcase your Skills. Get a Patron"
        subText="Give us this day, our daily food. We bring the food: You use your spoon"
        buttonText="Become a seller"
        backgroundColor="bg-[#A812E3]"
        imgSrc="/assets/g1.svg"
      />
      <div className="bg-white">
        <div className="py-10">
          <Text variant="medium" className="text-center text-black">
            Join our growing steward’s community
          </Text>
          <div className="lg:px-[8rem] px-10 grid lg:grid-cols-4  gap-5 lg:gap-20 my-10">
            {professions.map((profession, index) => (
              <div key={index} className="block">
                <Image
                  src={"/assets/steward-girl.svg"}
                  alt="photo-girl"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto object-contain object-center"
                />
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
            <div className="pb-10">
              <Adverts />
            </div>
            <Section>
              <Heading variant="medium" fontColor="secondary" className="mt-10">
                Redefining Product Features
              </Heading>
              <Text variant="small" className="leading-6 mt-2">
                Keeping your eye on the ball while performing a deep dive on the
                start-up mentality to drive <br /> convergence
              </Text>
              <div className="grid lg:grid-cols-2">
                <div className="block">
                  {ProductFeatures.map((product, index) => (
                    <>
                      <div key={index} className="w-[60%]">
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
                  <div className="py-10">
                    <Button size="small" variant="tertiary">
                      Get Started
                    </Button>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <Image
                    src="/assets/girl-with-box.svg"
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
              <div className="px-10 lg:px-52 py-10">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      What is Graphics designer?
                    </AccordionTrigger>
                    <AccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>
                      How do i top graphics designers?
                    </AccordionTrigger>
                    <AccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
            <div className="bg-[#290D43] py-10">
              <Section>
                <Text variant="small" className="text-center text-white">
                  blog
                </Text>
              </Section>
            </div>
            <div className="">
              <DigitalReality
                backgroundColor="bg-white"
                textColor="text-black"
                borderColor="border-[#ED459A]"
                submitText="Submit"
                placeholder={"Enter you email"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Seller;

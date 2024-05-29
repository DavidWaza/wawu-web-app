import Link from "next/link";
import CreatePortfolioSection from "./Components/CreatePortfolioSection/CreatePortfolioSection";
import GigPortfolio from "./Components/GigPortfolio/GigPortfolio";
import Header from "./Components/Header/Header";
import { Heading, Text } from "@/components/ui/Typography/Typography";
import { GoArrowRight } from "react-icons/go";
import RecentSearch from "./Components/RecentSearch/RecentSearch";
import Section from "@/components/ui/Section/Section";
import Card from "@/components/Cards/Card";
import Adverts from "@/components/Adverts/Adverts";

const Buyers = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div>
      <Header />
      <GigPortfolio />
      <div className="bg-white px-[2rem] 2xl:p-[5rem] py-10">
        <Text variant="medium" className="text-black">
          Nice to see you, Mavis
        </Text>
        <CreatePortfolioSection />
        <div className="mt-20 flex justify-between">
          <div className="block">
            <Text variant="small" className="text-black" textWeight="bold">
              Based on your recent search
            </Text>
            <Text variant="tiny" className="text-black">
              Here are the basic tools you need
            </Text>
          </div>
          <div className="flex gap-2 items-center hover:translate-x-3 transition-all ease-in">
            <Text variant="small" className="underline">
              <Link href={"#"}>See All</Link>
            </Text>
            <GoArrowRight className="text-[#ED459A]" />
          </div>
        </div>
        <div className="mt-20" />
        <RecentSearch src={""} title={""} index={0} />
        <div className="mt-32">
          <Heading variant="medium" fontColor="secondary">
            {" "}
            Most popular Gigs in{" "}
            <span className="text-[#9510c9]">Software Development</span>
          </Heading>
          <div {...settings}>
            <div className="grid grid-cols-1 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 gap-3 mt-3">
              <div>
                <Card />
              </div>
              <div>
                <Card />
              </div>
              <div>
                <Card />
              </div>
              <div>
                <Card />
              </div>
            </div>
          </div>
        </div>

        {/* GIGS YOU MAY LIKE */}
        <div className="mt-32">
          <Heading variant="medium" fontColor="secondary">
            {" "}
            Gigs you may like{" "}
          </Heading>
          <div {...settings}>
            <div className="grid grid-cols-1 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 gap-3 mt-3">
              <div>
                <Card />
              </div>
              <div>
                <Card />
              </div>
              <div>
                <Card />
              </div>
              <div>
                <Card />
              </div>
            </div>
          </div>
        </div>

        {/* VIDEO AND ANIMATION */}
        <div className="mt-32">
          <Heading variant="medium" fontColor="secondary">
            {" "}
            Most popular Gigs in{" "}
            <span className="text-[#9510c9]">Video & Animation</span>
          </Heading>
          <div {...settings}>
            <div className="grid grid-cols-1 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 gap-3 mt-3">
              <div>
                <Card />
              </div>
              <div>
                <Card />
              </div>
              <div>
                <Card />
              </div>
              <div>
                <Card />
              </div>
            </div>
          </div>
        </div>
        <div>
          <Adverts />
        </div>
        <div className="bg-white">
          <Section>
            <div className="flex justify-center items-center align-middle">
              {" "}
              blog posts
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
};
export default Buyers;

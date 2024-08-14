import { useEffect, useState } from "react";
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
import axiosInstance from "../api/axiosInstance";
import { fetch_buyers_feed, fetch_user_profile } from "../api/endpoints";
import { toast } from "sonner";
import { ServiceCategoryData } from "../../../types/Types";

const Sellers = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  const [userProfileName, setUserProfileName] = useState([]);
  const [fetchFeed, setFetchFeed] = useState<ServiceCategoryData | null>(null);

  useEffect(() => {
    fetchUserProfile();
    fetchUserFeeds()
  }, []);

  const fetchUserProfile = async () => {
    try {
      const response = await axiosInstance.get(fetch_user_profile);
      setUserProfileName(response.data.data.firstName);
    } catch (err: any) {
      if (err.response) {
        toast.error(err.response.data.message);
      }
    }
  };


  const fetchUserFeeds = async () => {
    try {
      const response = await axiosInstance.get(fetch_buyers_feed);
      console.log("feeds", Object.keys(response.data.data));
      setFetchFeed(response.data.data);
    } catch (err: any) {
      if (err.response) {
        toast.error(err.response.data.message);
      }
    }
  };

  return (
    <div>
      <Header />
      <GigPortfolio />
      <div className="bg-white px-[2rem] 2xl:p-[5rem] py-10">
        <Text variant="medium" className="text-black sora">
          Nice to see you, {userProfileName}
        </Text>
        <CreatePortfolioSection />
        <div className="mt-20 mb-10 flex justify-between">
          <div className="block">
            <Text variant="base" className="text-black sora" textWeight="bold">
              Based on your recent search
            </Text>
            <Text variant="extrasmall" className="text-black sora">
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
        <RecentSearch src={""} title={""} index={0} />
        {fetchFeed &&
          Object.keys(fetchFeed).map((category) => (
            <div key={category}>
              <div className="mt-32">
                <Heading
                  variant="medium"
                  fontColor="secondary"
                  className="sora"
                >
                  {" "}
                  Most popular Gigs in{" "}
                  <span className="text-[#9510c9] sora">{category}</span>
                </Heading>
                <div {...settings}>
                  <div className="grid grid-cols-1 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 gap-3 mt-3">
                    {fetchFeed[category].map((item) => (
                      <>
                        <div>
                          <Link href={"/sellers/seller-profile"}>
                            <Card name={item.name} />
                          </Link>
                        </div>
                      </>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default Sellers;

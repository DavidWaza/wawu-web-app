import { useEffect, useState } from "react";
import Link from "next/link";
import Card from "@/components/Cards/Card";
import axiosInstance from "../api/axiosInstance";
import { fetch_buyers_feed, fetch_user_profile } from "../api/endpoints";
import { toast } from "sonner";
import { Heading, Text } from "@/components/ui/Typography/Typography";
import CreatePortfolioSection from "../sellers/Components/CreatePortfolioSection/CreatePortfolioSection";

import RecentSearch from "../sellers/Components/RecentSearch/RecentSearch";
import GigPortfolio from "../sellers/Components/GigPortfolio/GigPortfolio";
import { ServiceCategoryData } from "../../../types/Types";
import Header from "../sellers/Components/Header/Header";

const Buyers = () => {
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
    fetchUserFeeds();
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
      <div className="hidden lg:block">
        <GigPortfolio />
      </div>
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
          </div>
        </div>
        <RecentSearch src={""} title={""} index={0} />
        {fetchFeed &&
          Object.keys(fetchFeed).map((category) => (
            <div key={category}>
              <div className="mt-32">
                
                <div {...settings}>
                  {fetchFeed &&
                    Object.keys(fetchFeed).map((category) => {
                      const items = fetchFeed[category];
                      if (items.length > 0) {
                        return (
                          <div key={category} className="mt-32">
                            <Heading
                              variant="medium"
                              fontColor="secondary"
                              className="sora"
                            >
                              Most popular Gigs in{" "}
                              <span className="text-[#9510c9] sora">
                                {category}
                              </span>
                            </Heading>
                            <div className="grid grid-cols-1 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 gap-3 mt-3">
                              {items.map((item) => (
                                <div key={item.uuid}>
                                  <Link
                                    href={`/sellers/seller-profile?name=${item.firstName}&last=${item.lastName}&about=${item.additionalInfo?.about}`}
                                  >
                                    <Card
                                      name={`${item.firstName} ${item.lastName}`}
                                      last={item.lastName}
                                      about={item.additionalInfo?.about}
                                    />
                                  </Link>
                                </div>
                              ))}
                            </div>
                          </div>
                        );
                      }
                      return null;
                    })}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default Buyers;

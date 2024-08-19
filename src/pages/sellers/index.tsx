import { useEffect, useState } from "react";
import Link from "next/link";
import CreatePortfolioSection from "./Components/CreatePortfolioSection/CreatePortfolioSection";
import GigPortfolio from "./Components/GigPortfolio/GigPortfolio";
import Header from "./Components/Header/Header";
import { Heading, Text } from "@/components/ui/Typography/Typography";

import Card from "@/components/Cards/Card";
import axiosInstance from "../api/axiosInstance";
import { fetch_buyers_feed, fetch_user_profile } from "../api/endpoints";
import { toast } from "sonner";
import { ServiceCategoryData } from "../../../types/Types";

const Sellers = () => {
  const [userProfileName, setUserProfileName] = useState<string>("");
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
      console.log("feeds", response.data.data);
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
          Nice to see you,{" "}
          <span className="text-[#F52585] !text-normal italic">
            {userProfileName}.
          </span>
        </Text>
        <CreatePortfolioSection />
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
                    <span className="text-[#9510c9] sora">{category}</span>
                  </Heading>
                  <div className="grid grid-cols-1 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 gap-3 mt-3">
                    {items.map((item) => (
                      <div key={item.uuid}>
                        <Link
                          href={`/sellers/seller-profile?name=${item.firstName}&last=${item.lastName}&about=${item.additionalInfo?.about}`}
                        >
                          <Card
                            name={`${item.firstName} ${item.lastName}`}
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
  );
};

export default Sellers;

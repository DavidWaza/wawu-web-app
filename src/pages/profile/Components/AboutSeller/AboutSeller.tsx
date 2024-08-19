import { Text } from "@/components/ui/Typography/Typography";
import React, { useState, useEffect } from "react";
import UserAvatar from "../UserAvatar/UserAvatar";
import UserDetails from "../UserDetails/UserDetails";
import { IoLocationOutline } from "react-icons/io5";
import { LuBadgeCheck } from "react-icons/lu";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useRouter } from "next/router";
import axiosInstance from "@/pages/api/axiosInstance";
import { fetch_buyers_feed } from "@/pages/api/endpoints";

const AboutSeller = () => {
  const [country, setCountry] = useState(null);
  const [language, setLanguage] = useState(null);

  const router = useRouter();
  const { name, last } = router.query;

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    try {
      const response = await axiosInstance.get(fetch_buyers_feed);
      const categories = response.data.data;
      console.log("lang", response.data.data);

      Object.keys(categories).forEach((category) => {
        const items = categories[category];

        if (items && items.length > 0) {
          const item = items[0];

          if (
            item.additionalInfo &&
            item.additionalInfo.meansOfIdentification
          ) {
            setCountry(item.additionalInfo.meansOfIdentification.country);
          }
          if (item.additionalInfo && item.additionalInfo.preferredLanguage) {
            setLanguage(item.additionalInfo.preferredLanguage);
          }
        }
      });

      if (!country) {
        console.log("Country not found in any category");
      }
      if (!language) {
        console.log("lang not available");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <React.Fragment>
      <div>
        <Text variant="small" textWeight="bold" textColor={"text-black"}>
          About Seller
        </Text>
      </div>
      <React.Fragment>
        <div className="my-3 lg:flex gap-5">
          <div>
            <UserAvatar userActive="offline" />
            <button className="p-3 text-black bg-[#EBEBEB] rounded-lg my-5">
              Contact me
            </button>
          </div>
          <div className="space-y-5">
            <Text variant="small" className="text-black" textWeight="bold">
              {name} {last}
            </Text>
          
            <div className="space-y-3">
              <UserDetails
                prefix={<IoLocationOutline className="text-black" size={20} />}
                suffix={country || "Country not found"}
              />
              <UserDetails
                prefix={<LuBadgeCheck className="text-black" size={20} />}
                suffix="232 orders completed"
              />
              <UserDetails
                prefix={
                  <BiMessageSquareDetail className="text-black" size={20} />
                }
                suffix={language || "No specific language"}
              />
            </div>
          </div>
          <div className="space-y-5">
            <div className="border border-1 border-[#ED459A]  rounded-md my-5 lg:my-0 w-32 p-2">
              <p className="text-black text-center">online</p>
            </div>
            <div className="space-y-3">
              <UserDetails
                prefix={<IoLocationOutline className="text-black" size={20} />}
                suffix="Joined March, 2022"
              />
              <UserDetails
                prefix={<LuBadgeCheck className="text-black" size={20} />}
                suffix={`Pending orders: 4 orders`}
              />
              <UserDetails
                prefix={
                  <BiMessageSquareDetail className="text-black" size={20} />
                }
                suffix="Avg. response time: 1 hour"
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    </React.Fragment>
  );
};

export default AboutSeller;

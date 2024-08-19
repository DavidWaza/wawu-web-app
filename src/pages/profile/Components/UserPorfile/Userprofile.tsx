"use client";
import { useState, useEffect } from "react";
import { Text } from "@/components/ui/Typography/Typography";
import UserDetails from "../UserDetails/UserDetails";
import { IoLocationOutline } from "react-icons/io5";
import { LuBadgeCheck } from "react-icons/lu";
import { BiMessageSquareDetail } from "react-icons/bi";
import UserAvatar from "../UserAvatar/UserAvatar";
import { useRouter } from "next/router";
import axiosInstance from "@/pages/api/axiosInstance";
import { fetch_buyers_feed } from "@/pages/api/endpoints";

const UserProfile = () => {
  const [country, setCountry] = useState(null);
  const [language, setLanguage] = useState(null)
  const router = useRouter();
  const { name, last, about } = router.query;

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    try {
      const response = await axiosInstance.get(fetch_buyers_feed);
      const categories = response.data.data;
      console.log('lang', response.data.data)

      Object.keys(categories).forEach((category) => {
        const items = categories[category];
        
        if (items && items.length > 0) {
          const item = items[0];
          
          if (item.additionalInfo && item.additionalInfo.meansOfIdentification) {
            setCountry(item.additionalInfo.meansOfIdentification.country);
          }
          if(item.additionalInfo && item.additionalInfo.preferredLanguage) {
            setLanguage(item.additionalInfo.preferredLanguage)
          }
        }
      });

      if (!country) {
        console.log('Country not found in any category');
      }
      if (!language) {
        console.log('lang not available')
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="lg:flex gap-5 my-10 items-center">
      <UserAvatar userActive={"online"} />
      <div className="space-y-2">
        {name && last && about && (
          <>
            <Text
              variant="medium"
              className="text-black !font-semibold capitalize !sora"
            >
              {name} {last}
            </Text>
          </>
        )}
        <div className="lg:flex gap-5 py-2 items-center">
          <UserDetails
            prefix={<IoLocationOutline className="text-black" size={20} />}
            suffix={country || 'Country not found'}
          />
          <UserDetails
            prefix={<LuBadgeCheck className="text-black" size={20} />}
            suffix="232 orders completed"
          />
          <UserDetails
            prefix={<BiMessageSquareDetail className="text-black" size={20} />}
            suffix={language || 'No specific language'}
          />
        </div>
        <button className="p-3 text-black bg-[#EBEBEB] rounded-lg sora font-semibold">
          Contact me
        </button>
      </div>
    </div>
  );
};

export default UserProfile;

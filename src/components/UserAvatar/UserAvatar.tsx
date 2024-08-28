import axiosInstance from "@/pages/api/axiosInstance";
import { fetch_user_profile } from "@/pages/api/endpoints";
import { useEffect, useState } from "react";

interface UserAvatarProps {
  onClick?: () => void;
}

const UserAvatar: React.FC<UserAvatarProps> = ({ onClick }) => {
  const [userProfileInitial, setUserProfileInitial] = useState<string>("");

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axiosInstance.get(fetch_user_profile);
        const firstName = response.data.data.firstName;
        setUserProfileInitial(firstName ? firstName.charAt(0) : "");
      } catch (err: any) {
        if (err.response) {
          console.log(err);
        }
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <div onClick={onClick}>
      <div className="rounded-full border h-10 w-10 bg-white border-slate-500 flex items-center justify-center">
        <p className="text-black text-lg sora font-medium">{userProfileInitial}</p>
      </div>
    </div>
  );
};

export default UserAvatar;

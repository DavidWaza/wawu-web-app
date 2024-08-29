import axiosInstance from "@/pages/api/axiosInstance";
import { fetch_user_profile } from "@/pages/api/endpoints";
import { BadgeCheck } from "lucide-react";
import { useEffect, useState } from "react";

interface UserAvatarProps {
  onClick?: () => void;
}

const UserAvatarCard: React.FC<UserAvatarProps> = ({ onClick }) => {
  const [userProfileInitial, setUserProfileInitial] = useState<string>("");

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axiosInstance.get(fetch_user_profile);
        const firstName = response.data.data.firstName || "";
        const lastName = response.data.data.lastName || "";
        // Concatenate the first initials of both first and last name
        const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`;
        setUserProfileInitial(initials);
      } catch (err: any) {
        if (err.response) {
          console.log(err);
        }
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <div onClick={onClick} className="relative">
      <div className="rounded-full border h-10 w-10 bg-[#f0f3f4] border-slate-500 flex items-center justify-center">
        <p className="text-black text-lg sora font-medium">{userProfileInitial}</p>
      </div>
      {/* <BadgeCheck className="text-blue-800 font-extrabold absolute right-0 bottom-0" size={15}/> */}
    </div>
  );
};

export default UserAvatarCard;

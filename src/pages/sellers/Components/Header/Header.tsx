import { useState } from "react";
import Logo from "@/components/Header/Navbar/Logo/Logo";
import Search from "../Search/Search";
import IconFolder from "../IconFolder/IconFolder";
import { Text } from "@/components/ui/Typography/Typography";
import UserAvatar from "@/components/UserAvatar/UserAvatar";
import Link from "next/link";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="bg-[#290D43] px-10 lg:px-[8.4rem] py-5 flex gap-4 items-center justify-between">
      <div className="flex items-center gap-5">
        <Logo classname="w-full" />
        <Search placeholder={""} />
      </div>
      <div className="relative flex items-center gap-4">
        <IconFolder />
        <Text variant="small" className="text-white hidden 2xl:block">
          Orders
        </Text>
        <div>
          <UserAvatar onClick={toggleDropdown} />
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
              <ul className="py-1">
                <li>
                  <Link href="/profile/seller-profile-creation" className="block px-4 py-2 font-semibold text-sm text-gray-700 hover:bg-gray-100 sora">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link href="/settings" className="block px-4 py-2 font-semibold text-sm text-gray-700 hover:bg-gray-100 sora">
                    Settings
                  </Link>
                </li>
                <li>
                  <Link href="/logout" className="block px-4 py-2 font-semibold text-sm text-gray-700 hover:bg-gray-100 sora">
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Search from "../Search/Search";
import IconFolder from "../IconFolder/IconFolder";
import UserAvatar from "@/components/UserAvatar/UserAvatar";
import { Badge } from "@/components/ui/badge";
import { LoaderCircle, LogOut, Settings, User } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import axiosInstance from "@/pages/api/axiosInstance";
import { fetch_user_profile } from "@/pages/api/endpoints";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [tooltipName, setTooltipName] = useState("");

  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axiosInstance.get(fetch_user_profile);
        const firstName = response.data.data.firstName;
        setTooltipName(firstName);
      } catch (err: any) {
        if (err.response) {
          console.log(err);
        }
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <header className="bg-[#290D43] px-4 md:px-10 lg:px-[8.4rem] py-5 flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link
          href={
            pathname.includes("sellers")
              ? "/seller-landing"
              : pathname.includes("buyers")
              ? "/buyer-landing"
              : "/"
          }
        >
          <Image
            src="/icons/wawulogo.svg"
            alt="Wawu Logo"
            className="w-auto h-8 object-contain"
            width={0}
            height={0}
            sizes="100vw"
          />
        </Link>
        <Search placeholder="Search..." />
      </div>

      <div className="flex items-center gap-4">
        <Link href={"/profile/seller-profile-creation"}>
          <button className="bg-[#F52585] hidden md:block text-white sora font-medium py-2 px-5 rounded-lg hover:bg-[#370f22] transition-all ease-in-out">
            Update Profile
          </button>
        </Link>
        <IconFolder />
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <UserAvatar onClick={isMobile ? toggleDrawer : toggleDropdown} />
            </TooltipTrigger>
            <TooltipContent>{tooltipName}</TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <Badge variant="pending">
          <LoaderCircle color="#C2410C" size={15} className="-rotate-[70deg]" />
          Pending
        </Badge>
      </div>

      {/* Dropdown for desktop */}
      {!isMobile && isDropdownOpen && (
        <div className="absolute right-10 top-16 z-50 w-48 bg-white shadow-lg rounded-lg">
          <div className="py-2 space-y-5">
            <div>
              <Link
                href="/profile/seller-profile-creation"
                className="flex items-center gap-1 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={toggleDropdown}
              >
                <User size={20}/>
                Profile
              </Link>
            </div>
            <div>
              <Link
                href="/settings"
                className="flex items-center gap-1 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={toggleDropdown}
              >
                <Settings size={20} />
                Settings
              </Link>
            </div>
            <div>
              <Link
                href="/auth/login"
                className="flex items-center gap-1 px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                onClick={toggleDropdown}
              >
                <LogOut size={20} className="text-red-600"/>
                Logout
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Drawer for mobile */}
      {isMobile && isDrawerOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="w-full max-w-xs bg-white shadow-lg h-full p-5">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-700">Menu</h2>
              <button className="text-gray-600" onClick={toggleDrawer}>
                Close
              </button>
            </div>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/profile/seller-profile-creation"
                  className="block px-4 py-2 font-semibold text-sm text-gray-700 hover:bg-gray-100"
                  onClick={toggleDrawer}
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  href="/settings"
                  className="block px-4 py-2 font-semibold text-sm text-gray-700 hover:bg-gray-100"
                  onClick={toggleDrawer}
                >
                  Settings
                </Link>
              </li>
              <li>
                <Link
                  href="/auth/login"
                  className="block px-4 py-2 font-semibold text-sm text-gray-700 hover:bg-gray-100"
                  onClick={toggleDrawer}
                >
                  Logout
                </Link>
              </li>
            </ul>
          </div>
          <div
            className="w-full h-full bg-black opacity-50"
            onClick={toggleDrawer}
          ></div>
        </div>
      )}
    </header>
  );
};

export default Header;

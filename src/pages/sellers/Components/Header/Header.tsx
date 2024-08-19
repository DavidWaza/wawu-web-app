import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Search from "../Search/Search";
import IconFolder from "../IconFolder/IconFolder";
import UserAvatar from "@/components/UserAvatar/UserAvatar";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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
        <IconFolder />
        <UserAvatar onClick={isMobile ? toggleDrawer : toggleDropdown} />
      </div>

      {/* Dropdown for desktop */}
      {!isMobile && isDropdownOpen && (
        <div className="absolute right-10 top-16 z-50 w-48 bg-white shadow-lg rounded-lg">
          <ul className="py-2">
            <li>
              <Link
                href="/profile/seller-profile-creation"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={toggleDropdown}
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                href="/settings"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={toggleDropdown}
              >
                Settings
              </Link>
            </li>
            <li>
              <Link
                href="/auth/login"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={toggleDropdown}
              >
                Logout
              </Link>
            </li>
          </ul>
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

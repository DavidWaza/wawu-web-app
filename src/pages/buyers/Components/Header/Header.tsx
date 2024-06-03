import Logo from "@/components/Header/Navbar/Logo/Logo";
import Search from "../Search/Search";
import IconFolder from "../IconFolder/IconFolder";
import { Text } from "@/components/ui/Typography/Typography";
import UserAvatar from "@/components/UserAvatar/UserAvatar";

const Header = () => {
  return (
    <div className="bg-[#290D43] px-10 lg:px-[8.4rem] py-5 flex gap-4 justify-between">
      <div className="flex items-center gap-5">
        <Logo />
        <Search />
      </div>
      <div className="flex items-center gap-4">
        <IconFolder />
        <Text variant="small" className="text-white hidden 2xl:block">
          Orders
        </Text>
        <UserAvatar />
      </div>
    </div>
  );
};
export default Header;

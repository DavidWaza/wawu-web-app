import Logo from "@/components/Header/Navbar/Logo/Logo";
import Search from "../Search/Search";
import IconFolder from "../IconFolder/IconFolder";
import { Text } from "@/components/ui/Typography/Typography";
import UserAvatar from "@/components/UserAvatar/UserAvatar";

const Header = () => {
  return (
    <div className="bg-[#290D43] px-[2rem] flex gap-4 justify-between h-[7rem] 2xl:h-auto">
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

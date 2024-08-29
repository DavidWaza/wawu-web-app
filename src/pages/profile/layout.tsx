import MobileNavbar from "@/components/Header/Navbar/MobileNavbar";
import Header from "../sellers/Components/Header/Header";
import Navbar from "@/components/Header/Navbar/Navbar";


interface AuthWrapperProps {
  children: React.ReactNode;
}
const LayoutProfile = ({ children }: AuthWrapperProps) => {
  return (
    <div>
      <div>
      <div className="hidden xl:block">
        <Navbar id={0} link="" href="" isCaret />
      </div>
      <div className="block xl:hidden">
        <MobileNavbar />
      </div>
        <div className="w-full pb-10 bg-white lg:px-20 px-10 pt-[7rem]">{children}</div>
      </div>
    </div>
  );
};
export default LayoutProfile;

import { usePathname } from "next/navigation";
import Header from "../buyers/Components/Header/Header";
interface AuthWrapperProps {
  children: React.ReactNode;
}
const LayoutProfile = ({ children }: AuthWrapperProps) => {
  return (
    <div>
      <div>
        <Header />
        <div className="w-full pb-10 bg-white px-20 pt-20">{children}</div>
      </div>
    </div>
  );
};
export default LayoutProfile;

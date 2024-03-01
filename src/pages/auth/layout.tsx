import Header from "../buyers/Components/Header/Header";
import AuthNavbar from "./login/Components/Header/Header";
import Illustrator from "./login/Components/Illustrator/Illustrator";
import { usePathname } from "next/navigation";
interface AuthWrapperProps {
  children: React.ReactNode;
}
const LayoutAuth = ({ children }: AuthWrapperProps) => {
  const pathname = usePathname();
  return (
    <div>
      <div className="bg-[#F5F7F6]">
        {pathname.includes("/login") || pathname.includes("/sign-up") ? (
          <AuthNavbar id={0} href={""} link={""} isCaret={false} />
        ) : (
          <Header />
        )}
        <div className="grid md:grid-cols-2 px-12 bg-white 2xl:my-[5rem] 2xl:mx-[10rem]">
          <Illustrator />
          <div>
            <div className="w-full pb-10 ">
              <div>
                <p className="text-black font-bold text-xl py-7">
                  {pathname === "/auth/login"
                    ? "Login"
                    : pathname === "/auth/sign-up"
                    ? "Sign Up"
                    : ""}
                </p>
              </div>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LayoutAuth;

import Logo from "../Header/Navbar/Logo/Logo";
import { Text } from "../ui/Typography/Typography";

const Footer = () => {
  return (
    <div>
      <footer className="relative bg-slate-50 pt-8 pb-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <Logo className="w-[6.7rem]" />
              <div className="block">
                <div className="flex gap-3 items-center align-middle">
                  <img src="/icons/Logo.svg" alt="" />
                  <Text variant="small" className="mt-3">
                    help@wawutech.com
                  </Text>
                </div>
                <div className="flex gap-3 items-center align-middle">
                  <img src="/icons/Social platforms logo.svg" alt="" />
                  <Text variant="small" className="mt-3">
                    14 Ibiyinka Salvador, Off African Lane Lekki Phase 1, Lagos
                    Nigeria.
                  </Text>
                </div>
                <div className="flex gap-3 items-center align-middle">
                  <img src="/icons/Social platforms logo.svg" alt="" />
                  <Text variant="small" className="mt-3">
                    +2348089925524
                  </Text>
                </div>
                <div className="flex gap-3">
                  <img src="" alt="" />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4 sora capitalize pt-[3rem]">
              <div className="flex items-top mb-6 justify-end">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block  text-blueGray-500 text-sm font-semibold mb-2">
                    About Us
                  </span>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block text-blueGray-500 text-sm font-semibold mb-2">
                    Contact us
                  </span>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block  text-blueGray-500 text-sm font-semibold mb-2">
                    Learn with Wawu
                  </span>
                </div>
              </div>
              <div className="flex justify-end gap-10 px-[3rem] mt-20">
                <img src="/icons/Logo (1).svg" alt="social-logo" />
                <img src="/icons/fb.svg" alt="social-logo" />
                <img src="/icons/tiktok.svg" alt="social-logo" />
                <img src="/icons/vector.svg" alt="social-logo" />

              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center"></div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;

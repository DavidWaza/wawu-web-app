import "@/styles/globals.css";
import { useEffect } from "react";
import type { AppProps } from "next/app";
import Footer from "@/components/Footer/Footer";
import { OnboardingProvider } from "@/Context/onboardingContext";
import { Toaster } from "sonner";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { I18nextProvider } from "react-i18next";
import i18n from "../../utilities/i18n";

export default function App({ Component, pageProps }: AppProps) {
  const pathname = usePathname();
  const router = useRouter();
  // useEffect(() => {
  //   const token = localStorage.getItem("authToken");
  //   if (!token) {
  //     router.push("/auth/login");
  //   }
  // }, []);
  return (
    <div className="bg-[#F5F7F6]" suppressHydrationWarning>
      <OnboardingProvider>
        <Toaster richColors />
        <I18nextProvider i18n={i18n}>
          <Component {...pageProps} />
        </I18nextProvider>
        {pathname && !pathname.includes("dashboard") && <Footer />}
      </OnboardingProvider>
    </div>
  );
}

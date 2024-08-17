import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "@/components/Footer/Footer";
import { OnboardingProvider } from "@/Context/onboardingContext";
import { Toaster } from "sonner";
import { usePathname } from "next/navigation";

export default function App({ Component, pageProps }: AppProps) {
  const pathname = usePathname();

  return (
    <div className="bg-[#F5F7F6]" suppressHydrationWarning>
      <OnboardingProvider>
        <Toaster richColors />
        <Component {...pageProps} />
        {pathname && !pathname.includes("dashboard") && <Footer />}
      </OnboardingProvider>
    </div>
  );
}

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "@/components/Footer/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-[#F5F7F6]">
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

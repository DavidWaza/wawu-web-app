import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Header/Navbar/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar id={0} link="" href="" isCaret />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

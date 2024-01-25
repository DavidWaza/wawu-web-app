import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Header/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar id={0} link="" href="" isCaret />
    </>
  );
}

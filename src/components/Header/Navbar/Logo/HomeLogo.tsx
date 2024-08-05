import Link from "next/link";
import React from "react";
import Image from "next/image";

interface IlogoProps {
  classname?: string;
}
const HomeLogo = ({ classname }: IlogoProps) => {
  return (
    <div>
      <Link href={"/"}>
        <Image
          src="/assets/homelogo.png"
          alt=""
          width={180}
          height={180}
          sizes="100vw"
        />
      </Link>
    </div>
  );
};
export default HomeLogo;

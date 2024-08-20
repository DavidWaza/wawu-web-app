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
          src="https://res.cloudinary.com/dgbl43ljm/image/upload/v1724197587/homelogo_r8tiaw.png"
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

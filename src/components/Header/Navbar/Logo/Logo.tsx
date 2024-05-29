import Link from "next/link";
import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <div>
      <Link href={"/"}>
        <Image
          src="/assets/logo.png"
          alt=""
          className={"w-full h-auto object-contain object-center"}
          width={0}
          height={0}
          sizes="100vw"
        />
      </Link>
    </div>
  );
};
export default Logo;

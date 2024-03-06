import Link from "next/link";
import React from "react";
import Image from "next/image";
interface LogoProps {
  className: string;
}
const Logo = ({ className }: LogoProps) => {
  return (
    <div>
      <Link href={"/"}>
        <Image
          src="/assets/logo.png"
          alt=""
          className={className}
          width={130}
          height={130}
        />
      </Link>
    </div>
  );
};
export default Logo;

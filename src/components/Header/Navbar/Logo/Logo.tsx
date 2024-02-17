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
          width={100}
          height={100}
        />
      </Link>
    </div>
  );
};
export default Logo;

import Link from "next/link";
import React from "react";
import Image from "next/image";

interface IlogoProps{
  classname?:string
}
const Logo = ({classname}:IlogoProps) => {
  return (
    <div>
      <Link href={"/"}>
        <Image
          src="/assets/WAWU-logo.svg"
          alt=""
          className={`${classname} w-full h-auto object-contain object-center`}
          width={0}
          height={0}
          sizes="100vw"
        />
      </Link>
    </div>
  );
};
export default Logo;

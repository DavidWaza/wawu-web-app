import Link from "next/link";
import React from "react";
import Image from "next/image";

interface IlogoProps{
  classname?:string
}
const FooterLogo = ({classname}:IlogoProps) => {
  return (
    <div>
      <Link href={"/"}>
        <Image
          src="/assets/footerlogo.png"
          alt=""
          className={`${classname} h-auto object-contain object-center`}
          width={0}
          height={0}
          sizes="100vw"
          
        />
      </Link>
    </div>
  );
};
export default FooterLogo;

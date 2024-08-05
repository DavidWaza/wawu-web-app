import Image from "next/image";
import Link from "next/link";
import React from "react";

const Custom404 = () => {
  return (
    <div className="flex flex-col min-h-full justify-center items-center space-y-5 py-20">
      <Image
        src={"/assets/404.svg"}
        alt=""
        width={0}
        height={0}
        sizes="100vw"
        className="w-[30%] m-auto h-auto object-contain object-center"
      />
      <p className="text-[#FF0084] text-[28px] font-semibold">404 Not Found</p>
      <p className="text-black text-[36px] font-semibold -mt-10">
        Whoops! This page doesn&apos;t exist.
      </p>
      <Link href={"/"}>
        <button className="bg-[#9510C9] rounded-md p-2 text-white">
          Back to Homepage
        </button>
      </Link>
    </div>
  );
};

export default Custom404;

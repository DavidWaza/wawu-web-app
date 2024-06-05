import UserAvatar from "@/components/UserAvatar/UserAvatar";
import Image from "next/image";
import React from "react";

const ModalDetails = () => {
  return (
    <div className="">
      <div className="flex justify-between items-center gap-20 border border-b border-t-0 border-x-0">
        <div className="flex items-center gap-5 pb-5">
          <UserAvatar />
          <p className="text-black font-semibold">Jane Doe</p>
        </div>
        <div>
          <button className="bg-[#F7ABD1] p-2 rounded-md text-black font-semibold">
            Contact me
          </button>
        </div>
      </div>
      <div className="my-5">
        <p className="text-black text-[20px] font-semibold">Jade application</p>
      </div>
      <div>
        <p className="text-black text-[16px] font-normal">
          Turning a dream into reality were the words of the client when she
          first saw her new website. Designed a complete ready to launch home
          decor store with tried and tested winning products on a premium theme
          to enhance the minimalism of the site and giving it a sleek
          professional look. Have a look please - https://jadeabby.com/
        </p>
      </div>
      <div className="my-5">
        <Image
          src={"/assets/jade-portfolio.svg"}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto object-center object-contain"
        />
      </div>
    </div>
  );
};

export default ModalDetails;

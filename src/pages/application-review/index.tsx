import Image from "next/image";
import React from "react";
import Illustrator from "../auth/login/Components/Illustrator/Illustrator";
import AuthIllustrator from "@/pages/auth/login/assets/login-illustration.png"


const ApplicationReview = () => {
  return (
    <div className="py-20">
      <p className="text-2xl text-center font-semibold">
        Your aplication is being reviewed. <br />
        This would take 12 - 48 hours
      </p>
      <div>
      <Image
        src={AuthIllustrator}
        alt="login illustrations"
        width={0}
        height={0}
        sizes="100vw"
        loading="lazy"
        className=" w-[30%] m-auto h-full object-contain object-center"
      />
      </div>
     
    </div>
  );
};

export default ApplicationReview;

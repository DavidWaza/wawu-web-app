import Image from "next/image";
import LoginIllustrator from "@/pages/login/assets/login-illustration.png";
export const Illustrator = () => {
  return (
    <div>
      <Image
        src={LoginIllustrator}
        alt="login illustrations"
        className=" h-full"
      />
    </div>
  );
};

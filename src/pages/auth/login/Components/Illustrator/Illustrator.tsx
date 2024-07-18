import Image from "next/image";
import AuthIllustrator from "@/pages/auth/login/assets/login-illustration.png"

 const Illustrator = () => {
  return (
    <div>
      <Image
        src={AuthIllustrator}
        alt="login illustrations"
        width={0}
        height={0}
        sizes="100vw"
        loading="lazy"
        className=" w-full h-full object-contain object-center"
      />
    </div>
  );
};
export default Illustrator
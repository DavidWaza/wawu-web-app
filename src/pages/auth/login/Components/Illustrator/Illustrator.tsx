import Image from "next/image";
import AuthIllustrator from "@/pages/auth/login/assets/login-illustration.png"

 const Illustrator = () => {
  return (
    <div>
      <Image
        src={AuthIllustrator}
        alt="login illustrations"
        className=" h-full"
      />
    </div>
  );
};
export default Illustrator
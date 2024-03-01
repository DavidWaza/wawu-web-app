import { Heading } from "@/components/ui/Typography/Typography";
import Image from "next/image";
import LoginIllustration from "../../auth/login/assets/login-illustration.png";
import LogoIllustration from "../../auth/login/assets/otherlogo.png";
import Button from "@/components/ui/Button/Button";

const EmailVerification = () => {
  return (
    <div className="lg:w-1/2 text-center m-auto py-20">
         <div className="flex justify-center">
        <Image src={LogoIllustration} alt="" width={150} height={150}  className="w-40"/>
      </div>
      <Heading variant="medium" fontColor="secondary">
       You have successfully verified your email
      </Heading>
      <div className="flex justify-center">
        <Image src={LoginIllustration} alt="" width={400} height={400} />
      </div>
      <Button variant="tertiary" size="large">
        Home
      </Button>
    </div>
  );
};
export default EmailVerification;

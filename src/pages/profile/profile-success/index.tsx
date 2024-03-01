import { Heading } from "@/components/ui/Typography/Typography";
import Image from "next/image";
import LoginIllustrations from "../../auth/login/assets/login-illustration.png";
import Button from "@/components/ui/Button/Button";

const ProfileSuccess = () => {
  return (
    <div className="lg:w-1/2 text-center m-auto py-20">
      <Heading variant="medium" fontColor="secondary">
        Congratulations, you have successfully created your profile
      </Heading>
      <div className="flex justify-center">
        <Image src={LoginIllustrations} alt="" width={400} height={400} />
      </div>
      <Button variant="tertiary" size="large">
        Profile
      </Button>
    </div>
  );
};
export default ProfileSuccess;

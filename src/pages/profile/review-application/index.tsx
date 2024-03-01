import { Heading } from "@/components/ui/Typography/Typography";
import Image from "next/image";
import LoginIllustrations from "../../auth/login/assets/login-illustration.png";
import Button from "@/components/ui/Button/Button";

const ApproveApplication = () => {
  return (
    <div className="lg:w-1/2 text-center m-auto py-20">
      <Heading variant="medium" fontColor="secondary">
        Your application is being reviewed, This will take 12 - 48 hours
      </Heading>
      <div className="flex justify-center">
        <Image src={LoginIllustrations} alt="" width={400} height={400} />
      </div>
      <Button variant="tertiary" size="large">
        Dashboard
      </Button>
    </div>
  );
};
export default ApproveApplication;

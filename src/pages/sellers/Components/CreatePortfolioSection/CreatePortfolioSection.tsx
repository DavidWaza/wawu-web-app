import { Text } from "@/components/ui/Typography/Typography";
import Button from "@/components/ui/Button/Button";
import Image from "next/image";
import { usePathname } from "next/navigation";

const CreatePortfolioSection = () => {
  const pathname = usePathname();
  return (
    <div className="2xl:flex justify-between border border-[#ED459A] my-5 rounded-md md:px-10 px-5 2xl:px-20 py-10">
      <div className="md:flex gap-10 text-nowrap space-y-4">
        <Image
          src={"/icons/wand.svg"}
          width={0}
          height={0}
          sizes="100vw"
          alt="magic wand"
          className="lg:w-full !w-[10%] h-auto object-center object-contain"
        />
        <div>
          <Text variant="small" textWeight="bold">
            Get proposals from the most relevant seller
          </Text>
          <Text variant="small" className="text-wrap">
            Simply create a porfolio that shows off your work to potential
            clients
          </Text>
        </div>
      </div>
      <div className="pt-5">
        <Button
          variant="secondary"
          size="large"
          href="/buyers/create-seller-portfolio"
          className="py-2 !w-[10rem] !font-semibold !bg-[#EBEBEB] hover:bg-slate-50 ease-in transition-all text-black"
        >
          {pathname.includes("buyers")
            ? " Create a brief"
            : pathname.includes("sellers")
            ? " Create a portfolio"
            : ""}
        </Button>
      </div>
    </div>
  );
};
export default CreatePortfolioSection;

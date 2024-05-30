import Button from "@/components/ui/Button/Button";
import { Text } from "@/components/ui/Typography/Typography";
import Image from "next/image";

const GetInTouch = () => {
  return (
    <>
      <div className="lg:flex justify-between items-center gap-10 py-20">
        <div className="flex gap-5">
          <Text variant="medium" className="sora text-black">
            We are{" "}
            <span className="text-[#FF0084]">A Girl Tech Spearheads</span>{" "}
            Community <br />
            represented by persons of all{" "}
            <span className="text-[#730C99]">abilities.</span>
          </Text>
          <Image
            src={"/icons/arms-1.svg"}
            alt="arms"
            width={0}
            height={0}
            className="w-[10%]"
          />
        </div>
        <div className="mt-5 lg:mt-0">
          <Button variant="tertiary" className="py-2 px-3">
            Get in touch
          </Button>
        </div>
      </div>
    </>
  );
};
export default GetInTouch;

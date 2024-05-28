import Button from "@/components/ui/Button/Button";
import { Text } from "@/components/ui/Typography/Typography";
import Image from "next/image";

const GetInTouch = () => {
  return (
    <>
      <div className="flex justify-between">
        <div>
          <Text variant="medium" className="sora text-black">
            We are{" "}
            <span className="text-[#FF0084]">A Girl Tech Spearheads</span>{" "}
            Community represented by persons of all{" "}
            <span className="text-[#730C99]">abilities.</span>
          </Text>
          <Image
            src={"/icons/arms-1.svg"}
            alt="arms"
            width={0}
            height={0}
            className="lg:w-full w-[20%] hidden md:block"
          />
        </div>
      </div>
    </>
  );
};
export default GetInTouch;

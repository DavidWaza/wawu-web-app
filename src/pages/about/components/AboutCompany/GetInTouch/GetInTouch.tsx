import Button from "@/components/ui/Button/Button";
import { Text } from "@/components/ui/Typography/Typography";

const GetInTouch = () => {
  return (
    <div className="block md:flex md:justify-between justify-center items-center py-20">
      <div className="flex gap-10 w-full md:w-3/4 items-center">
        <Text variant="medium" className="sora text-black w-full">
          We are{" "}
          <span className="text-[#FF0084]">\“A Girl Tech Spearheads</span>{" "}
          Community&quot; represented by persons of all{" "}
          <span className="text-[#730C99]">abilities.</span>
        </Text>

        <img src="/icons/arms-1.svg" alt="" className="hidden md:flex" />
      </div>
      <Button variant="tertiary" size="large">
        Get in touch
      </Button>
    </div>
  );
};
export default GetInTouch;

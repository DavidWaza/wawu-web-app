import Button from "@/components/ui/Button/Button";
import { Text } from "@/components/ui/Typography/Typography";

const GetInTouch = () => {
  return (
    <div className="grid 2xl:grid-cols-2 py-20">
      <div className="flex justify-between gap-4">
        <Text variant="medium" className="sora text-black">
          We are <span className="text-[#FF0084]">“A Girl Tech Spearheads</span>{" "}
          community represented by persons of all{" "}
          <span className="text-[#730C99]">abilities.</span>
        </Text>
        <div>
          <img src="/icons/arms-1.svg" alt="" />
        </div>
      </div>
      {/* <div className="flex justify-center 2xl:justify-end">
        <Button variant="primary" className="w-[10rem] py-0">
          Get in touch
        </Button>
      </div> */}
    </div>
  );
};
export default GetInTouch;

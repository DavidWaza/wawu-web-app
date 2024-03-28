import Image from "next/image";
import { FC, ReactNode } from "react";
import { Text } from "@/components/ui/Typography/Typography";
interface ExploreCardsProps {
  cardImg: string;
  title: string;
  fontColor: "primary" | "secondary";
  children: ReactNode;
}

const ExploreCard: FC<ExploreCardsProps> = ({
  cardImg,
  title,
  fontColor = "primary",
  children,
}) => {
  return (
    <div className="w-full py-5">
      <Image src={cardImg} alt="skill card" width={400} height={500} />
      <Text
        variant="small"
        className={` capitalize ${
          fontColor === "primary"
            ? "text-black"
            : fontColor === "secondary"
            ? "text-white"
            : ""
        } mt-3`}
        textWeight="bold"
      >
        {title}
      </Text>
      <div>{children}</div>
    </div>
  );
};
export default ExploreCard;

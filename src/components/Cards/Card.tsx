import { Heart, Star } from "lucide-react";
import { truncateText } from "../../../utilities/Truncate";
import { Text } from "../ui/Typography/Typography";
import { Badge } from "@/components/ui/badge";

interface ICardPros {
  name?: string;
  last?: string;
  about?: string;
  onClick?: () => void;
}
// Turn this props when the data is given

const Card: React.FC<ICardPros> = ({ name, about, last, onClick }) => {
  return (
    <div className="shadow-md hover:shadow-none transition-all ease-linear rounded-md border border-slate-300 w-full h-full p-3 cursor-pointer">
      <div>
        <img src={"/assets/SD.jpg"} alt="img-placeholder" />
      </div>
      <div className="flex justify-between items-center my-5">
        <div className="flex items-center gap-2">
          <div className="rounded-full border h-10 w-10 bg-[#f0f3f4] border-slate-500 flex items-center justify-center">
            <p className="text-black text-lg sora font-medium">
              {`${name?.charAt(0)}${last?.charAt(0)}`}
            </p>
          </div>
          <Text variant="small" textWeight="bold">
            {name}
          </Text>
        </div>
        <div>
          <Badge variant="active">
            <span className="w-2 h-2 p-1 animate-pulse bg-green-700 rounded-full"></span>
            Online
          </Badge>
        </div>
      </div>
      <div className="mb-[10px]">
        <Text variant="small" className="!font-medium">
          {truncateText(about, 20)}
        </Text>
      </div>
      <div className="flex items-center gap-2 my-5">
        <Star />
        <Text variant="small" textWeight="bold">
          4.9 <span className="font-light">(1k+)</span>
        </Text>
      </div>
      <div className="flex justify-between items-center">
        <Heart />
      </div>
    </div>
  );
};
export default Card;

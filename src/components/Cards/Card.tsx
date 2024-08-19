import { truncateText } from "../../../utilities/Truncate";
import UserAvatar from "../UserAvatar/UserAvatar";
import { Text } from "../ui/Typography/Typography";
import { FaRegStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

interface ICardPros {
  name:string;
  about?:string
  onClick?: () => void
}
// Turn this props when the data is given


const Card:React.FC<ICardPros> = ({name, about, onClick}) => {
  return (
    <div className="shadow-md hover:shadow-none transition-all ease-linear rounded-md border border-slate-300 w-full h-full p-3 cursor-pointer">
      <div>
        <img src={"/assets/SD.jpg"} alt="img-placeholder" />
      </div>
      <div className="flex justify-between items-center my-5">
        <div className="flex items-center gap-2">
          <UserAvatar />
          <Text variant="small" textWeight="bold">
           {name}
          </Text>
        </div>
        <div>
          <Text variant="small" textWeight="bold">
            Level 2
          </Text>
        </div>
      </div>
      <div className="mb-[10px]">
        <Text variant="small" className="!font-medium">
        {truncateText(about, 20)}
        </Text>
      </div>
      <div className="flex items-center gap-2 my-5">
        <FaRegStar className="text-black" />
        <Text variant="small" textWeight="bold">
          4.9 <span className="font-light">(1k+)</span>
        </Text>
      </div>
      <div className="flex justify-between items-center">
        <FaRegHeart />
      </div>
    </div>
  );
};
export default Card;

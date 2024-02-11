import UserAvatar from "../UserAvatar/UserAvatar";
import { Text } from "../ui/Typography/Typography";
import { FaRegStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

// Turn this props when the data is given
const Card = () => {
  return (
    <div className="shadow-md hover:shadow-none transition-all ease-linear rounded-md border border-slate-300 w-full h-full p-3">
      <div>
        <img src={"/assets/SD.jpg"} alt="img-placeholder" />
      </div>
      <div className="flex justify-between items-center my-5">
        <div className="flex items-center gap-2">
          <UserAvatar />
          <Text variant="small" textWeight="bold">
            Daisy Slump
          </Text>
        </div>
        <div>
          <Text variant="small" textWeight="bold">
            Level 2
          </Text>
        </div>
      </div>
      <div className="mb-[10px]">
        <Text variant="small">
          I will write 1500 words seo article and blog post for you
        </Text>
      </div>
      <div className="flex gap-2 my-5">
        <FaRegStar className="text-black" />
        <Text variant="small" textWeight="bold">
          4.9 <span className="font-light">(1k+)</span>
        </Text>
      </div>
      <div className="flex justify-between items-center">
        <Text variant="small" textWeight="bold">
          From $10
        </Text>
        <FaRegHeart />
      </div>
    </div>
  );
};
export default Card;

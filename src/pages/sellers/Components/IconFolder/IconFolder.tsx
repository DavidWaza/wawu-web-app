import { FaRegBell } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";

const IconFolder = () => {
  return (
    <div className="2xl:flex gap-4 hidden">
      <FaRegBell color='#fff' />
      <MdOutlineEmail color='#fff'/>
      <FaRegHeart color='#fff'/>
    </div>
  );
};
export default IconFolder;

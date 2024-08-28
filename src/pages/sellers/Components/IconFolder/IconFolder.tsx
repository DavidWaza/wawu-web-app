import { Bell, Heart, Mail } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const IconFolder = () => {
  return (
    <div className="2xl:flex gap-4 hidden">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Bell
              color="#fff"
              size={20}
              className="hover:scale-110 transition-all ease-in"
            />
          </TooltipTrigger>
          <TooltipContent>Notification</TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Mail
              color="#fff"
              size={20}
              className="hover:scale-110 transition-all ease-in"
            />
          </TooltipTrigger>
          <TooltipContent>Messages</TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Heart
              color="#fff"
              size={20}
              className="hover:scale-110 transition-all ease-in"
            />
          </TooltipTrigger>
          <TooltipContent>Likes</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};
export default IconFolder;

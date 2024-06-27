import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { FaChevronRight } from "react-icons/fa6";

const recentSalesUsers = [
  {
    avatarFallback: "OM",
    name: "Olivia Martin",
    email: " olivia.martin@email.com",
    // badgeVariants: 'outline'
  },
  {
    avatarFallback: "JL",
    name: "Jackson Lee",
    email: "jackson.lee@email.com",
    // badgeVariants: 'outline'
  },
  {
    avatarFallback: "IN",
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    // badgeVariants: 'outline'
  },
];
const RecentSales = () => {
  return (
    <div className="space-y-8">
      {recentSalesUsers.map(({ avatarFallback, name, email }, index) => (
        <>
          <div className="flex items-center py-4" key={index}>
            <Avatar className="h-9 w-9">
              <AvatarImage src="/avatars/01.png" alt="Avatar" />
              <AvatarFallback>{avatarFallback}</AvatarFallback>
            </Avatar>
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">{name}</p>
              <p className="text-sm text-muted-foreground">{email}</p>
            </div>
            <div className="ml-auto font-medium">
              <Badge variant="outline">Online</Badge>
            </div>
            <div className="ml-auto font-medium">
              <FaChevronRight />
            </div>
          </div>
        </>
      ))}
    </div>
  );
};
export default RecentSales;

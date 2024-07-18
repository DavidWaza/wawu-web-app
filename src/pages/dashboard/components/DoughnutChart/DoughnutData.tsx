import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const doughnutData = [
  {
    name: "Today",
    price: "$175",
  },
  {
    name: "Week",
    price: "$254",
  },
  {
    name: "Month",
    price: "$884",
  },
];
const DoughnutData = () => {
  return (
    <div className="space-y-8">
      {doughnutData.map(({ name, price }, index) => (
        <>
          <div className="flex items-center " key={index}>
            <div className="bg-black rounded-full w-3 h-3"></div>
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">{name}</p>
            </div>
            <div className="ml-auto font-medium">
              <p className="text-sm font-medium leading-none">{price}</p>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};
export default DoughnutData;

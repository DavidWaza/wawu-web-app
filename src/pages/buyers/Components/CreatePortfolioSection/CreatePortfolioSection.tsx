import { Text } from "@/components/ui/Typography/Typography";
import Button from "@/components/ui/Button/Button";
const CreatePortfolioSection = () => {
  return (
    <div className="2xl:flex justify-between border border-[#ED459A] my-5 rounded-md md:px-10 px-5 2xl:px-20 py-10">
      <div>
        <Text variant="small" textWeight="bold">
          Get proposals from the most relevant seller
        </Text>
        <Text variant="small">
          Simply create a porfolio that shows off your work to potential clients
        </Text>
      </div>
      <div className="pt-5">
        <Button
          variant="secondary"
          size="large"
          className="py-1 hover:bg-slate-50 ease-in transition-all text-black"
        >
          Create Portfolio
        </Button>
      </div>
    </div>
  );
};
export default CreatePortfolioSection;

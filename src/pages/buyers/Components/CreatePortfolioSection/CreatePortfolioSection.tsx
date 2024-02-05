import { Text } from "@/components/ui/Typography/Typography";
import Button from "@/components/ui/Button/Button";
const CreatePortfolioSection = () => {
  return (
    <div className="2xl:flex justify-between border border-[#ED459A] rounded-md my-20 px-5 2xl:px-20 py-10">
      <div>
        <Text variant="small" textWeight="bold">
          Get proposals from the most relevant seller
        </Text>
        <Text variant="small">
          Simply create a porfolio that shows off your work to potential clients
        </Text>
      </div>
      <div>
        <Button
          variant="secondary"
          size="large"
          className="py-1 hover:bg-slate-50 ease-in transition-all"
        >
          Create Portfolio
        </Button>
      </div>
    </div>
  );
};
export default CreatePortfolioSection;

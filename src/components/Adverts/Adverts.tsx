import { Text } from "../ui/Typography/Typography";
import Section from "../ui/Section/Section";

const Adverts = () => {
  return (
    <div className="bg-white">
      <Section>
        <Text variant="small" className="text-center">
          Advertistment
        </Text>
        <div className="bg-slate-600 w-full h-40"></div>
      </Section>
    </div>
  );
};
export default Adverts;

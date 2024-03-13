import { Text } from "@/components/ui/Typography/Typography";

interface UserDetailsProps {
  prefix: any;
  suffix: string;
}
const UserDetails: React.FC<UserDetailsProps> = ({ prefix, suffix }) => {
  return (
    <div className="flex gap-2 items-center">
      {prefix}
      <Text variant="small">{suffix}</Text>
    </div>
  );
};
export default UserDetails;

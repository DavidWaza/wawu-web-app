import Button from "@/components/ui/Button/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import { Heading, Text } from "@/components/ui/Typography/Typography";
import UploadImage from "../UploadImage/UploadImage";

interface CertifcateProps {
  country: string;
  state: string;
}

const MeansOfIdentification = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CertifcateProps>();

  const onSubmit: SubmitHandler<CertifcateProps> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="my-10">
        <div className="flex gap-1 items-center">
          <Text variant="small">Means of identification</Text>
          <div className="bg-[#A2A2A2] h-[1px] w-full"></div>
        </div>
        <div className="lg:w-2/3 w-full px-10 lg:px-0">
          <div className="my-10">
            <UploadImage />
            <div className="mt-10">
              <label className="text-black block text-sm">Country</label>
              <select
                {...register("country", {
                  // required: "role is required",
                })}
                // type="text"
                // placeholder="Type here"
                className="p-2 text-black border border-1 rounded-md w-full"
              >
                <option>{""}</option>
                <option>Salem University</option>
                <option>Covenant University</option>
                <option>American University of Nigeria</option>
              </select>
              {errors.country && (
                <Text variant="small" className="text-red-600">
                  {errors.country.message}
                </Text>
              )}
            </div>
          </div>

          <div className="mt-10">
            <label className="text-black block text-sm">State</label>
            {/* <span></span> */}
            <select
              {...register("state", {
                // required: "role is required",
              })}
              // type="text"
              // placeholder="Type here"
              className="p-2 text-black border border-1 rounded-md w-full"
            >
              <option>{""}</option>
            </select>
            {errors.state && (
              <Text variant="small" className="text-red-600">
                {errors.state.message}
              </Text>
            )}
          </div>
          <Button variant="tertiary">Add</Button>
        </div>
      </div>
    </form>
  );
};
export default MeansOfIdentification;

import Button from "@/components/ui/Button/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import { Heading, Text } from "@/components/ui/Typography/Typography";
import UploadImage from "../UploadImage/UploadImage";

interface SocialProps {
  twitter: string;
  linkedin: string;
  facebook: string;
  instagram: string;
}

const SocialHandles = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SocialProps>();

  const onSubmit: SubmitHandler<SocialProps> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="my-10">
        <div className="flex gap-1 items-center">
          <Text variant="small">Social Handles</Text>
          <div className="bg-[#A2A2A2] h-[1px] w-full"></div>
        </div>
        <div className="lg:w-2/3 w-full lg:px-0 px-10">
        <div className="my-10">
          <label className="text-black block">Twitter</label>
          <input
            {...register("twitter", {
              required: "First Name is required",
            })}
            type="text"
            placeholder="Twitter"
            className="p-2 mr-3 text-black border border-1 rounded-md w-full"
          />
          {errors.twitter && (
            <Text variant="small" className="text-red-600">
              {errors.twitter.message}
            </Text>
          )}
        </div>
        <div className="mb-10">
          <label className="text-black block">LinkedIn</label>
          <input
            {...register("linkedin", {
              required: "First Name is required",
            })}
            type="text"
            placeholder="linkedIn"
            className="p-2 mr-3 text-black border border-1 rounded-md w-full"
          />
          {errors.linkedin && (
            <Text variant="small" className="text-red-600">
              {errors.linkedin.message}
            </Text>
          )}
        </div>
        <div className="">
          <label className="text-black block">Facebook</label>
          <input
            {...register("facebook", {
              required: "First Name is required",
            })}
            type="text"
            placeholder="facebook"
            className="p-2 mr-3 text-black border border-1 rounded-md w-full"
          />
          {errors.facebook && (
            <Text variant="small" className="text-red-600">
              {errors.facebook.message}
            </Text>
          )}
        </div>
        <div className="lg:flex gap-20">
          <Button variant="tertiary" size="large">
            Create your pricing
          </Button>
          <Button variant="tertiary" size="large">
            Create your FAQ
          </Button>
        </div>
        </div>
       
      </div>
    </form>
  );
};
export default SocialHandles;

import Button from "@/components/ui/Button/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import { Heading, Text } from "@/components/ui/Typography/Typography";
import UploadImage from "../UploadImage/UploadImage";

interface CertifcateProps {
  certificateName: string;
  institution: string;
  date: string;
}

const ProfessionalCertificate = () => {
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
          <Text variant="small">Professional Certificate</Text>
          <div className="bg-[#A2A2A2] h-[1px] w-full"></div>
        </div>
        <div className="lg:w-2/3 w-full lg:px-0 px-10">
          <div className="my-10">
            <label className="text-black block text-sm">Name</label>
            <select
              {...register("certificateName", {
                // required: "role is required",
              })}
              // type="text"
              // placeholder="Type here"
              className="p-2 text-black border border-1 rounded-md w-full"
            >
              <option>{""}</option>
              <option>BS.c</option>
              <option>HND</option>
              <option>OND</option>
            </select>
            {errors.certificateName && (
              <Text variant="small" className="text-red-600">
                {errors.certificateName.message}
              </Text>
            )}
          </div>
          <div className="mb-10">
            <label className="text-black block text-sm">Institution</label>
            <select
              {...register("institution", {
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
            {errors.institution && (
              <Text variant="small" className="text-red-600">
                {errors.institution.message}
              </Text>
            )}
          </div>

          <div className="">
            <label className="text-black block text-sm">End Date</label>
            <select
              {...register("date", {
                // required: "role is required",
              })}
              // type="text"
              // placeholder="Type here"
              className="p-2 text-black border border-1 rounded-md w-full"
            >
              <option>{""}</option>
            </select>
            {errors.date && (
              <Text variant="small" className="text-red-600">
                {errors.date.message}
              </Text>
            )}
          </div>
          <div className="mt-10">
            <UploadImage />
          </div>
          <Button variant="tertiary">Add</Button>
        </div>
      </div>
    </form>
  );
};
export default ProfessionalCertificate;

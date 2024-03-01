import { useForm, SubmitHandler } from "react-hook-form";
import { Heading, Text } from "@/components/ui/Typography/Typography";
import Button from "@/components/ui/Button/Button";
import { GoArrowLeft } from "react-icons/go";

interface FieldProps {
  email: string;
}

const ForgetPassword: React.FC<FieldProps> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FieldProps>();

  const onSubmit: SubmitHandler<FieldProps> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
  };
  return (
    <div className="flex justify-center align-middle py-40">
      <div>
        <Heading variant="medium" fontColor="secondary">
          Reset Password
        </Heading>
        <form className="my-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="lg:flex justify-between">
            <div className="mb-6">
              <label className="text-black block">Email</label>
              <input
                {...register("email", {
                  required: "Email is required",
                  //   pattern: /^[A-Za-z]+$/i,
                  validate: (value) => {
                    if (!value.includes("@")) {
                      return "Email must include @";
                    }
                  },
                })}
                type="text"
                placeholder="wawu@gmail.com"
                className="p-2 text-black border border-1 rounded-md lg:w-[30rem]"
              />
              {errors.email && (
                <Text variant="small" className="text-red-600">
                  {errors.email.message}
                </Text>
              )}
            </div>
          </div>
        </form>
        <div className="flex justify-center items-center">
          <Button variant="tertiary" size="large">
            Reset Password
          </Button>
        </div>
        <div className="flex gap-3 items-center justify-center">
          <GoArrowLeft className="text-[#ed459a]" />
          <p className="text-center text-[#ed459a] my-5">Go back</p>
        </div>
      </div>
    </div>
  );
};
export default ForgetPassword;

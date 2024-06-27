import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Heading, Text } from "@/components/ui/Typography/Typography";
import Button from "@/components/ui/Button/Button";
import { GoArrowLeft } from "react-icons/go";
import { FormFields } from "../../../../types/Types";
import InputField from "@/components/TextField/InputField";
import axiosInstance from "@/pages/api/axiosInstance";
import { reset_password } from "@/pages/api/endpoints";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const ForgetPassword: React.FC<FormFields> = () => {
  const [email, setEmail] = useState<FormFields["email"]>("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = async (data: FormFields) => {
    try {
      const response = await axiosInstance.post(reset_password, {
        email,
      });
      console.log(response.data.data);
      toast.success(response.data.message);
    } catch (err: any) {
      console.log(err);
    }
  };

  const router = useRouter();

  return (
    <div className="flex justify-center align-middle py-40">
      <div>
        <Heading variant="medium" fontColor="secondary">
          Reset Password
        </Heading>
        <form className="my-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="">
            <InputField
              label="Email"
              name="email"
              placeholder="davidwaza@gmail.com"
              type="email"
              value={email}
              register={register}
              errors={errors}
              setValue={(value) => setEmail(value)}
            />
          </div>
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="py-3 bg-[#290D43] px-10 w-full m-auto rounded-md mt-5 "
              disabled={isSubmitting}
              onClick={(e) => console.log("click")}
            >
              {isSubmitting ? "Validating..." : "Reset Password"}
            </button>
          </div>
        </form>
        <div
          className="flex gap-3 items-center justify-center"
          onClick={() => router.back()}
        >
          <GoArrowLeft className="text-[#ed459a]" />
          <p className="text-center text-[#ed459a] my-5">Go back</p>
        </div>
      </div>
    </div>
  );
};
export default ForgetPassword;

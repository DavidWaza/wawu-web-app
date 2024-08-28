import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";
import { Undo2 } from "lucide-react";

type FormFields = {
  email: string;
  password: string;
};

const ForgetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
  };

  const router = useRouter();
  return (
    <div className="flex justify-center items-center align-middle h-screen bg-white">
      <div>
        <p className="font-bold text-xl text-black">Reset Password</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="my-6">
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
              placeholder="Support@wawuafrica.com"
              className="py-2 px-2 text-black border border-1 rounded-md w-[20rem]"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="py-3 bg-[#290D43] px-10 w-full m-auto rounded-md mt-10 "
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending...." : "Send Password"}
          </button>
          <div className="flex justify-center gap-4 items-center my-6 group">
            <Undo2 className="!text-[#ED459A]" />

            <button onClick={() => router.back()} className=" !text-[#ED459A]">
              Go back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ForgetPassword;

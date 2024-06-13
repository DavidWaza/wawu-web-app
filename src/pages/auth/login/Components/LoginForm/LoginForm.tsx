import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { BsEyeSlash } from "react-icons/bs";
import { IoEyeOutline } from "react-icons/io5";
import Link from "next/link";
import axiosInstance from "@/pages/api/axiosInstance";
import InputField from "@/components/TextField/InputField";
import { FormFields } from "../../../../../../types/Types";
import { login_url } from "@/pages/api/endpoints";
import { toast } from "sonner";

const LoginForm = () => {
  const [email, setEmail] = useState<FormFields["email"]>("");
  const [password, setPassword] = useState<FormFields["password"]>("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  function togglePassword() {
    setPasswordVisible((prev) => !prev);
  }
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = async (data: FormFields) => {
    try {
      const response = await axiosInstance.post(login_url, data);
      toast.success(response.data.message);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="block space-y-10">
      <div>
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
      <div className="relative">
        <InputField
          label="Password"
          name="password"
          placeholder="***********"
          type={passwordVisible ? "text" : "password"}
          value={password}
          register={register}
          errors={errors}
          setValue={(value) => setPassword(value)}
        />
        <div onClick={togglePassword}>
          {passwordVisible ? (
            <>
              <IoEyeOutline className="absolute top-11 right-0 mx-6 text-black" />
            </>
          ) : (
            <>
              <BsEyeSlash className="absolute top-11 right-0 mx-6 text-black" />
            </>
          )}
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-2">
          <input type="checkbox" />
          <p className="text-black text-sm">Keep me logged in</p>
        </div>
        <div>
          <Link href="/forget-password">
            <p className="text-[#ED459A] text-sm">Forgot Password?</p>
          </Link>
        </div>
      </div>
      <button
        type="submit"
        className="py-3 bg-[#290D43] px-10 w-full m-auto rounded-md mt-10 "
        disabled={isSubmitting}
      >
        {isSubmitting ? "Loging in...." : "Login"}
      </button>
      <p className="text-black text-center mt-4">
        Not registered?{" "}
        <span className="font-bold ">
          <Link href={"/auth/sign-up"} className="!text-[#ED459A]">
            Sign Up
          </Link>
        </span>
      </p>
    </form>
  );
};

export default LoginForm;

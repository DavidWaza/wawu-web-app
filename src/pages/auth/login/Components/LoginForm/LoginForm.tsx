"use client";
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
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";

const LoginForm = () => {
  const [email, setEmail] = useState<FormFields["email"]>("");
  const [password, setPassword] = useState<FormFields["password"]>("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const router = useRouter();
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
      const token = response.data.data.token;
      localStorage.setItem("token", token);
      router.push("/sellers");
    } catch (err: any) {
      toast.error(err.message);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="block space-y-5">
      <div>
        <InputField
          label="Email"
          name="email"
          placeholder="wawu@gmail.com"
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
        <div
          onClick={togglePassword}
          className="absolute top-1/2 right-0 bottom-0 flex items-center justify-center w-10"
        >
          {passwordVisible ? <Eye size={15} /> : <EyeOff size={15} />}
        </div>
      </div>

      <div className="flex justify-between gap-5">
        <div className="flex gap-2">
          <input type="checkbox" />
          <p className="text-black text-sm text-nowrap">Keep me logged in</p>
        </div>
        <div>
          <Link href="/auth/forget-password">
            <p className="text-[#ED459A] text-sm text-nowrap">
              Forgot Password?
            </p>
          </Link>
        </div>
      </div>
      <button
        type="submit"
        className="py-3 bg-[#290D43] px-10 w-full m-auto rounded-md mt-10 text-white "
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

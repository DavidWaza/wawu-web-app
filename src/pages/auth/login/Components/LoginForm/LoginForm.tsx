import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { BsEyeSlash } from "react-icons/bs";
import { IoEyeOutline } from "react-icons/io5";
import Link from "next/link";
import axiosInstance from "@/pages/api/axiosInstance";

type FormFields = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  function togglePassword() {
    setPasswordVisible((prev) => !prev);
  }
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = async (data:FormFields) => {
  
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="block">
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
          placeholder="Email"
          className="py-2 px-2 text-black border border-1 rounded-md w-full"
        />
        {errors.email && <p className="text-red-600">{errors.email.message}</p>}
      </div>

      <div className="mb-2">
        <label className="text-black block">Password</label>
        <div className="relative">
          <input
            {...register("password", {
              required: "Password is required",
            })}
            type={passwordVisible ? "text" : "password"}
            placeholder="Minimum of 8 characters"
            className="py-2 px-2 text-black border border-1 rounded-md w-full "
          />
          <div onClick={togglePassword}>
            {passwordVisible ? (
              <>
                <IoEyeOutline className="absolute top-3 right-0 mx-6 text-black" />
              </>
            ) : (
              <>
                <BsEyeSlash className="absolute top-3 right-0 mx-6 text-black" />
              </>
            )}
          </div>
        </div>

        {errors.password && (
          <p className="text-red-600">{errors.password.message}</p>
        )}
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

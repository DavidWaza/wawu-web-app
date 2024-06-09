"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { BsEyeSlash } from "react-icons/bs";
import Link from "next/link";
import { IoEyeOutline } from "react-icons/io5";
import axiosInstance from "@/pages/api/axiosInstance";
import axios from "axios";
import { useOnboarding } from "@/Context/onboardingContext";
import { useRouter } from "next/navigation";
import { sign_up_url } from "@/pages/api/endpoints";

type FormFields = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
};

const SignupForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { goToNextStep } = useOnboarding();
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
      const response = await axiosInstance.post(sign_up_url, data);
      console.log("log", response.data.data);
      goToNextStep();
      router.push("/onboarding/user-screen-about");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="block">
      <div>
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="wawutech@gmail.com"
            className="py-2 px-2 text-black border border-1 rounded-md w-full"
          />
          {errors.email && (
            <p className="text-red-600">{errors.email.message}</p>
          )}
        </div>
      </div>
      <div className="2xl:flex 2xl:justify-between 2xl:text-left my-10">
        {/* FIRST NAME */}
        <div className="mb-2">
          <label className="text-black block">First Name</label>
          <input
            {...register("firstName", {
              required: "First Name is required",
            })}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            placeholder="Jane"
            className="py-2 px-2 mr-3 text-black border border-1 rounded-md w-full"
          />
          {errors.firstName && (
            <p className="text-red-600">{errors.firstName.message}</p>
          )}
        </div>

        {/* LAST NAME */}
        <div className="flex-wrap">
          <label className="text-black block">Last Name</label>
          <input
            {...register("lastName", {
              required: "Last Name is required",
            })}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            placeholder="Doe"
            className="py-2 px-2 mr-3 text-black border border-1 rounded-md w-full"
          />
          {errors.lastName && (
            <p className="text-red-600">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      {/* PASSWORD */}
      <div className="flex-wrap mb-5">
        <label className="text-black block">Phone Number</label>
        <input
          {...register("phoneNumber", {
            required: "Last Name is required",
          })}
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          type="number"
          placeholder="Phone number"
          className="py-2 px-2 mr-3 text-black border border-1 rounded-md w-full"
        />
        {errors.phoneNumber && (
          <p className="text-red-600">{errors.phoneNumber.message}</p>
        )}
      </div>

      <div className="relative">
        <input
          {...register("password", {
            required: "Password is required",
          })}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
      <div className="flex justify-start my-2">
        <div className="flex gap-2">
          <input type="checkbox" className="w-4 h-auto" />
          <p className="text-black text-sm">
            By continuing you agree to our{" "}
            <span className="!text-[#ED459A]">
              <Link href={"#"}>
                terms of <br /> use and privacy policy
              </Link>
            </span>
          </p>
        </div>
      </div>
      <button
        type="submit"
        className="py-3 bg-[#290D43] px-10 w-full m-auto rounded-md mt-10 "
        disabled={isSubmitting}
      >
        {isSubmitting ? "Signing..." : "Sign up"}
      </button>
      <p className="text-black text-center mt-4">
        Already have an account?{" "}
        <span className="font-bold ">
          <Link href={"/auth/login"} className="!text-[#ED459A]">
            Login
          </Link>
        </span>
      </p>
    </form>
  );
};

export default SignupForm;

"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { BsEyeSlash } from "react-icons/bs";
import Link from "next/link";
import { IoEyeOutline } from "react-icons/io5";
import axiosInstance from "@/pages/api/axiosInstance";
import { useOnboarding } from "@/Context/onboardingContext";
import { useRouter } from "next/navigation";
import { sign_up_url } from "@/pages/api/endpoints";
import InputField from "@/components/TextField/InputField";
import { FormFields } from "../../../../../../types/Types";
import SelectField from "@/components/TextField/SelectField";
import { toast } from "sonner";

const SignupForm = () => {
  const [firstName, setFirstName] = useState<FormFields["firstName"]>("");
  const [lastName, setLastName] = useState<FormFields["lastName"]>("");
  const [email, setEmail] = useState<FormFields["email"]>("");
  const [phoneNumber, setPhoneNumber] = useState<FormFields["phoneNumber"]>("");
  const [password, setPassword] = useState<FormFields["password"]>("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [role, setRole] = useState<FormFields["role"]>(0);

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

  const onSubmit: SubmitHandler<FormFields> = async () => {
    try {
      const response = await axiosInstance.post(sign_up_url, {
        firstName,
        lastName,
        email,
        password,
        phoneNumber,
        role,
      });
      toast.success(response.data.message);
      goToNextStep();
      router.push("/onboarding/user-screen-about");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="block space-y-7">
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
      <div className="2xl:flex 2xl:justify-between 2xl:text-left">
        <div className="pb-7">
          {/* FIRST NAME */}
          <InputField
            label="First Name"
            name="firstName"
            placeholder="David"
            value={firstName}
            register={register}
            errors={errors}
            setValue={(value) => setFirstName(value)}
          />
        </div>

        {/* LAST NAME */}
        <InputField
          label="Last Name"
          name="lastName"
          placeholder="Waza"
          value={lastName}
          register={register}
          errors={errors}
          setValue={(value) => setLastName(value)}
        />
      </div>

      {/* PHONE NUMBER */}
      <InputField
        label="Phone Number"
        name="phoneNumber"
        placeholder="0801122233334"
        value={phoneNumber}
        register={register}
        errors={errors}
        setValue={(value) => setPhoneNumber(value)}
      />

      {/* PASSWORD */}
      <div className="relative">
        <InputField
          label="Password"
          name="password"
          placeholder="***********"
          type="password"
          value={password}
          register={register}
          errors={errors}
          setValue={(value) => setPassword(value)}
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

      {/* ROLE */}
      <SelectField
        label="Role"
        name="role"
        register={register}
        errors={errors}
        value={role}
        setValue={(value) => setRole(value)}
        options={[
          { value: 1, label: "Buyer" },
          { value: 2, label: "Seller" },
        ]}
      />
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

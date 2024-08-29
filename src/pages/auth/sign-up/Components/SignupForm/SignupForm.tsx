"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import axiosInstance from "@/pages/api/axiosInstance";
import { useOnboarding } from "@/Context/onboardingContext";
import { useRouter } from "next/navigation";
import { sign_up_url } from "@/pages/api/endpoints";
import InputField from "@/components/TextField/InputField";
import { FormFields } from "../../../../../../types/Types";
import SelectField from "@/components/TextField/SelectField";
import { toast } from "sonner";
import { Eye, EyeOff } from "lucide-react";
import LoadingScreen from "@/components/LoadingScreen/LoadingScreen";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const SignupForm = () => {
  const [firstName, setFirstName] = useState<FormFields["firstName"]>("");
  const [lastName, setLastName] = useState<FormFields["lastName"]>("");
  const [email, setEmail] = useState<FormFields["email"]>("");
  const [phoneNumber, setPhoneNumber] = useState<FormFields["phoneNumber"]>("");
  const [password, setPassword] = useState<FormFields["password"]>("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [role, setRole] = useState<FormFields["role"]>(0);
  const [loading, setLoading] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState<boolean>(false);

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
    setLoading(false);
    try {
      const response = await axiosInstance.post(sign_up_url, {
        firstName,
        lastName,
        email,
        password,
        phoneNumber,
        termsAccepted,
        role: 2,
      });

      // store the token in localStorage
      localStorage.setItem("token", response.data.token);

      toast.success(response.data.message);

      // Store the selected role in local storage

      goToNextStep();
      setTimeout(() => {
        setLoading(false);
        router.push("/onboarding/user-screen-about");
      }, 2000);
    } catch (err: any) {
      toast.error(err.response.data.message || "Error signing up");
      console.log(err);
    }
  };

  return (
    <>
      {loading && <LoadingScreen />}
      <form onSubmit={handleSubmit(onSubmit)} className="block space-y-2">
        <div>
          <InputField
            label="Email"
            name="email"
            placeholder="Support@wawuafrica.com"
            type="email"
            value={email}
            register={register}
            errors={errors}
            setValue={(value) => setEmail(value)}
          />
        </div>
        <div className="grid lg:grid-cols-2 lg:gap-10">
          <div className="">
            {/* FIRST NAME */}
            <InputField
              label="First Name"
              name="firstName"
              placeholder="Leora"
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
            placeholder="Leora"
            value={lastName}
            register={register}
            errors={errors}
            setValue={(value) => setLastName(value)}
          />
        </div>

        {/* PHONE NUMBER */}
        <div>
          <label className=" text-black block text-sm sora py-2">
            Phone Number
          </label>
          <PhoneInput
            {...register("phoneNumber")}
            onChange={(value:string) => setPhoneNumber(value)}
            country={"ng"}
            inputStyle={{
              width: "100%",
              height: "41px",
              border: "1px solid #ddd",
            }}
          />
        </div>
        {/* <InputField
          label="Phone Number"
          name="phoneNumber"
          placeholder="08151611293"
          value={phoneNumber}
          register={register}
          errors={errors}
          setValue={(value) => setPhoneNumber(value)}
        /> */}

        {/* PASSWORD */}
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

        <div className="flex justify-start items-start lg:items-center gap-1 py-5">
          <input
            type="checkbox"
            className="w-4 h-auto"
            {...register("termsAccepted")}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTermsAccepted(e.target.checked)
            }
          />
          <p className="text-black text-sm sora">
            By continuing you agree to our{" "}
            <span className="!text-[#ED459A]">
              <Link href={"#"}>terms of use and privacy policy</Link>
            </span>
          </p>
        </div>
        {termsAccepted === true ? (
          <>
            <button
              type="submit"
              className="py-3 bg-[#290D43] px-10 w-full m-auto rounded-md mt-10 text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Signing..." : "Sign up"}
            </button>
          </>
        ) : (
          <>
            <button
              type="submit"
              className="py-3 bg-slate-200 px-10 w-full m-auto rounded-md mt-10 text-black"
              disabled
            >
              {isSubmitting ? "Signing..." : "Sign up"}
            </button>
          </>
        )}

        <p className="text-black text-center mt-4">
          Already have an account?{" "}
          <span className="font-bold ">
            <Link href={"/auth/login"} className="!text-[#ED459A]">
              Login
            </Link>
          </span>
        </p>
      </form>
    </>
  );
};

export default SignupForm;

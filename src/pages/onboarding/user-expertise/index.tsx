import { useOnboarding } from "@/Context/onboardingContext";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import OnboardingLayout from "../Layout";
import Image from "next/image";

type FormFields = {
  mentorReasons: string;
};

const UserExpertise: React.FC = () => {
  const { goToNextStep } = useOnboarding();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>();

  const router = useRouter();
  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    goToNextStep();
    router.push("/");
  };

  return (
    <React.Fragment>
      <OnboardingLayout>
        <div className="bg-white lg:px-10 lg:w-1/2 m-auto py-10 border rounded-md">
          <div className="flex gap-5">
            <Image
              src={"/assets/wave.svg"}
              width={0}
              height={0}
              sizes="100vw"
              className="w-[5%] h-auto object-contain object-center"
              alt="wave"
            />
            <p className="text-[#290D43] font-bold text-xl">
              Hi, Idemeto Emediong
            </p>
          </div>
          <p className="text-[#9A9A9A] text-[16px] font-normal">
            Tell us a little about yourself so we can create a better experience
            for you.
          </p>
          <div className="py-5">
            <p className="text-[#151B28] font-semibold text-[16px]">
              What is your current professional role?
            </p>
          </div>
          <div className="grid lg:grid-cols-5 py-5 group">
            {[
              { src: "/assets/programmer.svg", title: "Programmer" },
              { src: "/assets/designer.svg", title: "Designer" },
              { src: "/assets/data-analyst.svg", title: "Data Analyst" },
              { src: "/assets/marketer.svg", title: "Marketer" },
              { src: "/assets/other.svg", title: "Other" },
            ].map((item, index) => (
              <div
                key={index}
                className="hover:border hover:border-[#9510C9] rounded-md transition-all ease-in-out"
              >
                <Image
                  src={item.src}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-[400px] h-auto object-contain object-center px-5 my-3"
                  alt={item.title}
                />
                <p className="text-[#290D43] font-normal text-[16px] hover:text-[#9510C9] text-center">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
          <div className="my-5 flex justify-center">
            <button
              className="bg-[#ED459A] w-2/3 py-2 px-6 rounded-xl"
              type="submit"
            >
              Continue
            </button>
          </div>
        </div>
      </OnboardingLayout>
    </React.Fragment>
  );
};

export default UserExpertise;

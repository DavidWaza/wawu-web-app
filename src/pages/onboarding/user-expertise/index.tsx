import { useOnboarding } from "@/Context/onboardingContext";
import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import OnboardingLayout from "../Layout";
import Image from "next/image";
import { fetch_user_profile } from "@/pages/api/endpoints";
import axiosInstance from "@/pages/api/axiosInstance";
import { toast } from "sonner";

type FormFields = {
  mentorReasons: string;
  role: string; // Added role type
};

const UserExpertise: React.FC = () => {
  const { goToNextStep } = useOnboarding();

  const [userProfileName, setUserProfileName] = useState<string | null>(null);
  const [selectedRole, setSelectedRole] = useState<string>("");

  useEffect(() => {
    fetchUserProfile();

    // Get the selected role from local storage
    const storedRole = localStorage.getItem("selectedRole");
    if (storedRole) {
      const role = JSON.parse(storedRole);
      setSelectedRole(role);
    }
  }, []);

  const fetchUserProfile = async () => {
    try {
      const response = await axiosInstance.get("/api/fetch_user_profile");
      setUserProfileName(response.data.data.firstName);
    } catch (err: any) {
      if (err.response) {
        toast.error(err.response.data.message);
      }
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>();

  const router = useRouter();
  const onSubmit: SubmitHandler<FormFields> = async () => {
    if (!selectedRole) {
      toast.error("Please select a professional role.");
      return;
    }

    try {
      goToNextStep();
      router.push("/sellers");
    } catch (err: any) {
      toast.error(err.message || "Error submitting role");
      console.log(err);
    }
  };

  const roles = [
    { src: "/assets/programmer.svg", title: "Programmer" },
    { src: "/assets/designer.svg", title: "Designer" },
    { src: "/assets/data-analyst.svg", title: "Data Analyst" },
    { src: "/assets/marketer.svg", title: "Marketer" },
    { src: "/assets/other.svg", title: "Other" },
  ];

  return (
    <React.Fragment>
      <OnboardingLayout>
        <div className="bg-white lg:px-10 lg:w-1/2 m-auto py-10 border rounded-md px-5">
          <div className="flex items-center gap-2">
            <Image
              src={"/assets/wave.svg"}
              width={0}
              height={0}
              sizes="100vw"
              className="w-5 h-auto object-contain object-center"
              alt="wave"
            />
            <div className="text-[#290D43] font-bold text-xl flex gap-1">
              Hi,
              {userProfileName ? (
                <p>{userProfileName}</p>
              ) : (
                <p className="text-black">User</p>
              )}
            </div>
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 py-5 group gap-4">
              {roles.map((item, index) => (
                <div
                  key={index}
                  className={`cursor-pointer p-4 rounded-md transition-all ease-in-out
                    ${
                      selectedRole === item.title
                        ? "border-2 border-[#9510C9] bg-[#F0EAFD]"
                        : "border-2 border-transparent"
                    } 
                    hover:border-[#9510C9]`} // Highlight and focus effect
                  onClick={() => setSelectedRole(item.title)} // Update selected role on click
                >
                  <Image
                    src={item.src}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="lg:w-full w-[70%] m-auto h-auto object-contain object-center px-5 my-3"
                    alt={item.title}
                  />
                  <p className="text-[#290D43] font-normal text-[16px] text-center">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
            <div className="my-5 flex justify-center">
              <button
                className="bg-[#ED459A] w-2/3 py-2 px-6 rounded-xl text-white"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Continue"}
              </button>
            </div>
          </form>
        </div>
      </OnboardingLayout>
    </React.Fragment>
  );
};

export default UserExpertise;

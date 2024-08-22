import React, { useState, useEffect } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useRouter } from "next/navigation";
import OnboardingLayout from "./Layout";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectLabel,
  SelectGroup,
} from "@/components/ui/select";
import axiosInstance from "../api/axiosInstance";
import { useOnboarding } from "@/Context/onboardingContext";

type FormFields = {
  mentorReasons: string;
};

const AboutUserProfileOnboarding: React.FC = () => {
  const [fetchCountries, setFetchCountries] = useState<string[]>([]);
  const { goToNextStep } = useOnboarding();
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>();

  const router = useRouter();

  useEffect(() => {
    fetchCountry();
  }, []);

  const fetchCountry = async () => {
    try {
      const response = await axiosInstance.get("/api/countries");
      setFetchCountries(response.data.data);
    } catch (err) {
      console.error("Error fetching countries:", err);
    }
  };

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    const selectedRole = data.mentorReasons;

    if (!selectedRole) {
      console.error("Selected role is undefined.");
      return;
    }

    localStorage.setItem("selectedRole", JSON.stringify(selectedRole));

    goToNextStep();
    router.push("/onboarding/user-expertise");
  };

  return (
    <React.Fragment>
      <OnboardingLayout>
        <div className="bg-white lg:w-1/2 m-auto py-10 border rounded-md">
          <p className="text-center text-black font-bold text-lg sora">
            Tell me about yourself
          </p>
          <p className="text-center text-black text-sm sora">
            Your answer will be used to personalize your experience.
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center mt-5">
            <div>
              <div className="pb-10">
                <label className="text-black block text-sm py-2">
                  What are you using Wawu for?
                </label>
                <Controller
                  name="mentorReasons"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Select {...field} onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select one" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="stewards">Stewards</SelectItem>
                          <SelectItem value="artisan">Artisan</SelectItem>
                          <SelectItem value="patrons">Patrons</SelectItem>
                          <SelectItem value="others">Others</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>
              <div className="pb-10">
                <label className="text-black block text-sm py-2">
                  You are using Wawu as a(n)?
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select one" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="individual">Individual</SelectItem>
                      <SelectItem value="organisation">Organisation</SelectItem>
                      <SelectItem value="others">Others</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="pb-10">
                <label className="text-black block text-sm">
                  What is your location?
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select one" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>All Countries</SelectLabel>
                      {fetchCountries.map((item, index) => (
                        <SelectItem value={item} key={index}>
                          {item}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="my-5 flex justify-center">
                <button
                  className="bg-[#9510C9] py-2 px-10 text-white rounded-xl"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Continue"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </OnboardingLayout>
    </React.Fragment>
  );
};

export default AboutUserProfileOnboarding;

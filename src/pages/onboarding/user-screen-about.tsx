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
import { FormFields } from "../../../types/Types";
import axios from "axios";

interface Country {
  code: string;
  name: string;
}

const AboutUserProfileOnboarding: React.FC = () => {
  const [countryList, setCountryList] = useState<Country[]>([]);
  const [country, setCountry] = useState<FormFields["country"]>("");

  const { goToNextStep } = useOnboarding();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>();

  const router = useRouter();

  useEffect(() => {
    fetchCountries();
  }, []);

  const handleCountryChange = (value: string) => {
    const country = countryList.find((item: Country) => item.code === value);
    if (country) {
      setCountry(country.name);
    }
  };

  const fetchCountries = async () => {
    try {
      const response = await axios.get(
        `https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code`
      );
      const countries: Country[] = response.data.countries.map(
        (country: any) => ({
          code: country.value,
          name: country.label,
        })
      );
      setCountryList(countries); // Set the list of countries
    } catch (err) {
      console.log(err);
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
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex justify-center mt-5"
          >
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
                    <Select
                      {...field}
                      onValueChange={field.onChange}
                      value={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select one" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="stewards">
                            Stewards(Seller)
                          </SelectItem>
                          <SelectItem value="patrons">
                            Patrons(Buyers)
                          </SelectItem>
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
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="pb-10">
                <label className="text-black block text-sm">
                  What is your location?
                </label>
                <Select
                  {...register("country")}
                  name="country"
                  value={country}
                  onValueChange={(value: string) => handleCountryChange(value)}
                >
                  <SelectTrigger className="!text-black whitespace-nowrap">
                    <SelectValue placeholder="Select Country">
                      {country || "Select Country"}
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    {countryList.map((nation) => (
                      <SelectItem value={nation.code} key={nation.code}>
                        {nation.name}
                      </SelectItem>
                    ))}
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

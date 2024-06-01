import { useOnboarding } from '@/Context/onboardingContext';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type FormFields = {
  mentorReasons: string;
};

const AboutUserProfileOnboarding: React.FC = () => {
  const { goToNextStep } = useOnboarding();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    goToNextStep(); // Call the function to go to the next step
  };

  return (
    <div className="bg-white lg:px-10 lg:w-1/2 border rounded-md pt-10">
      <p className="text-center text-black font-bold text-lg sora">
        Tell me about yourself
      </p>
      <p className="text-center text-black text-sm sora">
        Your answer will be used to..
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex justify-center mt-5"
      >
        <div>
          <div className="pb-10">
            <label className="text-black block text-sm">
              What are you using Wawu for?
            </label>
            <select
              {...register("mentorReasons")}
              className="py-2 px-2 text-black border border-1 rounded-md my-2 w-[20rem]"
            >
              <option>Select one</option>
              <option>Reason number 2</option>
            </select>
          </div>
          <div className="pb-10">
            <label className="text-black block text-sm">
              You are using Wawu as an?
            </label>
            <select
              {...register("mentorReasons")}
              className="py-2 px-2 text-black border border-1 rounded-md my-2 w-[20rem]"
            >
              <option>Select one</option>
              <option>Reason number 2</option>
            </select>
          </div>
          <div className="pb-10">
            <label className="text-black block text-sm">
              What is your location?
            </label>
            <select
              {...register("mentorReasons")}
              className="py-2 px-2 text-black border border-1 rounded-md my-2 w-[20rem]"
            >
              <option>Select one</option>
              <option>Reason number 2</option>
            </select>
          </div>
          <div className="my-5 flex justify-center">
            <button className="bg-[#A8A8A8] py-2 px-6 rounded-xl" type="submit">
              Continue
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AboutUserProfileOnboarding;
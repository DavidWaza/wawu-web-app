import { useOnboarding } from '@/Context/onboardingContext';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import OnboardingLayout from '../Layout';

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

  const router = useRouter()
  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    goToNextStep(); 
    router.push('/')
  };

  return (
   <React.Fragment>
    <OnboardingLayout>
        Hello world
    </OnboardingLayout>
   </React.Fragment>
  );
};

export default UserExpertise;

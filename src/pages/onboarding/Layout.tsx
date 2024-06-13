import React from 'react';
import Stepper from '../../components/Stepper/Stepper';
import { useOnboarding } from '@/Context/onboardingContext';

interface ILayoutProps {
  children: React.ReactNode;
}

const OnboardingLayout: React.FC<ILayoutProps> = ({ children }) => {
  const { currentStep } = useOnboarding();
  const NUMBER_OF_STEPS = 5;

  return (
    <div>
      <div className="flex justify-center">
        <Stepper currentStep={currentStep} numberOfSteps={NUMBER_OF_STEPS} />
      </div>
      <div className="bg-[#F5F7F6] py-20">
        {children}
      </div>
    </div>
  );
};

export default OnboardingLayout;

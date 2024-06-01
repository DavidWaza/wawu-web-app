import React, { createContext, useContext, useState, ReactNode, FC } from "react";

// Define the context properties
interface OnboardingContextProps {
  currentStep: number;
  goToNextStep: () => void;
  goToPreviousStep: () => void;
}

// Create the context with an initial undefined value
const OnboardingContext = createContext<OnboardingContextProps | undefined>(undefined);

// Custom hook to use the Onboarding context
export const useOnboarding = (): OnboardingContextProps => {
  const context = useContext(OnboardingContext);
  if (!context) {
    throw new Error("useOnboarding must be used within an OnboardingProvider");
  }
  return context;
};

// Define the provider properties
interface OnboardingProviderProps {
  children: ReactNode;
}

// Create the OnboardingProvider component
export const OnboardingProvider: FC<OnboardingProviderProps> = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const NUMBER_OF_STEPS = 5;

  const goToNextStep = () => setCurrentStep((prev) => (prev === NUMBER_OF_STEPS - 1 ? prev : prev + 1));
  const goToPreviousStep = () => setCurrentStep((prev) => (prev <= 0 ? prev : prev - 1));

  return (
    <OnboardingContext.Provider value={{ currentStep, goToNextStep, goToPreviousStep }}>
      {children}
    </OnboardingContext.Provider>
  );
};

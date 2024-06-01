import React from "react";

const Stepper = ({ currentStep, numberOfSteps }: any) => {
  const activeColor = (index: any) =>
    currentStep >= index ? "bg-[#9510C9]" : "bg-white border border-[#9510C9]";
  const isFinalStep = (index: any) => index === numberOfSteps - 1;
  return (
    <div className="flex items-center pt-20">
      {Array.from({ length: numberOfSteps }).map((_, index) => (
        <React.Fragment key={index}>
          <div
            className={`w-4 h-4 lg:w-8 lg:h-8 rounded-full flex justify-center items-center text-[#9510C9] ${activeColor(
              index
            )}`}
          >
            {index + 1}
          </div>
          {isFinalStep(index) ? null : (
            <div className={`w-12 h-1 ${activeColor(index)}`}></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Stepper;

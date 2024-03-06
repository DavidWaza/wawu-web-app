import React from "react";
import { Text } from "@/components/ui/Typography/Typography"; // Import your Text component or use an appropriate replacement

interface InputProps {
  label: string;
  sublabel?: string;
  name: string;
  placeholder: string;
  register: any; // Adjust the type based on the actual type from react-hook-form
  errors: any; // Adjust the type based on the actual type from react-hook-form
  type: string;
  className?: string;
}

const CustomInput: React.FC<InputProps> = ({
  label,
  sublabel,
  name,
  placeholder,
  register,
  errors,
  type,
  className,
}) => (
  <div className="mb-6">
    <label className="text-black block font-medium">{label}</label>
    <label className="text-black block text-[12px]">{sublabel}</label>
    <input
      {...register(name, {
        required: `${label} is required`,
      })}
      type={type}
      placeholder={placeholder}
      className={` px-2 mr-3 text-black border border-1 rounded-xl w-full ${className}`}
    />
    {errors[name] && (
      <Text variant="small" className="text-red-600">
        {errors[name].message}
      </Text>
    )}
  </div>
);
export default CustomInput;

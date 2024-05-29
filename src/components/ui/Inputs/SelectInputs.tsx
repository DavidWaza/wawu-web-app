import React from "react";
import {
  useForm,
  SubmitHandler,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";
import { Text } from "@/components/ui/Typography/Typography"; // Import your Text component or use an appropriate replacement

interface SelectProps {
  label: string;
  name: string;
  options: string[];
  className: string;
  register: UseFormRegister<FieldValues>; // UseFormRegister for proper typing
  errors: any; // Adjust the type based on the actual type from react-hook-form
}

const CustomSelect: React.FC<SelectProps> = ({
  label,
  name,
  options,
  register,
  errors,
  className,
}) => (
  <div className="mb-6">
    <label className="text-black block text-sm font-medium text-left">{label}</label>
    <select
      {...register(name, {
        required: `${label} is required`,
      })}
      className={` px-2 text-black border border-1 w-full !text-left  ${className}`}
    >
      {options.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </select>
    {errors[name] && (
      <Text variant="small" className="text-red-600">
        {errors[name].message}
      </Text>
    )}
  </div>
);
export default CustomSelect;

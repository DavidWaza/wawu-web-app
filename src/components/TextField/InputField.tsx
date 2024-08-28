import { Text } from "../ui/Typography/Typography";
import { useEffect } from "react";
import { InputFieldProps } from "../../../types/Types";

const InputField = ({
  label,
  name,
  placeholder,
  type = "text",
  register,
  value,
  setValue,
  errors,
  className,
  validation = {},
}: InputFieldProps) => {
  useEffect(() => {
    register(name, validation);
  }, [name, register, validation]);

  return (
    <div className="!py-1">
      <label className="text-black block text-sm sora py-2">{label}</label>
      <input
        {...register(name, validation)}
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className={`py-2 px-4 text-black border border-1 rounded-md w-full ${
          errors[name] ? "border-red-500" : ""
        }`}
      
      />
      {errors[name] && (
        <Text variant="small" className="text-red-600">
          {errors[name]?.message?.toString()}
        </Text>
      )}
    </div>
  );
};
export default InputField;

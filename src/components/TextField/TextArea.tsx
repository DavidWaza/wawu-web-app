import { Text } from "../ui/Typography/Typography";
import { InputFieldProps } from "../../../types/Types";

type TextAreaFieldProps = InputFieldProps;
const TextAreaField = ({
  label,
  name,
  placeholder,
  register,
  value,
  setValue,
  errors,
  validation = {},
}: TextAreaFieldProps) => (
  <div className="flex flex-col gap-2 !py-5">
    <label className="text-black block !text-sm">{label}</label>
    <textarea
      {...register(name, validation)}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeholder}
      className={`py-2 px-4 text-black border border-1 rounded-md w-full ${
        errors[name] ? "border-red-500" : ""
      }`}
    />
    {errors[name] && (
      <Text variant="small" className="text-red-600">
        {errors[name]?.message}
      </Text>
    )}
  </div>
);
export default TextAreaField;

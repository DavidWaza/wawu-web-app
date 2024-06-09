import { InputFieldProps } from "../../../types/Types";
import { Text } from "../ui/Typography/Typography";

type SelectFieldProps = InputFieldProps & {
  options: { value: string; label: string }[];
};

const SelectField = ({
  label,
  name,
  register,
  setValue,
  errors,
  options,
  validation = {},
}: SelectFieldProps) => (
  <div className="flex flex-col gap-2 !py-5">
    <label className="text-black block text-sm">{label}</label>
    <select
      {...register(name, validation)}
      onChange={(e) => setValue(e.target.value)}
      className={`py-2 px-4 text-black border border-1 rounded-md w-full ${
        errors[name] ? "border-red-500" : ""
      }`}
    >
      <option value="" disabled>
        Select an option
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    {errors[name] && (
      <Text variant="small" className="text-red-600">
        {errors[name]?.message}
      </Text>
    )}
  </div>
);
export default SelectField;

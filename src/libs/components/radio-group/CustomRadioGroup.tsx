import * as RadioGroup from "@radix-ui/react-radio-group";
import clsx from "clsx";
import { UseFormRegisterReturn } from "react-hook-form";

interface Option {
  value: string;
  label: string;
}

interface CustomRadioGroupProps {
  label: string;
  options: Option[];
  error?: string;
  inputClassname?: string;
  indicatorClassName?: string;
  labelClassName?: string;
  value?: string;
  register?: UseFormRegisterReturn<string>;
  onChange?: (value: string) => void;
}

export const CustomRadioGroup: React.FC<CustomRadioGroupProps> = ({
  label,
  options,
  error,
  inputClassname,
  indicatorClassName,
  labelClassName,
  value,
  register,
  onChange,
}) => {
  return (
    <div>
      <p className="mb-4 text-sm font-medium leading-4 text-dark">
        {label}
      </p>
      <RadioGroup.Root
        className="mb-4 flex gap-6"
        aria-invalid={!!error}
        value={value}
        onValueChange={onChange}
      >
        {options.map((option) => (
          <div key={option.value} className="flex items-center">
            <RadioGroup.Item
              value={option.value}
              className={clsx(
                "flex h-5 w-5 items-center justify-center rounded-full bg-grey-light-dark hover:border-4 hover:border-grey-light-middle hover:bg-white focus:border-4 focus:border-dark focus:bg-white focus:outline-none",
                inputClassname,
                value === option.value
                  ? "border-4 border-dark bg-white"
                  : "bg-grey-light-dark hover:border-grey-light-middle"
              )}
              aria-label={option.label}
              {...register}
            >
              <RadioGroup.Indicator
                className={clsx(
                  "relative h-full w-full items-center justify-center",
                  indicatorClassName
                )}
              >
                <span className="bg-violet-800 block h-full w-full rounded-full opacity-100" />
              </RadioGroup.Indicator>
            </RadioGroup.Item>
            <span
              className={clsx(
                "pl-2 text-sm font-medium leading-4 text-dark",
                labelClassName
              )}
            >
              {option.label}
            </span>
          </div>
        ))}
      </RadioGroup.Root>
      {error && (
        <p className="text-red-500 mt-2 block text-sm font-medium">{error}</p>
      )}
    </div>
  );
};

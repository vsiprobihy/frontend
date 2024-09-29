import React from "react";
import * as Label from "@radix-ui/react-label";

interface LabelProps extends React.ComponentPropsWithoutRef<"label"> {
  children: React.ReactNode;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
}

const CustomLabel: React.FC<LabelProps> = ({
  children,
  inputProps,
  labelProps,
}) => {
  return (
    <div className="mb-4">
      <Label.Root
        className={`block text-sm font-normal text-black ${labelProps?.className}`}
        {...labelProps}
      >
        {children}
      </Label.Root>
      <input
        className={`mt-1 block h-[64px] w-full rounded-xl border border-grey-light-dark px-4 py-[22px] placeholder:text-grey-light-middle hover:border-grey-light-middle focus:border-grey-light-middle focus:outline-none ${inputProps?.className}`}
        {...inputProps}
      />
    </div>
  );
};

export default CustomLabel;

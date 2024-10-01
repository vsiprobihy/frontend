import React from "react";
import * as Label from "@radix-ui/react-label";
import clsx from "clsx";

interface LabelProps extends React.ComponentPropsWithoutRef<"label"> {
  children: React.ReactNode;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
  className?: string;
}

const CustomLabel: React.FC<LabelProps> = ({
  children,
  inputProps = {},
  labelProps = {},
  className,
}) => {
  const { className: inputClassName, ...restInputProps } = inputProps;
  const { className: labelClassName, ...restLabelProps } = labelProps;
  return (
    <div className={clsx(className, "mb-4")}>
      <Label.Root
        className={clsx("block text-sm font-normal text-black", labelClassName)}
        {...restLabelProps}
      >
        {children}
      </Label.Root>
      <input
        className={clsx(
          "mt-1 block h-[64px] w-full rounded-xl border border-grey-light-dark px-4 py-[22px] placeholder:text-grey-light-middle hover:border-grey-light-middle focus:outline-none",
          inputClassName
        )}
        {...restInputProps}
      />
    </div>
  );
};

export default CustomLabel;

import clsx from "clsx";
import { IconType } from "@/app/enums/icon/icon.type";
import Icon from "@/app/components/icon/Icon";
import React from "react";
import Label from "@/app/components/inputs/Label";

type RequireIdIfLabel<T> = T extends { label: string } ? T & { id: string } : T;

interface BaseInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: IconType;
  onValueChange?: (value: string) => void;
  centerText?: boolean;
  label?: {
    text: string;
    icon?: IconType;
  };
  id?: string;
}

export type InputProps = RequireIdIfLabel<BaseInputProps>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, onValueChange, icon, label, ...props }, ref) => {
    return (
      <div className={`flex flex-col gap-2.5`}>
        {!!label && !!props.id && (
          <Label htmlFor={props.id} icon={label.icon}>
            {label.text}
          </Label>
        )}
        <div
          className={clsx(
            "flex flex-row items-center gap-2 overflow-hidden rounded-[0.75rem] border bg-white",
            className
          )}
        >
          {!!icon && (
            <div
              className={`relative left-4 flex items-center justify-center text-dark`}
            >
              <Icon name={icon} />
            </div>
          )}
          <input
            {...props}
            ref={ref}
            onChange={(e) => onValueChange?.(e.target.value)}
            className={clsx(
              "h-[3.25rem] w-full px-5 font-semibold text-dark placeholder:uppercase placeholder:text-grey focus:outline-none focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
              props.centerText && "text-center"
            )}
          />
        </div>
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };

"use client";

import { IconType } from "@/libs/enums";
import { Icon } from "..";

type Props = {
  icon: IconType;
  title: string;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const ProfileCardButton: React.FC<Props> = ({
  icon,
  title,
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`flex h-12 w-full items-center justify-center gap-2 rounded-full bg-grey-dark text-base font-semibold uppercase transition-colors duration-200 hover:bg-white hover:text-dark active:bg-white active:text-dark ${className}`}
    >
      <Icon name={icon} className="text-lg" />
      <span>{title}</span>
    </button>
  );
};

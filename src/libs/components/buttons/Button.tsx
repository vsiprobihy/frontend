import clsx from "clsx";
import { ComponentPropsWithRef } from "react";
import Link from "next/link";

type ThemeType = "light" | "dark";

interface ButtonProps extends ComponentPropsWithRef<"button"> {
  children: React.ReactNode;
  fullWidth?: boolean;
  size?: "middle" | "large" | "small";
  href?: string;
  theme?: ThemeType;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  fullWidth,
  theme,
  size,
  href,
  ...buttonProps
}) => {
  const buttonEl = (
    <button
      className={clsx(
        `border-transparent block rounded-full border text-center font-semibold uppercase leading-none`,
        fullWidth && "w-full",
        size === "large"
          ? "p-6 px-8 text-[1.125rem]"
          : size === "small"
            ? "p-3 px-4 text-base"
            : "p-4 px-6 text-base",
        theme === "light" || undefined
          ? "bg-orange-hot text-white hover:bg-orange-interactive active:border-white active:bg-dark disabled:bg-grey-light disabled:text-grey"
          : "bg-grey-dark text-white hover:border-white hover:bg-dark active:border-grey active:bg-dark disabled:bg-grey-light disabled:text-grey"
      )}
      {...buttonProps}
    >
      {children}
    </button>
  );

  return !!href ? <Link href={href}>{buttonEl}</Link> : buttonEl;
};

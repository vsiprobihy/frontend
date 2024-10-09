import React from "react";
import clsx from "clsx";
import { ComponentPropsWithRef } from "react";

interface AuthSubmitButtonProps extends ComponentPropsWithRef<"button"> {
  className?: string;
}

const AuthSubmitButton: React.FC<AuthSubmitButtonProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={clsx(
        "h-[60px] w-full items-center rounded-full bg-orange-hot text-white hover:bg-dark focus:outline-none",
        className
      )}
      type="submit"
      {...props}
    >
      <span className="text-base font-semibold uppercase text-white active:text-yellow">
        {children}
      </span>
    </button>
  );
};

export default AuthSubmitButton;

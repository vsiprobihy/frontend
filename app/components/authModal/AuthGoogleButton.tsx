import React from "react";
import clsx from "clsx";
import { ComponentPropsWithRef } from "react";
import { FaGoogle } from "react-icons/fa";

interface AuthGoogleButtonProps extends ComponentPropsWithRef<"button"> {
  className?: string;
}

const AuthGoogleButton: React.FC<AuthGoogleButtonProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={clsx(
        "hover:bg-grey-grey-light h-[62px] w-full items-center rounded-full bg-grey-light text-dark focus:outline-none",
        className
      )}
      type="submit"
      {...props}
    >
      <div className="flex items-center justify-center">
        <div className="flex h-[30px] w-[30px] items-center justify-center rounded bg-orange-hot">
          <FaGoogle className="h-[17px] w-[17px] fill-white" />
        </div>
        <span className="ml-[10px] text-base font-medium text-dark">
          {children}
        </span>
      </div>
    </button>
  );
};

export default AuthGoogleButton;

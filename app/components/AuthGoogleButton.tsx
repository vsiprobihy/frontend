import React from "react";
import clsx from "clsx";
import { ComponentPropsWithRef } from "react";

interface AuthGoogleButtonProps extends ComponentPropsWithRef<"button"> {
  className?: string;
  text: string;
  classNameText?: string;
  icon?: React.ReactNode;
}

const AuthGoogleButton: React.FC<AuthGoogleButtonProps> = (props) => {
  return (
    <button
      {...props}
      className="h-[62px] w-full items-center rounded-full bg-grey-light text-dark"
      type="submit"
      disabled={props.disabled}
      onClick={props.onClick}
      style={props.style}
    >
      {/* TODO replace "*" with an icon */}

      <span
        className={clsx("text-base font-medium text-dark", props.classNameText)}
      >
        {props.text}
      </span>
      {props.children}
    </button>
  );
};

export default AuthGoogleButton;

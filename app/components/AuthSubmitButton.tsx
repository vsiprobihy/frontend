import React from "react";
import clsx from "clsx";
import { ComponentPropsWithRef } from "react";

interface AuthSubmitButtonProps extends ComponentPropsWithRef<"button"> {
  className?: string;
  text: string;
  classNameText?: string;
}

const AuthSubmitButton: React.FC<AuthSubmitButtonProps> = (props) => {
  return (
    <button
      {...props}
      className="h-[60px] w-full items-center rounded-full bg-orange-hot text-white"
      type="submit"
      disabled={props.disabled}
      onClick={props.onClick}
      style={props.style}
    >
      <span
        className={clsx(
          "text-base font-semibold uppercase text-white",
          props.classNameText
        )}
      >
        {props.text}
      </span>
      {props.children}
    </button>
  );
};

export default AuthSubmitButton;

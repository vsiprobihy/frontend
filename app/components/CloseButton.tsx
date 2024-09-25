import React from "react";
import clsx from "clsx";
import { ComponentPropsWithRef } from "react";
import { Cross2Icon } from "@radix-ui/react-icons";

interface CloseButtonProps extends ComponentPropsWithRef<"button"> {
  className?: string;
  onClick?: () => void;
}

const CloseButton: React.FC<CloseButtonProps> = (props) => {
  return (
    <button
      className={clsx(
        "hover:bg-grey-grey-light w-25px h-25px md:w-38px md:h-38px rounded-full bg-grey-light p-2 text-grey-dark hover:text-dark focus:bg-grey-light focus:text-grey-dark md:px-[14px] md:py-[14px]",
        props.className
      )}
      type="button"
      disabled={props.disabled}
      style={props.style}
      onClick={props.onClick}
    >
      <Cross2Icon className="h-[10px] w-[10px] text-grey-dark md:h-[15px] md:w-[15px]" />
    </button>
  );
};

export default CloseButton;

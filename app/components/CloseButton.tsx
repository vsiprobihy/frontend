import React from "react";
import clsx from "clsx";
import { ComponentPropsWithRef } from "react";
import { Cross2Icon } from "@radix-ui/react-icons";

interface CloseButtonProps extends ComponentPropsWithRef<"button"> {
  className?: string;
  onClick?: () => void;
}

const CloseButton: React.FC<CloseButtonProps> = ({ className, ...props }) => {
  return (
    <button
      className={clsx(
        "hover:bg-grey-grey-light flex h-[25px] w-[25px] items-center justify-center rounded-full bg-grey-light text-grey-dark hover:text-dark focus:bg-grey-light focus:outline-none md:h-[38px] md:w-[38px]",
        className
      )}
      type="button"
      {...props}
    >
      <Cross2Icon className="h-[12px] w-[12px] text-grey-dark md:h-[20px] md:w-[20px]" />
    </button>
  );
};

export default CloseButton;

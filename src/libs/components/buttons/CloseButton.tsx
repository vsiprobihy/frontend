import React from "react";
import clsx from "clsx";
import { ComponentPropsWithRef } from "react";
import { Icon } from "~/components";
import { IconType } from "~/enums";

interface CloseButtonProps extends ComponentPropsWithRef<"button"> {
  className?: string;
  onClick?: () => void;
}

export const CloseButton: React.FC<CloseButtonProps> = ({
  className,
  ...props
}) => {
  return (
    <button
      className={clsx(
        "flex h-[25px] w-[25px] cursor-pointer items-center justify-center rounded-full bg-grey-light text-grey-dark hover:bg-grey-light-dark hover:text-dark focus:bg-grey-light focus:outline-none md:h-[38px] md:w-[38px]",
        className
      )}
      type="button"
      {...props}
    >
      <Icon
        name={IconType.CLOSE}
        className="text-sm text-grey-dark md:text-xl"
      />
    </button>
  );
};

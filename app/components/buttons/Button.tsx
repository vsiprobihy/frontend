import clsx from "clsx";
import { ComponentPropsWithRef } from "react";

interface ButtonProps extends ComponentPropsWithRef<"button"> {
  children: React.ReactNode;
  fullWidth?: boolean;
  size?: "middle" | "large" | "small";
}

const Button: React.FC<ButtonProps> = (props) => {
  const { children, fullWidth, ...buttonProps } = props;

  return (
    <button
      className={clsx(
        `bg-orange-hot hover:bg-orange-interactive block rounded-full text-center font-semibold uppercase leading-none text-white active:text-yellow disabled:bg-grey-light disabled:text-grey`,
        fullWidth && "w-full",
        props.size === "large"
          ? "p-6 px-8 text-[1.125rem]"
          : props.size === "small"
            ? "p-3 px-4 text-base"
            : "p-4 px-6 text-base"
      )}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default Button;

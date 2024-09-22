import clsx from "clsx";
import { ComponentPropsWithRef } from "react";

interface ButtonProps extends ComponentPropsWithRef<"button"> {
  children: React.ReactNode;
  fullWidth?: boolean;
}

const ButtonLarge: React.FC<ButtonProps> = (props) => {
  const { children, fullWidth, ...buttonProps } = props;

  return (
    <button
      className={clsx(
        `text-4.5 disabled: block rounded-full bg-hot-orange p-6 text-center font-semibold uppercase text-white hover:bg-dark active:text-yellow disabled:bg-grey-light disabled:text-grey`,
        fullWidth && "w-full"
      )}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default ButtonLarge;

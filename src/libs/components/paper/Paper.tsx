import clsx from "clsx";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  bgColor?: "white" | "grey-light";
  padding?: "sm" | "md" | "lg";
  className?: string;
}>;

const paddingMap = {
  sm: "~p-3/6",
  md: "~p-4/6",
  lg: "~p-6/8",
};

export const Paper: React.FC<Props> = ({
  children,
  padding = "md",
  bgColor = "white",
  className,
}) => {
  return (
    <div
      className={clsx(
        "rounded-2xl",
        paddingMap[padding],
        {
          "bg-white": bgColor === "white",
          "bg-grey-light": bgColor === "grey-light",
        },
        className
      )}
    >
      {children}
    </div>
  );
};

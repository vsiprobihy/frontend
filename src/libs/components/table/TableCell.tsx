import clsx from "clsx";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  align?: "left" | "right" | "center" | "inherit";
  className?: string;
}>;

export const TableCell: React.FC<Props> = ({
  children,
  className,
  align = "inherit",
}) => {
  return (
    <td
      className={clsx(
        "px-4 py-3 font-medium leading-[1.4]",
        {
          "text-left": align === "left",
          "text-right": align === "right",
          "text-center": align === "center",
          "text-grey": align === "inherit",
        },
        className
      )}
    >
      {children}
    </td>
  );
};

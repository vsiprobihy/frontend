import clsx from "clsx";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  align?: "left" | "right" | "center" | "inherit";
  className?: string;
}>;

export const TableHeaderCell: React.FC<Props> = ({
  children,
  className,
  align = "inherit",
}) => {
  return (
    <th
      style={{ textAlign: align }}
      className={clsx(
        "px-4 py-3 text-sm font-semibold uppercase leading-[1.2] text-grey",
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
    </th>
  );
};

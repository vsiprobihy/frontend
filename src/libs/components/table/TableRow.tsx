import clsx from "clsx";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  bgColor?: string;
  textColor?: string;
  className?: string;
}>;
export const TableRow: React.FC<Props> = ({
  children,
  bgColor,
  textColor,
  className,
}) => {
  return (
    <tr className={clsx("px-4 py-3 font-thin", bgColor, textColor, className)}>
      {children}
    </tr>
  );
};

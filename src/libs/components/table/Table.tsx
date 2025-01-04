import clsx from "clsx";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  className?: string;
}>;

export const Table: React.FC<Props> = ({ children, className }) => {
  return (
    <table className={clsx("min-w-full border-collapse", className)}>
      {children}
    </table>
  );
};

import clsx from "clsx";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  spacing?: number;
  className?: string;
}>;

export const Stack: React.FC<Props> = ({
  children,
  className,
  spacing = 4,
}) => {
  return (
    <div className={clsx(`flex flex-col gap-${spacing}`, className)}>
      {children}
    </div>
  );
};

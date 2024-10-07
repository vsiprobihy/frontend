import { IconType } from "~/enums";

type IconProps = {
  name: IconType;
  className?: string;
  children?: React.ReactNode;
};

export const Icon: React.FC<IconProps> = ({
  name,
  className,
  children = "",
}) => <i className={`${name} ${className}`}>{children}</i>;

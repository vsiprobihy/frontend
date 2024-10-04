import Link, { LinkProps } from "next/link";
import { IconType } from "~/enums/enums";
import { Icon } from "~/components/components";

interface CustomLinkProps extends LinkProps {
  children: React.ReactNode;
}

export const CustomLink: React.FC<CustomLinkProps> = (props) => {
  return (
    <span
      className={`inline-flex flex-row items-center gap-2 text-dark hover:text-orange-hot disabled:text-grey-light-middle`}
    >
      <Link className={`text-base font-semibold uppercase`} {...props} />
      <Icon name={IconType.LINK} />
    </span>
  );
};

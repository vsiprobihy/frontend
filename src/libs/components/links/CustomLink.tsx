import Link, { LinkProps } from "next/link";
import { IconType } from "~/enums";
import { Icon } from "~/components";

interface CustomLinkProps extends LinkProps {
  children: React.ReactNode;
}

export const CustomLink: React.FC<CustomLinkProps> = (props) => {
  return (
    <span
      className={`link-hover inline-flex flex-row items-center gap-2 pr-4 text-base font-semibold uppercase text-dark hover:text-orange-hot disabled:text-grey-light-middle`}
    >
      <Link {...props}>
        {props.children}
        <Icon className="pl-2" name={IconType.LINK} />
      </Link>
    </span>
  );
};

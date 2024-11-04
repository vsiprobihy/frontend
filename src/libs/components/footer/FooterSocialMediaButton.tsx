import { IconType } from "~/enums";
import Link from "next/link";
import { Icon } from "~/components";

interface FooterSocialMediaButtonProps {
  icon: IconType;
  url: string;
}

export const FooterSocialMediaButton: React.FC<FooterSocialMediaButtonProps> = (
  props
) => {
  return (
    <Link
      className={`link-hover flex size-16 items-center justify-center rounded-full bg-grey-dark text-white`}
      href={props.url}
    >
      <Icon name={props.icon} className="text-2xl" />
    </Link>
  );
};

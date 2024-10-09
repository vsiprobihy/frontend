import { IconType } from "~/enums/enums";
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
      className={`flex h-8 w-8 items-center justify-center rounded bg-grey-dark text-white`}
      href={props.url}
    >
      <Icon name={props.icon} className="text-xl" />
    </Link>
  );
};

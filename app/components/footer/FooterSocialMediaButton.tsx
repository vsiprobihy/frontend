import Icon from "@/app/components/icon/Icon";
import { IconType } from "@/app/enums/icon/icon.type";
import Link from "next/link";

interface FooterSocialMediaButtonProps {
  icon: IconType;
  url: string;
}

const FooterSocialMediaButton: React.FC<FooterSocialMediaButtonProps> = (
  props
) => {
  return (
    <Link
      className={`flex h-8 w-8 items-center justify-center rounded bg-grey-dark text-white`}
      href={props.url}
    >
      <Icon name={props.icon} className="text-xl text-white" />
    </Link>
  );
};

export default FooterSocialMediaButton;

import Link from "next/link";

interface FooterSocialMediaButtonProps {
  icon: React.ReactNode;
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
      {props.icon}
    </Link>
  );
};

export default FooterSocialMediaButton;

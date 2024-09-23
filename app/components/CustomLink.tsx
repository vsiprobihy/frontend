import Link, { LinkProps } from "next/link";

interface CustomLinkProps extends LinkProps {
  children: React.ReactNode;
}

const CustomLink: React.FC<CustomLinkProps> = (props) => {
  return (
    <span
      className={`hover:text-orange-hot inline-flex flex-row items-center gap-2 text-dark disabled:text-grey-light-middle`}
    >
      <Link className={`text-base font-semibold uppercase`} {...props} />
      {/* TODO replace "*" with an icon */}
      <span>*</span>
    </span>
  );
};

export default CustomLink;

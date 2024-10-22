import Link from "next/link";

interface FooterContactsProps {
  title: string;
  value: string;
  url?: string;
}

export const FooterContacts: React.FC<FooterContactsProps> = (props) => {
  return (
    <div className={`flex flex-col`}>
      <div
        className={`text-[0.875rem] font-medium uppercase text-white md:text-base`}
      >
        {props.title}
      </div>
      <div className={`text-2xl font-medium text-white md:text-[2rem]`}>
        {!!props.url ? (
          <Link target="_blank" rel="noopener noreferrer" href={props.url}>
            {props.value}
          </Link>
        ) : (
          props.value
        )}
      </div>
    </div>
  );
};

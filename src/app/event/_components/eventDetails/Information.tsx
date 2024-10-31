import { Icon } from "@/libs/components";
import { IconType } from "@/libs/enums";
import Image, { StaticImageData } from "next/image";

type SocialLink = {
  iconType: IconType;
};

type OrganizerInfo = {
  name: string;
  logo: StaticImageData;
  email: string;
  phone: string;
  description: string[];
  socialLinks: SocialLink[];
};

type InformationProps = {
  organizerInfo: OrganizerInfo;
};

const Description: React.FC<{ texts: string[] }> = ({ texts }) => (
  <div className="~font-medium/semibold grid gap-4 rounded-2xl bg-white text-sm leading-[1.4] text-dark ~p-4/6">
    {texts.map((text, index) => (
      <p key={index}>{text}</p>
    ))}
  </div>
);

const SocialLinks: React.FC<{ links: SocialLink[] }> = ({ links }) => (
  <div className="mb-4 grid grid-flow-col gap-2">
    {links.map((link, index) => (
      <div
        key={index}
        className="flex items-center justify-center rounded-[60px] bg-grey-dark ~h-9/12 ~w-9/12"
      >
        <Icon name={link.iconType} className="text-lg text-white" />
      </div>
    ))}
  </div>
);

const Information: React.FC<InformationProps> = ({ organizerInfo }) => {
  const { name, logo, email, phone, description, socialLinks } = organizerInfo;

  return (
    <div className="grid ~gap-2/5 md:grid-flow-col md:items-start">
      <Description texts={description} />

      <div className="grid justify-items-center rounded-2xl bg-white font-semibold leading-[1.2] text-dark ~p-4/6">
        <h3 className="mb-6 uppercase ~text-base/2xl">Організатор</h3>

        <div className="mb-4 overflow-hidden rounded-full ~w-[5.625rem]/[7.375rem]">
          <Image src={logo} alt={`${name} logo`} className="w-full" />
        </div>
        <h4 className="mb-4 ~text-base/2xl">{name}</h4>

        <SocialLinks links={socialLinks} />

        <p className="uppercase ~text-sm/base ~mb-2/4">{email}</p>
        <p className="~text-sm/base">{phone}</p>
      </div>
    </div>
  );
};

export default Information;

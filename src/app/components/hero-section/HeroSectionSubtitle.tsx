import { IconType } from "~/enums/enums";
import { Icon } from "~/components";

const text = `Інформуємо про актуальні забіги по всій Україні.`;

export const HeroSectionSubtitle: React.FC = () => {
  return (
    <div
      className={`grid grid-cols-[auto,1fr] items-center gap-2.5 rounded-[16rem] bg-grey-dark py-4 pl-4 pr-6 text-white`}
    >
      <div className={`relative h-10 w-10 rounded-full bg-white`}>
        <div
          className={`absolute inset-0 m-auto inline h-min w-min text-2xl text-dark`}
        >
          <Icon name={IconType.INFO} className="text-xl text-dark" />
        </div>
      </div>
      <p className={`font-semibold uppercase`}>{text}</p>
    </div>
  );
};

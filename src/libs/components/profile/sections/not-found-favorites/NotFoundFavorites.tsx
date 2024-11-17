import { Icon } from "@/libs/components";
import { IconType } from "@/libs/enums";

interface Props {
  children?: React.ReactNode;
  title: string;
  description: string;
}

export const NotFoundFavorites: React.FC<Props> = ({
  children,
  title,
  description,
}) => {
    
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-white lg:h-40 lg:w-40">
        <Icon
          name={IconType.LIKE}
          className="absolute text-4xl text-grey-light-middle lg:text-7xl"
        />
      </div>

      <div className="flex flex-col items-center justify-center gap-2">
        <p className="whitespace-normal text-center text-2xl font-semibold uppercase leading-7 text-dark lg:text-3xl">
          {title}
        </p>

        <div className="flex flex-col items-center justify-center gap-1 lg:flex-row">
          <p className="text-center text-base font-medium leading-7 text-grey">
            {description}
          </p>
          {children}
        </div>
      </div>
    </div>
  );
};

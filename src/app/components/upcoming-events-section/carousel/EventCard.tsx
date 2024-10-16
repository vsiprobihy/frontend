import { ActivityTypeTag, Button, DistanceTag, Icon } from "~/components";
import { IconType } from "~/enums";
import dayjs from "dayjs";
import "dayjs/locale/uk";
import "dayjs/locale/en";
import Image, { ImageProps } from "next/image";

const buttonText = `Детальніше`;

export const IconText: React.FC<{ icon: IconType; text: string }> = ({
  icon,
  text,
}) => {
  return (
    <div className={`grid grid-cols-[auto,1fr] items-center gap-3`}>
      <Icon name={icon} className="text-dark" />
      <p>{text}</p>
    </div>
  );
};

export interface EventCardProps {
  photos: ImageProps;
  name: string;
  date_from: string;
  date_to: string;
  competition_type: string;
  place: string;
  distances: { name: string }[];
}

export const EventCard: React.FC<EventCardProps> = (props) => {
  dayjs.locale("uk");

  function capitalizeFirstLetter(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const formatDateRange = (
    date_from: string,
    date_to: string,
    locale: string
  ): string => {
    dayjs.locale(locale);

    const startDate = dayjs(date_from).format("D");
    const endDay = dayjs(date_to).format("D");
    const monthYear = dayjs(date_from).format("MMMM YYYY");

    let result: string;
    if (date_from === date_to) {
      result = `${startDate} ${monthYear}`;
    } else {
      result = `${startDate}-${endDay} ${monthYear}`;
    }
    return capitalizeFirstLetter(result);
  };

  const formattedDate = formatDateRange(props.date_from, props.date_to, "uk");

  return (
    <div
      className={`flex flex-col overflow-hidden rounded-2xl bg-white p-[16px]`}
    >
      <div className={`relative h-0 w-full pb-[50%]`}>
        <Image
          {...props.photos}
          alt={props.name}
          className={`absolute inset-0 h-full w-full rounded-2xl`}
        />
      </div>
      <div className={`flex flex-col gap-6 p-4`}>
        <div className={`flex flex-col`}>
          <div className={`flex flex-col gap-2`}>
            <div>
              <ActivityTypeTag>{props.competition_type}</ActivityTypeTag>
            </div>
            <h3 className={`text-2xl font-semibold text-dark lg:text-[2rem]`}>
              {props.name}
            </h3>
          </div>
          <div className={`flex flex-col gap-4`}>
            <div className={`flex flex-col gap-1`}>
              <IconText icon={IconType.CALENDAR} text={formattedDate} />
              <IconText icon={IconType.PIN} text={props.place} />
            </div>
            <div>
              <div className={`flex flex-row flex-wrap gap-2`}>
                {props.distances.map((d, index) => (
                  <DistanceTag key={index}>{d.name}</DistanceTag>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Button size={"middle"}>{buttonText}</Button>
      </div>
    </div>
  );
};

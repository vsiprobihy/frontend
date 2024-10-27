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
  dateFrom: string;
  dateTo: string;
  competitionType: string;
  place: string;
  distances: { name: string }[];
}

export const EventCard: React.FC<EventCardProps> = (props) => {
  dayjs.locale("uk");

  const formatDateRange = (
    dateFrom: string,
    dateTo: string,
    locale: string
  ): string => {
    dayjs.locale(locale);

    const startDate = dayjs(dateFrom).format("D");
    const endDay = dayjs(dateTo).format("D");
    let month = dayjs(dateFrom).format("MMMM");
    if (locale === "uk") {
      month = month.replace(/(ень|ий|д)$/, (match) => {
        if (match === "ень") return "ня";
        if (match === "ий") return "ого";
        if (match === "д") return "да";
        return match;
      });
    }
    const year = dayjs(dateFrom).format("YYYY");

    const result =
      dateFrom === dateTo
        ? `${startDate} ${month} ${year}`
        : `${startDate}-${endDay} ${month} ${year}`;

    return result;
  };

  const formattedDate = formatDateRange(props.dateFrom, props.dateTo, "uk");

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
              <ActivityTypeTag>{props.competitionType}</ActivityTypeTag>
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

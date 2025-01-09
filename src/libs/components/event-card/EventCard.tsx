import { ActivityTypeTag, DistanceTag, Icon } from "~/components";
import { AppRoute, IconType } from "~/enums";
import dayjs from "dayjs";
import Image, { ImageProps } from "next/image";
import Link from "next/link";
import DefaultImage from "~/images/default.webp";

export const IconText: React.FC<{ icon: IconType; text: string }> = ({
  icon,
  text,
}) => (
  <div className={`grid grid-cols-[auto,1fr] items-center gap-3`}>
    <Icon name={icon} className="text-dark" />
    <p>{text}</p>
  </div>
);

export interface EventCardProps {
  id: number;
  name: string;
  dateFrom: Date;
  dateTo: Date;
  place: string;
  competitionType: string;
  photos: ImageProps;
  distances: Array<{
    id?: number | undefined;
    name?: string | undefined;
  }>;
}

interface EventCardAdditionalProps {
  isLiked?: boolean;
}

export const EventCard: React.FC<EventCardProps & EventCardAdditionalProps> = ({
  isLiked = false,
  ...props
}) => {
  const formatDateRange = (dateFrom: Date, dateTo: Date): string => {
    const startDate = dayjs(dateFrom).format("D");
    const endDay = dayjs(dateTo).format("D");
    const month = dayjs(dateFrom).format("MMMM");
    const year = dayjs(dateFrom).format("YYYY");

    const result =
      dateFrom === dateTo
        ? `${startDate} ${month} ${year}`
        : `${startDate}-${endDay} ${month} ${year}`;

    return result;
  };

  const formattedDate = formatDateRange(props.dateFrom, props.dateTo);

  return (
    <Link href={`${AppRoute.EVENT}/${props.id}`} passHref>
      <article
        className={`flex flex-col overflow-hidden rounded-2xl bg-white p-4 transition-shadow hover:shadow-md active:shadow-md`}
      >
        <figure
          className={`relative mb-4 h-0 w-full overflow-hidden rounded-2xl pb-[50%]`}
        >
          <Image
            {...props.photos}
            src={props.photos.src || DefaultImage}
            alt={props.name}
            className={`absolute inset-0 h-full w-full`}
          />
          {isLiked && (
            <figcaption className={`absolute bottom-2 right-2`}>
              <Icon
                name={IconType.LIKE}
                className="flex size-10 items-center justify-center rounded-full bg-white text-xl text-orange-hot shadow-sm xl:size-12 xl:text-2xl"
              />
            </figcaption>
          )}
        </figure>
        <section className={`flex flex-col gap-4`}>
          <header>
            <ActivityTypeTag>{props.competitionType}</ActivityTypeTag>
            <h4
              className={`pt-4 text-2xl font-semibold text-dark lg:text-[2rem]`}
            >
              {props.name}
            </h4>
          </header>
          <section className={`flex flex-col gap-4`}>
            <div className={`flex flex-col gap-2`}>
              <IconText icon={IconType.CALENDAR} text={formattedDate} />
              <IconText icon={IconType.PIN} text={props.place} />
            </div>
            <footer className={`flex flex-row flex-wrap gap-2`}>
              {props.distances.map((d, index) => (
                <DistanceTag key={index}>{d.name}</DistanceTag>
              ))}
            </footer>
          </section>
        </section>
      </article>
    </Link>
  );
};

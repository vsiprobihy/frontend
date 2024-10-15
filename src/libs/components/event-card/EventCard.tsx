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
  image: ImageProps;
  title: string;
  date: dayjs.Dayjs;
  category: string;
  location: string;
  distanceTitles: string[];
  id: number;
}

export const EventCard: React.FC<EventCardProps> = (props) => (
  <Link href={`${AppRoute.EVENT}/${props.id}`} passHref>
    <article
      className={`flex flex-col overflow-hidden rounded-2xl bg-white p-4`}
    >
      <figure
        className={`relative mb-4 h-0 w-full overflow-hidden rounded-2xl pb-[50%]`}
      >
        <Image
          {...props.image}
          src={props.image.src || DefaultImage}
          alt={props.title}
          className={`absolute inset-0 h-full w-full`}
        />
        <figcaption className={`sr-only`}>{props.title}</figcaption>
      </figure>
      <section className={`flex flex-col gap-4`}>
        <header>
          <ActivityTypeTag>{props.category}</ActivityTypeTag>
          <h4
            className={`pt-4 text-2xl font-semibold text-dark lg:text-[2rem]`}
          >
            {props.title}
          </h4>
        </header>
        <section className={`flex flex-col gap-4`}>
          <div className={`flex flex-col gap-2`}>
            <IconText
              icon={IconType.CALENDAR}
              text={props.date.format("YYYY-MM-DD")}
            />
            <IconText icon={IconType.PIN} text={props.location} />
          </div>
          <footer className={`flex flex-row flex-wrap gap-2`}>
            {props.distanceTitles.map((title, index) => (
              <DistanceTag key={index}>{title}</DistanceTag>
            ))}
          </footer>
        </section>
      </section>
    </article>
  </Link>
);
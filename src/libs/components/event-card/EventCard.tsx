import { CompetitionTypeTag, DistanceTag, Icon } from "~/components";
import { AppRoute, IconType } from "~/enums";
import dayjs from "dayjs";
import Image, { ImageProps } from "next/image";
import Link from "next/link";
import { EventCardImagePlaceholder } from "~/components/event-card/EventCardImagePlaceholder";
import { useTranslations } from "next-intl";

const IconText: React.FC<{ icon: IconType; text: string }> = ({
  icon,
  text,
}) => (
  <div className={`grid grid-cols-[auto,1fr] items-center gap-3`}>
    <Icon name={icon} className="text-dark" />
    <p>{text}</p>
  </div>
);

export interface EventCardProps {
  image?: ImageProps;
  title: string;
  dates: [dayjs.Dayjs, dayjs.Dayjs] | [dayjs.Dayjs];
  competitionTypeIds: string[];
  location: string;
  distanceTitles: string[];
  id: number;
  isLiked?: boolean;
  organizer?: {
    image?: ImageProps;
    name: string;
  };
}

export const EventCard: React.FC<EventCardProps> = (props) => {
  const t = useTranslations("EventCard");
  return (
    <>
      <Link
        href={`${AppRoute.EVENT}/${props.id}`}
        passHref
        className={`flex flex-col overflow-hidden rounded-2xl bg-white`}
      >
        {/*Image*/}
        <div className={`relative h-0 w-full pb-[50%]`}>
          <div className={`absolute inset-0 px-4 pt-4`}>
            {props.image ? (
              <Image
                src={props.image.src}
                className={`h-full rounded-xl`}
                alt={props.image.alt || "Running Event"}
                //TODO adjust sized
                width={200}
                height={200}
              />
            ) : (
              <EventCardImagePlaceholder title={props.title} />
            )}
          </div>
        </div>
        {/*Content*/}
        <div className={`flex flex-col gap-6 p-4`}>
          <div className={`flex flex-col gap-2`}>
            <div className={`flex flex-col gap-2`}>
              {!!props.competitionTypeIds.length && (
                <div className={`flex flex-row flex-wrap gap-2`}>
                  {props.competitionTypeIds.map((competitionTypeId, index) => (
                    <CompetitionTypeTag
                      key={index}
                      competitionTypeId={competitionTypeId}
                    />
                  ))}
                </div>
              )}
              <h4 className={`text-2xl font-semibold text-dark lg:text-[2rem]`}>
                {props.title}
              </h4>
            </div>
            {!!props.organizer && (
              <div className={`flex flex-row items-center gap-2`}>
                {/*  Organizer */}

                {props.organizer.image && (
                  <Image
                    src={props.organizer.image.src}
                    alt={props.organizer.image.alt || "Organizer"}
                    className={`h-9 w-9 rounded-full border-2 border-grey`}
                    // TODO adjust sized
                    width={36}
                    height={36}
                  />
                )}
                <p>{props.organizer.name} </p>
              </div>
            )}
            <div className={`flex flex-col gap-4`}>
              <div className={`flex flex-col gap-1`}>
                <IconText
                  icon={IconType.CALENDAR}
                  text={`${t("date")}: ${props.dates
                    .map((date) => date.format("YYYY-MM-DD"))
                    .join(" - ")}`}
                />
                <IconText
                  icon={IconType.PIN}
                  text={`${t("location")}: ${props.location}`}
                />
              </div>
              <div>
                <div className={`flex flex-row flex-wrap gap-2`}>
                  {props.distanceTitles.map((title, index) => (
                    <DistanceTag key={index}>{title}</DistanceTag>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

// Saved for later semantics reference ...
/*
<Link href={`${AppRoute.EVENT}/${props.id}`} passHref>
        <article
          className={`flex flex-col overflow-hidden rounded-2xl bg-white p-4 transition-shadow hover:shadow-md active:shadow-md`}
        >
          <figure
            className={`relative mb-4 h-0 w-full overflow-hidden rounded-2xl pb-[50%]`}
          >
            <Image
              {...props.image}
              className={`absolute inset-0 h-full w-full`}
            />
            {props.isLiked && (
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
              <CompetitionTypeTag {...props.competitionType} />
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
 */

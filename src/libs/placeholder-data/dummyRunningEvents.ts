import { EventCardProps } from "~/components";
import { faker } from "@faker-js/faker";
import dayjs from "dayjs";

export const dummyRunningEvent = (): EventCardProps => {
  const randomImageProps = () => ({
    src: faker.image.url({ width: 200, height: 200 }),
    alt: faker.lorem.words(3),
    height: 200,
    width: 200,
  });

  // TODO add image
  // const hasImage = Math.random() > 0.5;
  const hasImage = false;
  // TODO add organizer
  // const hasOrganizer = Math.random() > 0.5;
  const hasOrganizer = false;
  const startDate = dayjs(
    faker.date.between({
      from: "2024-01-01",
      to: "2025-12-31",
    })
  );
  const isMultiDay = Math.random() > 0.5;
  const dates: [dayjs.Dayjs] | [dayjs.Dayjs, dayjs.Dayjs] = isMultiDay
    ? [
        startDate,
        dayjs(
          faker.date.between({ from: startDate.toDate(), to: "2025-12-31" })
        ),
      ]
    : [startDate];

  return {
    image: hasImage ? randomImageProps() : undefined,
    title: faker.company.catchPhrase() + " Run",
    dates: dates,
    competitionTypeIds: faker.helpers.arrayElements(
      ["1", "2"],
      Math.random() > 0.5 ? 1 : 0
    ),
    location: faker.location.city(),
    distanceTitles: [
      `${faker.number.int({ min: 5, max: 42 })} km`,
      `${faker.number.int({ min: 1, max: 50 })} mi`,
    ],
    id: Math.floor(Math.random() * 90000000) + 10000000,
    isLiked: Math.random() > 0.5 ? faker.datatype.boolean() : undefined,
    organizer: hasOrganizer
      ? {
          image: Math.random() > 0.5 ? randomImageProps() : undefined,
          name: faker.company.name(),
        }
      : undefined,
  };
};

const dummyRunningEvents = (length: number): EventCardProps[] => {
  const events: EventCardProps[] = [];
  for (let i = 0; i < length; i++) {
    events.push(dummyRunningEvent());
  }
  return events;
};

export default dummyRunningEvents;

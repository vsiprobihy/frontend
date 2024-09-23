import ActivityTypeTag from "@/app/components/ActivityTypeTag";
import Button from "@/app/components/buttons/Button";
import DistanceTag from "@/app/components/DistanceTag";
import Icon from "@/app/components/icon/Icon";
import { IconType } from "@/app/enums/icon/icon.type";
import dayjs from "dayjs";
import Image, { ImageProps } from "next/image";

const buttonText = `Детальніше`;

const IconText: React.FC<{ icon: IconType; text: string }> = (
    {
        icon,
        text,
    }) => {
    return (
        <div className={`grid grid-cols-[auto,1fr] items-center gap-3`}>
            <Icon name={icon} className="text-2xl text-dark"/>
            <p>{text}</p>
        </div>
    );
};

export interface EventCardProps {
  image: ImageProps;
  title: string;
  date: dayjs.Dayjs;
  category: string;
  location: string;
  distanceTitles: string[];
}

const EventCard: React.FC<EventCardProps> = (props) => {
  return (
    <div className={`flex flex-col overflow-hidden rounded-2xl bg-white`}>
      <div className={`relative h-0 w-full pb-[50%]`}>
        <Image {...props.image} className={`absolute inset-0 h-full w-full`} />
      </div>
      <div className={`flex flex-col gap-6 p-4`}>
        <div className={`flex flex-col`}>
            <div className={`flex flex-col gap-2`}>
                <div>
                    <ActivityTypeTag>{props.category}</ActivityTypeTag>
                </div>
                <h3 className={`text-2xl font-semibold text-dark lg:text-[2rem]`}>
                    {props.title}
                </h3>
            </div>
            <div className={`flex flex-col gap-4`}>
                <div className={`flex flex-col gap-1`}>
                    <IconText icon={IconType.CALENDAR} text={props.date.format("YYYY-MM-DD")}/>
                    <IconText icon={IconType.PIN} text={props.location}/>
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
        <Button size={"middle"}>{buttonText}</Button>
      </div>
    </div>
  );
};

export default EventCard;

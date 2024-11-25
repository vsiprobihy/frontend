import { IconType } from "@/libs/enums";
import LogoOrgonizer from "~/images/logo-organizer.jpg";
import { DistanceOption } from "../DistanceSelector";

export const organizerInfo = {
  name: "Твоя Пригода",
  logo: LogoOrgonizer,
  email: "goldriverua@gmail.com",
  phone: "+380981313874",
  description: [
    "Про Об’єднані сміливістю: благодійний забіг та збір коштів на «Ловця шахедів»",
    "Завданням учасника є проходження всієї дистанції в рамках встановленого контрольного часу.",
    "В межах дистанції учасники рухаються за визначеним організаторами маршрутом в режимі non-stop, та самостійно визначають свій темп руху, місце та тривалість свого відпочинку.",
  ],
  socialLinks: [
    { iconType: IconType.INSTAGRAM },
    { iconType: IconType.FACEBOOK },
    { iconType: IconType.TELEGRAM },
  ],
};

export const distances: DistanceOption[] = [
  {
    type: "LONG",
    distance: "58km",
    age: "18+",
    price: "850 грн",
  },
  {
    type: "MIDDLE",
    distance: "33km",
    age: "18+",
    price: "550 грн",
  },
  {
    type: "MIDDLE",
    distance: "33km",
    age: "18+",
    price: "550 грн",
  },
  {
    type: "MIDDLE",
    distance: "33km",
    age: "18+",
    price: "550 грн",
  },
  {
    type: "Лайт",
    distance: "20km",
    age: "",
    price: "250 грн",
  },
  {
    type: "Дитяча",
    distance: "5km",
    age: "",
    price: "250 грн",
  },
];

type Participant = {
  id: number;
  startNumber: number;
  name: string;
  city: string;
  gender: string;
  birthYear: number;
  club: string;
};

export const participants: Participant[] = [
  {
    id: 0,
    startNumber: 1,
    club: "Iron Club",
    name: "Колодяженський Андрій",
    city: "Івано-Франківськ",
    gender: "Ч",
    birthYear: 2000,
  },
  {
    id: 1,
    startNumber: 1,
    club: "Iron Club",
    name: "Колодяженський Андрій",
    city: "Івано-Франківськ",
    gender: "Ч",
    birthYear: 2000,
  },
  {
    id: 2,
    startNumber: 1,
    club: "Iron Club",
    name: "Колодяженський Андрій",
    city: "Івано-Франківськ",
    gender: "Ч",
    birthYear: 2000,
  },
  {
    id: 3,
    startNumber: 1,
    club: "Iron Club",
    name: "Колодяженський Андрій",
    city: "Івано-Франківськ",
    gender: "Ч",
    birthYear: 2000,
  },
  {
    id: 4,
    startNumber: 1,
    club: "Iron Club",
    name: "Колодяженський Андрій",
    city: "Івано-Франківськ",
    gender: "Ч",
    birthYear: 2000,
  },
  {
    id: 5,
    startNumber: 1,
    club: "Iron Club",
    name: "Колодяженський Андрій",
    city: "Івано-Франківськ",
    gender: "Ч",
    birthYear: 2000,
  },
];

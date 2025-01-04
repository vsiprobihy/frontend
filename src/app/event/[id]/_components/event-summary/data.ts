export type DistanceOption = {
  type: string;
  distance: string;
  age: string;
  price: string;
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
    type: "LITE",
    distance: "19km",
    age: "",
    price: "250 грн",
  },
];

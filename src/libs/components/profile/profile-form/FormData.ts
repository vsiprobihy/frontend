import { tshirtSizes } from "@/libs/consts/sizes";

export const createGenderOptions = (t: (key: string) => string) => [
  { value: "M", label: t("profileForm.sex.male") },
  { value: "F", label: t("profileForm.sex.female") },
];

export const createMonthOptions = (t: (key: string) => string) => [
  { value: "1", label: t("month.january") },
  { value: "2", label: t("month.february") },
  { value: "3", label: t("month.march") },
  { value: "4", label: t("month.april") },
  { value: "5", label: t("month.may") },
  { value: "6", label: t("month.june") },
  { value: "7", label: t("month.july") },
  { value: "8", label: t("month.august") },
  { value: "9", label: t("month.september") },
  { value: "10", label: t("month.october") },
  { value: "11", label: t("month.november") },
  { value: "12", label: t("month.december") },
];

export const tshirtSizesOptions = [
  {
    value: tshirtSizes.XXS,
    label: tshirtSizes.XXS,
  },
  {
    value: tshirtSizes.XS,
    label: tshirtSizes.XS,
  },
  {
    value: tshirtSizes.S,
    label: tshirtSizes.S,
  },
  {
    value: tshirtSizes.M,
    label: tshirtSizes.M,
  },
  {
    value: tshirtSizes.L,
    label: tshirtSizes.L,
  },
  {
    value: tshirtSizes.XL,
    label: tshirtSizes.XL,
  },
  {
    value: tshirtSizes.XXL,
    label: tshirtSizes.XXL,
  },
  {
    value: tshirtSizes.XXXL,
    label: tshirtSizes.XXXL,
  },
];

export const createDaysOptions = () => {
  const days = Array.from({ length: 31 }, (_, i) => ({
    value: (i + 1).toString(),
    label: (i + 1).toString(),
  }));
  return days;
};

export const createYearsOptions = (startYear: number, endYear: number) => {
  const years = Array.from({ length: endYear - startYear + 1 }, (_, i) => ({
    value: (startYear + i).toString(),
    label: (startYear + i).toString(),
  }));
  return years;
};

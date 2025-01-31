import { Input, Select } from "~/components";
import { IconType } from "~/enums/icon/icon.type";
import { UserPublicEventFilterListData } from "~/api-client/types.gen";
import dayjs from "dayjs";
import "dayjs/locale/uk";
import "dayjs/locale/en";

// TODO call API for regions

//TODO use useCalendarFilterParams hook for inputs

type RegionType = {
  title: string;
  id: string;
};
const regions: RegionType[] = [];

for (let i = 0; i < 5; i++) {
  regions.push({
    title: `Region ${i}`,
    id: i.toString(),
  });
}

interface CalendarFilterInputsProps {
  onChange: (
    newFilters: Partial<UserPublicEventFilterListData["query"]>
  ) => void;
}

// TODO change month selector to a better date picker
// The current issue is selecting months from past years... or from the next year
// ... or selecting several months at once

const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const generateMonths = (locale: string) => {
  dayjs.locale(locale);
  return Array.from({ length: 12 }, (_, i) => ({
    title: capitalizeFirstLetter(dayjs().month(i).format("MMMM")),
    id: i + 1,
  }));
};

const selectedLocale = "uk";
const months = generateMonths(selectedLocale);

export const CalendarFilterInputs: React.FC<CalendarFilterInputsProps> = ({
  onChange,
}) => {
  const handleMonthChange = (value: string | null) => {
    // const monthNumber = value ? parseInt(value, 10) : null;
    onChange({
      dateFrom: value as string, //TODO change it in correct type/logic
      // month: monthNumber ?? undefined,   //type conflict due to update types(no more month)
    });
  };

  return (
    <div
      className={`flex w-full flex-col gap-6 text-white lg:grid lg:grid-cols-3 xl:grid-cols-7`}
    >
      <div className={`xl:col-span-3`}>
        <Input
          id={`title`}
          icon={IconType.SEARCH}
          placeholder={`Ввести назву події`}
          label={{
            icon: IconType.SEARCH,
            text: `Пошук за назвою`,
          }}
        />
      </div>
      <div className={`xl:col-span-2`}>
        <Select
          options={months.map((month) => ({
            value: month.id.toString(),
            label: month.title,
          }))}
          placeholder={`Місяць`}
          label={{
            icon: IconType.CALENDAR,
            text: `Дата проведення`,
          }}
          onChange={handleMonthChange}
        />
      </div>
      <div className={`xl:col-span-2`}>
        <Select
          placeholder={`Регіон`}
          options={regions.map((region) => ({
            value: region.id,
            label: region.title,
          }))}
          label={{
            icon: IconType.PIN,
            text: `Регіон`,
          }}
        />
      </div>
    </div>
  );
};

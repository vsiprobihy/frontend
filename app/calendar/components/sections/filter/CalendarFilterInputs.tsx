import { Input } from "@/app/components/inputs/Input";
import { IconType } from "@/app/enums/icon/icon.type";
import Select from "@/app/components/inputs/Select"; // TODO call API for regions

// TODO call API for regions

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

// TODO change month selector to a better date picker
// The current issue is selecting months from past years... or from the next year
// ... or selecting several months at once
type MonthType = {
  title: string;
  id: string;
};

const months: MonthType[] = [];

for (let i = 0; i < 12; i++) {
  months.push({
    title: `Month ${i}`,
    id: i.toString(),
  });
}

const CalendarFilterInputs: React.FC = () => {
  return (
    <div
      className={`flex w-full flex-col gap-6 text-white lg:grid lg:grid-cols-3 xl:grid-cols-7`}
    >
      {/*TODO Change icon to search*/}

      <div className={`xl:col-span-3`}>
        <Input
          id={`title`}
          icon={IconType.BELL}
          placeholder={`Ввести назву події`}
          label={{
            icon: IconType.BELL,
            text: `Пошук за назвою`,
          }}
        />
      </div>
      <div className={`xl:col-span-2`}>
        <Select
          options={months.map((month) => ({
            value: month.id,
            label: month.title,
          }))}
          placeholder={`Місяць`}
          label={{
            icon: IconType.CALENDAR,
            text: `Дата проведен`,
          }}
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

export default CalendarFilterInputs;

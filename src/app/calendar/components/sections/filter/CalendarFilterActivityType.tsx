// TODO pull tags from API
"use client";
import { ActivityTypeButton } from "~/components/activity-type/ActivityTypeButton";
import { CalendarFilterListResponse } from "~/api-client/types.gen";
import { useState } from "react";

type CompetitionType = CalendarFilterListResponse[0]["competition_type"];

interface CalendarFilterActivityTypeProps {
  onChange: (competitionTypeId?: CompetitionType) => void;
}

export const CalendarFilterActivityType: React.FC<
  CalendarFilterActivityTypeProps
> = (props) => {
  const tags: {
    id: CompetitionType;
    children: string;
  }[] = [
    { id: "running", children: "Біг" },
    { id: "trail", children: "Трейл" },
    { id: "ultramarathon", children: "Ультрамарафон" },
    { id: "cycling", children: "Велоспорт" },
    { id: "online", children: "Онлайн" },
    { id: "walking", children: "Ходьба" },
    { id: "ocr", children: "OCR" },
    { id: "swimming", children: "Плавання" },
    { id: "triathlon", children: "Триатлон" },
  ];

  const [selectedTagId, setSelectedTagId] = useState<
    CompetitionType | undefined
  >(undefined);

  const toggleSelect = (id?: CompetitionType) => {
    setSelectedTagId(id);
    props.onChange(id);
  };

  return (
    <div className={`flex flex-col gap-2`}>
      <p className={`font-semibold uppercase text-white`}>{`Тип змагання`}</p>
      <div className={`flex flex-row flex-wrap gap-2`}>
        {tags.map((tag) => (
          <ActivityTypeButton
            selected={selectedTagId === tag.id}
            key={tag.id}
            {...tag}
            onClick={() => toggleSelect(tag.id)}
          >
            {tag.children}
          </ActivityTypeButton>
        ))}
      </div>
    </div>
  );
};

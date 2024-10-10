// TODO pull tags from API
"use client";
import { ActivityTypeTagProps } from "~/components/tags/ActivityTypeTag";
import { ActivityTypeButton } from "~/components/activity-type/ActivityTypeButton";
import { CalendarFilterListData } from "~/api-client/types.gen";
import { useState } from "react";

interface CalendarFilterActivityTypeProps {
  onChange: (newFilters: Partial<CalendarFilterListData["query"]>) => void;
}

export const CalendarFilterActivityType: React.FC<
  CalendarFilterActivityTypeProps
> = ({ onChange }) => {
  const tags: ActivityTypeTagProps[] = [
    { id: "all", children: "Усі" },
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

  const [selectedTagId, setSelectedTagId] = useState<string | null>(null);

  const toggleSelect = (id: string) => {
    setSelectedTagId(id);
    onChange({ competition_type: id === "all" ? undefined : id });
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

// TODO pull tags from API
import { ActivityTypeTagProps } from "@/app/components/activity-type/ActivityTypeTag";
import ActivityTypeButton from "@/app/components/activity-type/ActivityTypeButton";
import { useState } from "react";

const CalendarFilterActivityType: React.FC = () => {
  const tags: ActivityTypeTagProps[] = [];

  for (let i = 0; i < 5; i++) {
    tags.push({
      id: i.toString(),
      children: `Tag ${i}`,
    });
  }
  const [selectedTagIds, setSelectedTagIds] = useState<string[]>([]);

  const toggleSelect = (id: string) => {
    setSelectedTagIds((prevTags) =>
      prevTags.includes(id)
        ? prevTags.filter((tagId) => tagId !== id)
        : [...prevTags, id]
    );
  };

  return (
    <div className={`flex flex-col gap-2`}>
      <p className={`font-semibold uppercase text-white`}>{`Тип змагання`}</p>
      <div className={`flex flex-row flex-wrap gap-2`}>
        {tags.map((tag) => (
          <ActivityTypeButton
            selected={selectedTagIds.includes(tag.id)}
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

export default CalendarFilterActivityType;

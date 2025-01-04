import { Icon } from "@/libs/components";
import { IconType } from "@/libs/enums";

type Props = {
  views: number;
  likes: number;
};

const LikesAndViews: React.FC<Props> = ({ views, likes }) => {
  return (
    <div className="grid grid-flow-col justify-center ~gap-6/8">
      <div className="grid grid-flow-col items-center justify-start gap-2">
        <Icon name={IconType.EYE} className="text-grey" />
        <p className="text-sm font-medium leading-snug text-grey">
          {views} переглядів
        </p>
      </div>

      <div className="grid grid-flow-col items-center justify-start gap-2">
        <Icon name={IconType.LIKE} className="text-grey" />
        <p className="text-sm font-medium leading-snug text-grey">
          {likes} вподобали
        </p>
      </div>
    </div>
  );
};

export default LikesAndViews;

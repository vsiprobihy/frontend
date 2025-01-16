import { IconType } from "@/libs/enums";
import { Icon } from "../..";

type IconPhotoProps = {
  classNameDiv?: string;
  classNameIcon?: string;
};

export const IconPhoto: React.FC<IconPhotoProps> = ({
  classNameDiv = "",
  classNameIcon = "",
}) => {
  return (
    <div className={classNameDiv}>
      <Icon name={IconType.PHOTO} className={classNameIcon} />
    </div>
  );
};

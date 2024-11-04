import { IconType, ProfileSections } from "@/libs/enums";

export const ProfileButtons = [
  {
    id: 0,
    icon: IconType.USER,
    titleKey: "data",
    section: ProfileSections.DATA,
  },
  {
    id: 1,
    icon: IconType.CROWN,
    titleKey: "registrations",
    section: ProfileSections.REGISTRATIONS,
  },
  {
    id: 3,
    icon: IconType.HASH,
    titleKey: "archive",
    section: ProfileSections.ARCHIVE,
  },
  {
    id: 4,
    icon: IconType.LIKE,
    titleKey: "likes",
    section: ProfileSections.LIKES,
  },
];

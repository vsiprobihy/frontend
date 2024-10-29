import { ProfileForm } from "../components/profile/profile-form/ProfileForm";
import { ArchiveOfStarts } from "../components/profile/sections/ArchiveOfStarts";
import { FavoriteEventSection } from "../components/profile/sections/FavoriteEventSection";
import { RegistartionsSection } from "../components/profile/sections/RegistartionsSection";
import { ProfileSections } from "../enums";

export const getProfileScreen = (path: ProfileSections) => {
  switch (path) {
    case ProfileSections.DATA:
      return <ProfileForm />;
    case ProfileSections.REGISTRATIONS:
      return <RegistartionsSection />;
    case ProfileSections.LIKES:
      return <FavoriteEventSection />;
    case ProfileSections.ARCHIVE:
      return <ArchiveOfStarts />;
    default:
      return <ProfileForm />;
  }
};

import { UserProfile } from "../api-client";
import { ProfileForm, UserProfileFormValues } from "../components/profile/profile-form/ProfileForm";
import { ArchiveOfStarts } from "../components/profile/sections/ArchiveOfStarts";
import { FavoriteEventSection } from "../components/profile/sections/FavoriteEventSection";
import { RegistartionsSection } from "../components/profile/sections/RegistartionsSection";
import { ProfileSections } from "../enums";

export const getProfileScreen = (
  path: ProfileSections,
  onSubmitProfileData: (
    profile: UserProfileFormValues,
  ) => void,
  userProfile: UserProfile
) => {
  
  switch (path) {
    case ProfileSections.DATA:
      return (
        <ProfileForm
          onSubmitProfileData={onSubmitProfileData}
          user={userProfile}
        />
      );

    case ProfileSections.REGISTRATIONS:
      return <RegistartionsSection />;

    case ProfileSections.LIKES:
      return <FavoriteEventSection />;

    case ProfileSections.ARCHIVE:
      return <ArchiveOfStarts />;

    default:
      return (
        <ProfileForm
          onSubmitProfileData={onSubmitProfileData}
          user={userProfile}
        />
      );
  }
};
